// @ts-nocheck
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CATEGORIES, PRODUCTS } from "../data/products";

export default function ProductsDirectory() {
  return (
    <div className="w-full bg-[#f8f9fa] text-[#111111] selection:bg-black selection:text-white">
      {/* Hero Header */}
      <section className="relative w-full pt-36 pb-20 sm:pb-28 px-6 sm:px-10 lg:px-16 border-b border-neutral-200 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
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
            <span className="text-black font-semibold">Products Catalog</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8"
            >
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase text-neutral-500 block mb-3 font-semibold">
                PIXEL ARCHIVE // MONOCHROME HARDWARE
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none">
                Select <br />
                <span className="text-neutral-400 font-light">
                  Category.
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lg:col-span-4"
            >
              <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed border-l-2 border-neutral-300 pl-4">
                Explore our curated categories. Choose a category to discover dedicated gear, optics, accessories, and individual product specifications.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 border-b border-neutral-300 pb-4">
          <span className="text-xs font-mono tracking-widest uppercase text-neutral-500 font-semibold">
            [ 01 // EXPLORE BY DEPARTMENT ]
          </span>
          <span className="text-xs font-mono text-neutral-500 font-medium">
            {CATEGORIES.length} Categories Available
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {CATEGORIES.map((category, index) => {
            const fromLeft = index % 2 === 0;
            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, x: fromLeft ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              >
                <Link
                  href={`/products/${category.slug}`}
                  className="group relative block w-full bg-white border border-neutral-200 hover:border-black transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl flex flex-col justify-between"
                >
                  {/* Category Image */}
                  <div className="relative w-full h-[280px] sm:h-[340px] overflow-hidden bg-neutral-100">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover object-center filter contrast-105 transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-300" />

                    {/* Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 bg-black text-white border border-white/20 text-[10px] font-mono tracking-widest uppercase font-bold shadow-md">
                        {category.itemCount} Items
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 z-10">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-white/70 block mb-1">
                        0{index + 1} // CATEGORY
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white group-hover:translate-x-1 transition-transform duration-300">
                        {category.name}
                      </h3>
                      <p className="text-xs text-white/85 font-light mt-1">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Bar */}
                  <div className="p-6 bg-white border-t border-neutral-200 flex items-center justify-between">
                    <p className="text-xs text-neutral-600 font-light line-clamp-2 pr-4 max-w-sm">
                      {category.description}
                    </p>
                    <div className="shrink-0 flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-black font-bold group-hover:translate-x-1 transition-all">
                      <span>View Products</span>
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

      {/* Featured All Products Quick Strip */}
      <section className="py-20 bg-white border-t border-neutral-200 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 block mb-2 font-semibold">
                COMPLETE INDEX
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#111111] uppercase">
                All Products at a Glance
              </h2>
            </div>
            <p className="text-xs font-mono text-neutral-500">
              Showing {PRODUCTS.length} curated master items
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((prod, idx) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
              >
                <Link
                  href={`/products/${prod.categorySlug}/${prod.slug}`}
                  className="group block bg-[#f8f9fa] border border-neutral-200 p-5 hover:border-black hover:bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-square w-full mb-4 bg-white border border-neutral-200 overflow-hidden">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        className="object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      {prod.badge && (
                        <div className="absolute top-2 left-2">
                          <span className="text-[9px] font-mono tracking-wider bg-black text-white px-2 py-0.5 uppercase font-bold shadow-sm">
                            {prod.badge}
                          </span>
                        </div>
                      )}
                    </div>

                    <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-500 block mb-1 font-semibold">
                      {prod.categoryName}
                    </span>
                    <h3 className="text-sm font-sans font-bold text-[#111111] group-hover:text-neutral-700 transition-colors line-clamp-1">
                      {prod.name}
                    </h3>
                    <p className="text-[11px] text-neutral-600 line-clamp-2 mt-1 font-light">
                      {prod.tagline}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-neutral-200 flex items-center justify-between">
                    <span className="text-sm font-mono font-bold text-[#111111]">
                      ${prod.price.toLocaleString()}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-600 group-hover:text-black flex items-center gap-1 font-bold">
                      Specs
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
