// import { getProductBySlug } from "@/utils/products";
// import ProductDetailSection from "@/components/Product/ProductDetailSection";
// import FooterSection from "@/components/FooterSection";
// import Header from "@/components/header";

// export default function ProductPage({ params }: { params: { id: string } }) {
//   const product = getProductBySlug(params.id);

//   // Fallback: if slug not found, you could redirect or show 404 UI
//   if (!product) {
//     return (
//       <main className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-semibold mb-2">Product not found</h1>
//           <p className="text-gray-600">Please check the URL or return to the shop.</p>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main>
//       <Header />
//       <ProductDetailSection product={product} />
//       <FooterSection />
//     </main>
//   );
// }

// app/product/[slug]/page.tsx
import { notFound } from 'next/navigation';
// import ProductDetailSection from '@/components/ProductDetailSection';
import ProductDetailSection from '@/components/Product/ProductDetailSection';
import { createClient } from '@/lib/supabase/server';
import { Product } from '@/types/Product';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getProduct(slug: string): Promise<Product | null> {
  try {
    const supabase = await createClient();
    
    const { data: product, error } = await supabase
      .from('products')
      .select('*')
      .eq('slug', slug)
      .eq('active', true)
      .single();

    if (error || !product) {
      return null;
    }

    return product;
  } catch (error) {
    console.error('Failed to fetch product:', error);
    return null;
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <ProductDetailSection product={product} />
    </main>
  );
}

// Generate static params for all products (optional for better performance)
export async function generateStaticParams() {
  try {
    const { supabaseAdmin } = await import('@/lib/supabase/admin');
    
    const { data: products } = await supabaseAdmin
      .from('products')
      .select('slug')
      .eq('active', true);

    return products?.map((product) => ({
      id: product.slug,
    })) || [];
  } catch (error) {
    console.error('Failed to generate static params:', error);
    return [];
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} - Vielight`,
    description: product.short_description || product.description,
    openGraph: {
      title: product.name,
      description: product.short_description || product.description,
      images: Array.isArray(product.images) && product.images[0] ? [product.images[0]] : [],
    },
  };
}