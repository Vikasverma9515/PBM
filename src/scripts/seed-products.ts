// scripts/seed-products.ts
import { supabaseAdmin } from '@/lib/supabase/admin';
import { productsData } from '@/data/products';

export async function seedProducts() {
  try {
    console.log('Seeding products...');
    
    // Clear existing products
    const { error: deleteError } = await supabaseAdmin
      .from('products')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all
    
    if (deleteError) {
      console.error('Error clearing products:', deleteError);
    }
    
    // Transform products data for database
    const dbProducts = productsData.map(product => ({
      slug: product.slug,
      name: product.name,
      short_description: product.short_description,
      description: product.description,
      images: product.images,
      price: product.price,
      category: product.category,
      features: product.features,
      specifications: product.specifications,
      benefits: product.benefits,
      whats_in_box: product.whats_in_box,
      user_guides: product.user_guides,
      videos: product.videos,
      combined_products: product.combined_products || [],
      stock: 100, // Set initial stock
      active: true
    }));

    // Insert products
    const { data, error } = await supabaseAdmin
      .from('products')
      .insert(dbProducts)
      .select();

    if (error) {
      console.error('Error seeding products:', error);
      throw error;
    }

    console.log(`Successfully seeded ${data.length} products:`, data.map(p => p.name));
    return data;
  } catch (error) {
    console.error('Error in seedProducts:', error);
    throw error;
  }
}

// Run this function
if (require.main === module) {
  seedProducts()
    .then(() => {
      console.log('Seeding completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Seeding failed:', error);
      process.exit(1);
    });
}