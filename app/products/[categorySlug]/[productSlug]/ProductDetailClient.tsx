// @ts-nocheck
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "../../../data/products";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(
    product.gallery && product.gallery.length > 0 ? product.gallery[0] : product.image
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  return (
    <div className="w-full bg-[#f8f9fa] text-[#111111] selection:bg-black selection:text-white">
      {/* Top Breadcrumb Nav */}
      <section className="pt-32 pb-8 px-6 sm:px-10 lg:px-16 border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-neutral-500">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-black transition-colors">
            Categories
          </Link>
          <span>/</span>
          <Link
            href={`/products/${product.categorySlug}`}
            className="hover:text-black transition-colors"
          >
            {product.categoryName}
          </Link>
          <span>/</span>
          <span className="text-black font-semibold truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </div>
      </section>

      {/* Main Product Showcase Section */}
      <section className="py-12 sm:py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Image Gallery (Enters from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Primary Display Frame */}
            <div className="relative aspect-square sm:aspect-[4/3] w-full bg-white border border-neutral-200 overflow-hidden shadow-xl">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                priority
                className="object-cover filter contrast-105 transition-all duration-500"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />

              {product.badge && (
                <div className="absolute top-5 left-5 z-10">
                  <span className="px-3 py-1 bg-black text-white text-[10px] font-mono font-bold tracking-widest uppercase shadow-md">
                    {product.badge}
                  </span>
                </div>
              )}

              <div className="absolute bottom-4 right-4 z-10">
                <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white uppercase tracking-widest">
                  MONO SPEC // 100% STUDIO VERIFIED
                </span>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {product.gallery.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-24 h-24 shrink-0 border-2 overflow-hidden bg-white transition-all cursor-pointer ${
                      selectedImage === img
                        ? "border-black scale-105 shadow-md"
                        : "border-neutral-300 hover:border-neutral-600 opacity-75 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${i + 1}`}
                      fill
                      className="object-cover filter contrast-105"
                      sizes="96px"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* RIGHT: Product Specs & Ordering (Enters from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-white p-8 sm:p-10 border border-neutral-200 shadow-sm"
          >
            <div>
              {/* Category label */}
              <div className="flex items-center gap-3 mb-3">
                <Link
                  href={`/products/${product.categorySlug}`}
                  className="text-[10px] font-mono tracking-[0.25em] text-neutral-500 hover:text-black uppercase transition-colors font-semibold"
                >
                  {product.categoryName}
                </Link>
                <span className="text-neutral-400">•</span>
                <span className="text-[10px] font-mono tracking-widest text-emerald-700 uppercase font-bold">
                  {product.inStock ? "Ready to Dispatch" : "Backorder Available"}
                </span>
              </div>

              {/* Title & Price */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tight text-[#111111] uppercase leading-tight mb-4">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-3xl sm:text-4xl font-mono font-bold text-[#111111]">
                  ${product.price.toLocaleString()}
                </span>
                <span className="text-xs font-mono uppercase text-neutral-500 font-semibold">
                  {product.currency} / VAT Inclusive
                </span>
              </div>

              <p className="text-sm font-light text-neutral-600 leading-relaxed pb-6 border-b border-neutral-200">
                {product.description}
              </p>

              {/* Quick Specs List */}
              <div className="py-6 border-b border-neutral-200 space-y-3">
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-2 font-semibold">
                  HARDWARE SPECIFICATIONS:
                </span>
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-baseline justify-between text-xs font-mono"
                  >
                    <span className="text-neutral-500">{spec.label}</span>
                    <span className="text-neutral-900 font-bold text-right ml-4">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quantity and Actions */}
              <div className="pt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-neutral-300 bg-[#f8f9fa] px-3 py-2">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-neutral-600 hover:text-black px-2 py-1 text-sm font-mono cursor-pointer font-bold"
                    >
                      -
                    </button>
                    <span className="px-4 text-sm font-mono font-bold text-[#111111]">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-neutral-600 hover:text-black px-2 py-1 text-sm font-mono cursor-pointer font-bold"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex-1 py-3.5 px-8 bg-black text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all duration-300 shadow-lg cursor-pointer text-center"
                  >
                    {added ? "✓ Added to Order" : "Add to Order"}
                  </button>
                </div>

                <Link
                  href="/contact"
                  className="block text-center w-full py-3 border border-black text-black text-xs font-mono uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 font-bold"
                >
                  Book In-Person Studio Trial (Dubai)
                </Link>
              </div>

              {/* Reassurance points */}
              <div className="pt-8 grid grid-cols-2 gap-4 text-[11px] font-mono text-neutral-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-black shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>2-Year Official Agency Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-black shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Same-Day UAE Express Dispatch</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Products within this Category */}
      {relatedProducts && relatedProducts.length > 0 && (
        <section className="py-20 bg-white border-t border-neutral-200 px-6 sm:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 block mb-1 font-semibold">
                  MORE FROM {product.categoryName.toUpperCase()}
                </span>
                <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#111111] uppercase">
                  Similar Hardware
                </h2>
              </div>
              <Link
                href={`/products/${product.categorySlug}`}
                className="text-xs font-mono text-neutral-600 hover:text-black uppercase flex items-center gap-1 font-bold"
              >
                View Category (All) →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/products/${rel.categorySlug}/${rel.slug}`}
                  className="group block bg-[#f8f9fa] border border-neutral-200 p-5 hover:border-black hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] w-full mb-4 bg-white border border-neutral-200 overflow-hidden">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      className="object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="text-base font-sans font-bold text-[#111111] group-hover:text-neutral-700 transition-colors">
                    {rel.name}
                  </h3>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-neutral-200">
                    <span className="text-sm font-mono font-bold text-[#111111]">
                      ${rel.price.toLocaleString()}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-600 group-hover:text-black font-bold">
                      Inspect →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
