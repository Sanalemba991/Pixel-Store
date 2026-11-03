// @ts-nocheck
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Category, Product, CATEGORIES } from "../../data/products";

interface CategoryProductsClientProps {
  category: Category;
  products: Product[];
}

export default function CategoryProductsClient({
  category,
  products,
}: CategoryProductsClientProps) {
  return (
    <div className="w-full bg-[#f8f9fa] text-[#111111] selection:bg-black selection:text-white">
      {/* Category Hero Header */}
      <section className="relative w-full pt-36 pb-20 px-6 sm:px-10 lg:px-16 border-b border-neutral-200 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-neutral-500 mb-6"
          >
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-black transition-colors">
              Categories
            </Link>
            <span>/</span>
            <span className="text-black font-semibold">{category.name}</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8"
            >
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-black text-white text-[10px] font-mono font-bold tracking-widest uppercase">
                  CATEGORY // {category.slug.toUpperCase()}
                </span>
                <span className="text-[10px] font-mono text-neutral-500 font-semibold">
                  {products.length} PRODUCTS
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none">
                {category.name}
              </h1>
              <p className="text-neutral-600 text-sm sm:text-base font-light mt-3 max-w-2xl">
                {category.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lg:col-span-4"
            >
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed border-l-2 border-neutral-300 pl-4 font-light">
                {category.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter Pills Bar */}
      <div className="w-full bg-white border-b border-neutral-200 sticky top-[72px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-3 flex items-center justify-between overflow-x-auto">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 mr-2 font-semibold">
              Switch Category:
            </span>
            {CATEGORIES.map((cat) => {
              const isActive = cat.slug === category.slug;
              return (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "bg-black text-white font-bold shadow-md"
                      : "bg-neutral-100 text-neutral-600 hover:text-black hover:bg-neutral-200"
                  }`}
                >
                  {cat.name}
                </Link>
              );
            })}
          </div>

          <Link
            href="/products"
            className="text-[11px] font-mono text-neutral-600 hover:text-black flex items-center gap-1 shrink-0 ml-4 uppercase font-bold"
          >
            ← View All Categories
          </Link>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {products.map((product, idx) => {
            const fromLeft = idx % 2 === 0;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: fromLeft ? -40 : 40, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              >
                <Link
                  href={`/products/${category.slug}/${product.slug}`}
                  className="group block bg-white border border-neutral-200 hover:border-black transition-all duration-500 h-full flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-2xl"
                >
                  {/* Product Image Area */}
                  <div className="relative aspect-[4/3] w-full bg-neutral-100 overflow-hidden border-b border-neutral-200">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover filter contrast-105 transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Status badges */}
                    <div className="absolute top-4 left-4 z-10 flex gap-2">
                      {product.badge && (
                        <span className="px-2.5 py-1 bg-black text-white text-[10px] font-mono font-bold tracking-widest uppercase shadow-md">
                          {product.badge}
                        </span>
                      )}
                      {!product.inStock && (
                        <span className="px-2.5 py-1 bg-red-600 text-white text-[10px] font-mono font-bold tracking-widest uppercase shadow-md">
                          Backorder
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 font-semibold">
                          {product.categoryName}
                        </span>
                        <span className="text-base font-mono font-bold text-[#111111]">
                          ${product.price.toLocaleString()}
                        </span>
                      </div>

                      <h3 className="text-xl font-sans font-bold text-[#111111] tracking-tight group-hover:text-neutral-700 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-neutral-600 mt-2 font-light leading-relaxed line-clamp-2">
                        {product.tagline}
                      </p>

                      {/* Snippet Specs */}
                      <div className="mt-5 pt-4 border-t border-neutral-200 space-y-1.5">
                        {product.specs.slice(0, 2).map((s) => (
                          <div
                            key={s.label}
                            className="flex justify-between text-[11px] font-mono"
                          >
                            <span className="text-neutral-500">{s.label}:</span>
                            <span className="text-neutral-800 font-medium truncate max-w-[170px]">
                              {s.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA link */}
                    <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-black font-bold group-hover:translate-x-1 transition-all">
                      <span>View Specifications</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
