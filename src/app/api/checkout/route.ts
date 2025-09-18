// app/api/checkout/route.ts
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { stripe } from '@/lib/stripe'
import { supabaseAdmin } from '@/lib/supabase/admin'

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { items, shippingAddress, billingAddress } = await request.json()
    
    console.log('Received checkout data:', { items, shippingAddress, billingAddress })

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'No items provided' }, { status: 400 })
    }

    const supabase = supabaseAdmin

    // Ensure user exists in 'users' table for FK constraints
    {
      const { error: userUpsertError } = await supabase
        .from('users')
        .upsert({
          id: session.user.id as string,
          email: session.user.email || '',
          name: (session.user as any).name || null,
        }, { onConflict: 'id' })

      if (userUpsertError) {
        console.error('User upsert error:', userUpsertError)
        return NextResponse.json({ error: 'Failed to ensure user' }, { status: 500 })
      }
    }

    // Get products from database by slug (your cart uses slug as id)
    const slugs = Array.from(new Set(items.map((i: any) => i.id))).filter(Boolean)
    console.log('Looking up products with slugs:', slugs)
    
    const { data: products, error: productsError } = await supabase
      .from('products')
      .select('id, slug, name, price, stock, active')
      .in('slug', slugs)
      .eq('active', true)

    if (productsError) {
      console.error('Products lookup error:', productsError)
      return NextResponse.json({ error: 'Failed to lookup products' }, { status: 500 })
    }

    if (!products || products.length === 0) {
      console.error('No products found for slugs:', slugs)
      return NextResponse.json({ error: 'Products not found' }, { status: 404 })
    }

    console.log('Found products:', products)

    // Create a map of slug -> product data
    const productBySlug = new Map(products.map((p: any) => [p.slug, p]))

    // Validate all items exist and are in stock
    const invalidItems = items.filter((item: any) => {
      const product = productBySlug.get(item.id)
      return !product || (product.stock !== null && product.stock < item.quantity)
    })
    
    if (invalidItems.length > 0) {
      console.error('Invalid items:', invalidItems)
      return NextResponse.json({ 
        error: `Some products are unavailable or out of stock` 
      }, { status: 400 })
    }

    // Calculate totals using DATABASE prices (never trust frontend prices)
    const validatedItems = items.map((item: any) => {
      const product = productBySlug.get(item.id)
      return {
        ...item,
        price: product.price, // Use database price
        productId: product.id  // Store the UUID
      }
    })

    const subtotal = validatedItems.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0)
    const shipping = subtotal >= 100 ? 0 : 25
    const tax = 0
    const total = subtotal + shipping

    console.log('Order totals:', { subtotal, shipping, tax, total })

    // Create shipping address
    let addressId = null
    if (shippingAddress) {
      try {
        const { data: address, error: addressError } = await supabase
          .from('addresses')
          .insert({
            user_id: session.user.id,
            first_name: shippingAddress.firstName,
            last_name: shippingAddress.lastName,
            company: shippingAddress.company || null,
            address1: shippingAddress.address,
            city: shippingAddress.city,
            state: shippingAddress.state,
            zip_code: shippingAddress.zipCode,
            country: shippingAddress.country || 'US',
            phone: shippingAddress.phone,
          })
          .select()
          .single()

        if (addressError) {
          console.error('Address creation error:', addressError)
          return NextResponse.json({ error: 'Failed to save address' }, { status: 500 })
        }
        addressId = address.id
        console.log('Created address with ID:', addressId)
      } catch (error) {
        console.error('Address creation failed:', error)
        return NextResponse.json({ error: 'Failed to save address' }, { status: 500 })
      }
    }

    // Generate order number
    const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    // Create order in database
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        order_number: orderNumber,
        user_id: session.user.id,
        email: session.user.email!,
        phone: shippingAddress?.phone || null,
        subtotal: subtotal,
        tax: 0,
        shipping: shipping,
        total: total,
        status: 'PENDING',
        payment_status: 'PENDING',
        shipping_address_id: addressId,
        billing_address: billingAddress || null,
      })
      .select()
      .single()

    if (orderError) {
      console.error('Order creation error:', orderError)
      return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
    }

    console.log('Created order:', order.id)

    // Create order items with proper product IDs
    const orderItems = validatedItems.map((item: any) => ({
      order_id: order.id,
      product_id: item.productId, // Use the actual UUID from database
      product_name: item.name,
      product_image: item.image,
      quantity: item.quantity,
      price: item.price, // Use validated database price
      total: item.price * item.quantity
    }))

    console.log('Creating order items:', orderItems)

    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(orderItems)

    if (itemsError) {
      console.error('Order items error:', itemsError)
      return NextResponse.json({ error: 'Failed to create order items' }, { status: 500 })
    }

    // Build line items for Stripe using validated prices
    const lineItems = [
      ...validatedItems.map((item: any) => {
        const productData: any = {
          name: item.name,
          images: item.image ? [`${process.env.NEXTAUTH_URL}${item.image}`] : [],
        }
        // Only include description if it’s non-empty to avoid Stripe error
        if (item.shortDescription && String(item.shortDescription).trim().length > 0) {
          productData.description = String(item.shortDescription)
        }
        return {
          price_data: {
            currency: 'usd',
            product_data: productData,
            unit_amount: Math.round(item.price * 100),
          },
          quantity: item.quantity,
        }
      }),
      ...(shipping > 0
        ? [{
            price_data: {
              currency: 'usd',
              product_data: { name: 'Shipping' },
              unit_amount: Math.round(shipping * 100),
            },
            quantity: 1,
          }]
        : []),
    ]

    console.log('Creating Stripe session with line items:', lineItems)

    // Create Stripe checkout session
    const stripeSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXTAUTH_URL}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/cart?cancelled=true`,
      metadata: {
        orderId: order.id,
        orderNumber: orderNumber,
        userId: session.user.id,
      },
      customer_email: session.user.email!,
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },
      automatic_tax: {
        enabled: false,
      },
    })

    // Update order with Stripe session ID
    await supabase
      .from('orders')
      .update({ stripe_session_id: stripeSession.id })
      .eq('id', order.id)

    console.log('Created Stripe session:', stripeSession.id)

    return NextResponse.json({ 
      sessionId: stripeSession.id,
      orderId: order.id,
      orderNumber: orderNumber 
    })

  } catch (error: any) {
    console.error('Checkout error:', error)
    return NextResponse.json({ 
      error: error.message || 'Checkout failed',
      details: error.stack 
    }, { status: 500 })
  }
}

// // app/api/checkout/route.ts
// import { NextResponse } from 'next/server'
// import { getServerSession } from 'next-auth'
// import { authOptions } from '@/lib/auth'
// import { stripe } from '@/lib/stripe'
// import { supabaseAdmin } from '@/lib/supabase/admin'

// export async function POST(request: Request) {
//   try {
//     const session = await getServerSession(authOptions)
//     if (!session?.user) {
//       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
//     }

//     const { items, shippingAddress, billingAddress } = await request.json()
    
//     console.log('Received checkout data:', { items, shippingAddress, billingAddress })

//     if (!items || items.length === 0) {
//       return NextResponse.json({ error: 'No items provided' }, { status: 400 })
//     }

//     const supabase = supabaseAdmin

//     // Get product UUIDs from slugs - this is the key fix!
//     const slugs = Array.from(new Set(items.map((i: any) => i.id))).filter(Boolean)
//     console.log('Looking up products with slugs:', slugs)
    
//     const { data: products, error: productsError } = await supabase
//       .from('products')
//       .select('id, slug, name, price')
//       .in('slug', slugs)

//     if (productsError) {
//       console.error('Products lookup error:', productsError)
//       return NextResponse.json({ error: 'Failed to lookup products' }, { status: 500 })
//     }

//     if (!products || products.length === 0) {
//       console.error('No products found for slugs:', slugs)
//       return NextResponse.json({ error: 'Products not found' }, { status: 404 })
//     }

//     console.log('Found products:', products)

//     // Create a map of slug -> product data
//     const productBySlug = new Map(products.map((p: any) => [p.slug, p]))

//     // Validate all items exist
//     const invalidItems = items.filter((item: any) => !productBySlug.has(item.id))
//     if (invalidItems.length > 0) {
//       console.error('Invalid items:', invalidItems)
//       return NextResponse.json({ 
//         error: `Products not found: ${invalidItems.map((i: any) => i.id).join(', ')}` 
//       }, { status: 400 })
//     }

//     // Calculate totals
//     const subtotal = items.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0)
//     const shipping = subtotal >= 100 ? 0 : 25
//     const tax = subtotal * 0.13
//     const total = subtotal + shipping + tax

//     console.log('Order totals:', { subtotal, shipping, tax, total })

//     // Create or get shipping address
//     let addressId = null
//     if (shippingAddress) {
//       try {
//         const { data: address, error: addressError } = await supabase
//           .from('addresses')
//           .insert({
//             user_id: session.user.id,
//             first_name: shippingAddress.firstName,
//             last_name: shippingAddress.lastName,
//             company: shippingAddress.company || null,
//             address1: shippingAddress.address,
//             city: shippingAddress.city,
//             state: shippingAddress.state,
//             zip_code: shippingAddress.zipCode,
//             country: shippingAddress.country || 'US',
//             phone: shippingAddress.phone,
//           })
//           .select()
//           .single()

//         if (addressError) {
//           console.error('Address creation error:', addressError)
//           return NextResponse.json({ error: 'Failed to save address' }, { status: 500 })
//         }
//         addressId = address.id
//         console.log('Created address with ID:', addressId)
//       } catch (error) {
//         console.error('Address creation failed:', error)
//         return NextResponse.json({ error: 'Failed to save address' }, { status: 500 })
//       }
//     }

//     // Generate order number
//     const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

//     // Create order in database
//     const { data: order, error: orderError } = await supabase
//       .from('orders')
//       .insert({
//         order_number: orderNumber,
//         user_id: session.user.id,
//         email: session.user.email!,
//         phone: shippingAddress?.phone || null,
//         subtotal: subtotal,
//         tax: tax,
//         shipping: shipping,
//         total: total,
//         status: 'PENDING',
//         payment_status: 'PENDING',
//         shipping_address_id: addressId,
//         billing_address: billingAddress || null,
//       })
//       .select()
//       .single()

//     if (orderError) {
//       console.error('Order creation error:', orderError)
//       return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
//     }

//     console.log('Created order:', order.id)

//     // Create order items with proper product IDs
//     const orderItems = items.map((item: any) => {
//       const product = productBySlug.get(item.id) // Get the actual product data
//       if (!product) {
//         throw new Error(`Product not found for slug: ${item.id}`)
//       }
      
//       return {
//         order_id: order.id,
//         product_id: product.id, // Use the actual UUID from database
//         product_name: item.name,
//         product_image: item.image,
//         quantity: item.quantity,
//         price: item.price,
//         total: item.price * item.quantity
//       }
//     })

//     console.log('Creating order items:', orderItems)

//     const { error: itemsError } = await supabase
//       .from('order_items')
//       .insert(orderItems)

//     if (itemsError) {
//       console.error('Order items error:', itemsError)
//       return NextResponse.json({ error: 'Failed to create order items' }, { status: 500 })
//     }

//     // Build line items for Stripe
//     const lineItems = [
//       ...items.map((item: any) => ({
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: item.name,
//             images: item.image ? [`${process.env.NEXTAUTH_URL}${item.image}`] : [],
//             description: item.shortDescription || '',
//           },
//           unit_amount: Math.round(item.price * 100),
//         },
//         quantity: item.quantity,
//       })),
//       ...(shipping > 0
//         ? [{
//             price_data: {
//               currency: 'usd',
//               product_data: { name: 'Shipping' },
//               unit_amount: Math.round(shipping * 100),
//             },
//             quantity: 1,
//           }]
//         : []),
//     ]

//     console.log('Creating Stripe session with line items:', lineItems)

//     // Create Stripe checkout session
//     const stripeSession = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: lineItems,
//       mode: 'payment',
//       success_url: `${process.env.NEXTAUTH_URL}/order/success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${process.env.NEXTAUTH_URL}/cart?cancelled=true`,
//       metadata: {
//         orderId: order.id,
//         orderNumber: orderNumber,
//         userId: session.user.id,
//       },
//       customer_email: session.user.email!,
//       billing_address_collection: 'required',
//       shipping_address_collection: {
//         allowed_countries: ['US', 'CA'],
//       },
//       automatic_tax: {
//         enabled: false, // Set to true if you want Stripe to calculate tax
//       },
//     })

//     // Update order with Stripe session ID
//     await supabase
//       .from('orders')
//       .update({ stripe_session_id: stripeSession.id })
//       .eq('id', order.id)

//     console.log('Created Stripe session:', stripeSession.id)

//     return NextResponse.json({ 
//       sessionId: stripeSession.id,
//       orderId: order.id,
//       orderNumber: orderNumber 
//     })

//   } catch (error: any) {
//     console.error('Checkout error:', error)
//     return NextResponse.json({ 
//       error: error.message || 'Checkout failed',
//       details: error.stack 
//     }, { status: 500 })
//   }
// }