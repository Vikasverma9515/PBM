// utils/products.ts
import { Product } from '@/types/Product';
import { productsData } from '@/data/products';

export function getProducts(): Product[] {
  return productsData;
}

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find(product => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return productsData.slice(0, 4); // Return first 4 as featured
}

export function getRelatedProducts(currentSlug: string, category?: string): Product[] {
  return productsData
    .filter(product => product.slug !== currentSlug)
    .filter(product => category ? product.category.includes(category) : true)
    .slice(0, 3);
}