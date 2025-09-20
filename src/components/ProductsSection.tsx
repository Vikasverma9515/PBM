"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { createClient } from "@/lib/supabase/client";
import type { Product } from "@/types/Product";

// Map a DB row to the Product type expected by the UI
function mapDbRowToProduct(row: any): Product {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    price: Number(row.price),
    category: row.category ?? "",
    description: row.description ?? "",
    short_description: row.short_description ?? row.shortDescription ?? "",
    // images/features/benefits/whats_in_box may be JSONB or text[]; normalize to string[]
    images: Array.isArray(row.images) ? row.images : [],
    features: Array.isArray(row.features) ? row.features : [],
    specifications: row.specifications ?? {},
    benefits: Array.isArray(row.benefits) ? row.benefits : [],
    whats_in_box: Array.isArray(row.whats_in_box) ? row.whats_in_box : [],
    user_guides: Array.isArray(row.user_guides) ? row.user_guides : [],
    videos: Array.isArray(row.videos) ? row.videos : [],
    combined_products: Array.isArray(row.combined_products)
      ? row.combined_products
      : [],
    stock: typeof row.stock === "number" ? row.stock : undefined,
    active: typeof row.active === "boolean" ? row.active : undefined,
    created_at: row.created_at ?? undefined,
  };
}

const ProductsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const { addItem } = useCart();
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createClient();
    async function fetchProducts() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("products")
          .select(
            "id, slug, name, short_description, description, images, price, category, features, specifications, benefits, whats_in_box, user_guides, videos, combined_products, stock, active, created_at"
          )
          .eq("active", true)
          .order("created_at", { ascending: false });

        if (error) throw error;
        const mapped = (data ?? []).map(mapDbRowToProduct);
        setAllProducts(mapped);
      } catch (e: any) {
        setError(e?.message || "Failed to load products");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const visibleProducts = showAll ? allProducts : allProducts.slice(0, 3);

  return (
    <div className="py-0 lg:pt-10 bg-white">
      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Desktop unchanged */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-8 lg:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-2 lg:mb-4">
              See the Products
            </h2>
            <p className="text-gray-800 text-base lg:text-lg">
              Explore our advanced brain health devices today!
            </p>
          </div>
          {!showAll && allProducts.length > 3 && (
            <button
              onClick={() => setShowAll(true)}
              className="border border-gray-300 text-gray-700 px-4 lg:px-5 py-2 rounded-full font-medium hover:bg-gray-50 transition-colors self-start sm:self-auto"
            >
              View all
            </button>
          )}
          {showAll && (
            <button
              onClick={() => setShowAll(false)}
              className="border border-gray-300 text-gray-700 px-4 lg:px-5 py-2 rounded-full font-medium hover:bg-gray-50 transition-colors self-start sm:self-auto"
            >
              Show less
            </button>
          )}
        </div>

        {/* Loading / Error / Empty states */}
        {loading && (
          <div className="text-gray-600">Loading products…</div>
        )}
        {error && !loading && (
          <div className="text-red-600">{error}</div>
        )}
        {!loading && !error && allProducts.length === 0 && (
          <div className="text-gray-600">No products found.</div>
        )}

        {/* Product Grid - Desktop layout preserved, mobile/tablet responsive */}
        {!loading && !error && allProducts.length > 0 && (
          <div
            className={`grid gap-6 sm:gap-8 lg:gap-16 max-w-[1205px] mx-auto ${
              // Mobile: always single column
              "grid-cols-1 " +
              // Tablet: 2 columns
              "sm:grid-cols-2 " +
              // Desktop: original logic preserved
              (visibleProducts.length === 3
                ? "lg:grid-cols-3"
                : visibleProducts.length === 4
                ? "lg:grid-cols-2"
                : "lg:grid-cols-3")
            }`}
          >
            {visibleProducts.map((p) => (
              <div
                key={p.slug}
                className={`flex flex-col gap-3 sm:gap-4 w-full ${
                  // Desktop sizing preserved
                  visibleProducts.length === 3
                    ? "lg:w-[370px] lg:h-[584px]"
                    : "lg:w-[578px] lg:h-[712px]"
                }`}
              >
                <Link
                  href={`/product/${p.slug}`}
                  className={`relative bg-gray-200 border-gray-200 border-1 rounded-xl lg:rounded-2xl overflow-hidden group w-full ${
                    // Mobile/tablet: responsive heights, desktop: original sizes
                    "aspect-[4/5] sm:aspect-[4/5] " +
                    (visibleProducts.length === 3
                      ? "lg:w-[370px] lg:h-[456px] lg:aspect-auto"
                      : "lg:w-[578px] lg:h-[712px] lg:aspect-auto")
                  }`}
                >
                  <Image
                    src={p.images?.[0] || "/product-showcase-1.png"}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>

                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0 mb-3 lg:mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl text-black mb-1">{p.name}</h3>
                      <p className="text-gray-800 text-sm">{p.category}</p>
                    </div>
                    <span className="text-xl sm:text-2xl text-black font-semibold self-start">
                      ${p.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Link
                      href={`/product/${p.slug}`}
                      className="flex-1 text-center border border-gray-300 text-gray-700 py-2.5 sm:py-3 rounded-lg lg:rounded-xl font-medium hover:bg-gray-50 transition-colors"
                    >
                      View details
                    </Link>
                    <button
                      onClick={() =>
                        addItem({
                          id: p.slug,
                          slug: p.slug,
                          name: p.name,
                          price: p.price,
                          image: p.images?.[0] || "/product-showcase-1.png",
                        })
                      }
                      className="px-4 sm:px-5 py-2.5 sm:py-3 border border-gray-300 text-gray-700 rounded-lg lg:rounded-xl font-medium hover:bg-gray-50 transition-colors"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Red Features Bar - Desktop unchanged */}
      <div className="bg-[#EA1934] mt-10 lg:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 text-white">
            {/* Feature 1 */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl leading-tight">
                  Medical grade
                  <br /> technology
                </h3>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl leading-tight">
                  Used by everyday people,
                  <br /> practitioners and athletes
                </h3>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl leading-tight">
                  2-year warranty &
                  <br /> 6-month return policy
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;