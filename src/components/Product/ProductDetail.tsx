"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import type { Product } from "@/types/Product";

type Props = { product: Product };

const ProductDetail: React.FC<Props> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleQuantity = (type: "inc" | "dec") => {
    if (type === "inc") setQuantity((q) => q + 1);
    if (type === "dec") setQuantity((q) => (q > 1 ? q - 1 : 1));
  };

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="flex gap-4 md:gap-6">
            {/* Thumbnails */}
            <div className="hidden md:flex flex-col gap-3 md:gap-4">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? "border-[#EA1934]" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} ${i + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 bg-white rounded-2xl p-4 md:p-6 shadow-sm">
              <div className="relative w-full aspect-[4/3] md:h-[500px]">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6 md:space-y-8">
            {/* Title + Price */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-black">{product.name}</h1>
              <div className="flex items-center gap-3">
                <span className="text-gray-700 text-sm md:text-base">{product.category}</span>
                <span className="text-gray-300">•</span>
                <span className="text-2xl md:text-3xl font-semibold text-black">${product.price.toLocaleString()}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {product.description}
            </p>

            {/* Quantity + Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-full">
                <button
                  onClick={() => handleQuantity("dec")}
                  className="p-3 hover:bg-gray-50 rounded-l-full transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-3 font-medium">{quantity}</span>
                <button
                  onClick={() => handleQuantity("inc")}
                  className="p-3 hover:bg-gray-50 rounded-r-full transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button className="flex-1 bg-[#4285F4] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to cart
              </button>

              <button className="flex-1 bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors">
                Buy now
              </button>
            </div>

            {/* Trust / Payment note */}
            <div className="border border-gray-300 rounded-full px-5 py-3 w-fit">
              <span className="text-gray-700 font-medium">Pay with HSA or FSA.</span>
            </div>

            {/* Feature bar (theme accent) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-[#EA1934]/10 text-[#EA1934] rounded-lg flex items-center justify-center">✓</div>
                <div className="text-black">Medical grade technology</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-[#EA1934]/10 text-[#EA1934] rounded-lg flex items-center justify-center">✓</div>
                <div className="text-black">Used by practitioners and athletes</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-[#EA1934]/10 text-[#EA1934] rounded-lg flex items-center justify-center">✓</div>
                <div className="text-black">2-year warranty & 6-month returns</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;