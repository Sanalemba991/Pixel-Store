'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-neutral-300 pt-20 pb-10 overflow-hidden font-sans border-t border-white/10">
      {/* Background Camera Lens Artistic Ambient Photo Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-15 mix-blend-screen flex items-end justify-center">
        <div className="relative w-full h-[340px]">
          <Image
            src="/lens-footer-bg.jpg"
            alt="Camera Lens background"
            fill
            className="object-cover object-bottom filter grayscale contrast-150"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Main 4-Column Grid - ANIMATED */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16">
          {/* Column 1: Logo & About Paragraph - ENTERS FROM LEFT */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 pr-0 lg:pr-6"
          >
            {/* Logo matching black and white theme */}
            <Link href="/" className="inline-flex flex-col items-start gap-1 group mb-6">
              <div className="w-12 h-10 border border-white rounded-none flex items-center justify-center p-1 relative bg-white text-black">
                {/* Minimal camera glyph */}
                <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                </div>
                {/* Viewfinder notch */}
                <div className="absolute -top-1 left-2 w-3 h-1 bg-white border-t border-l border-r border-black" />
              </div>
              <span className="text-[11px] font-sans tracking-[0.25em] font-extrabold text-white uppercase mt-1">
                PIXEL STORE
              </span>
            </Link>

            <p className="text-neutral-400 text-xs sm:text-[13px] leading-relaxed font-light">
              Discover the Pixel Store in Dubai, your premier destination for high-end optical gear, heirloom analogue cameras, and precision lenses. Engineered for creators dedicated to timeless photography.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="text-sm font-mono tracking-widest uppercase text-white mb-5 font-bold">
              Navigation
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-[13px] text-neutral-400 font-light">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Products */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="text-sm font-mono tracking-widest uppercase text-white mb-5 font-bold">
              Collection
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-[13px] text-neutral-400 font-light">
              <li>
                <Link href="#leica" className="hover:text-white transition-colors">
                  Leica Noir
                </Link>
              </li>
              <li>
                <Link href="#canon" className="hover:text-white transition-colors">
                  Canon
                </Link>
              </li>
              <li>
                <Link href="#sony" className="hover:text-white transition-colors">
                  Sony Alpha
                </Link>
              </li>
              <li>
                <Link href="#nikon" className="hover:text-white transition-colors">
                  Nikon Z
                </Link>
              </li>
              <li>
                <Link href="#lenses" className="hover:text-white transition-colors">
                  Prime Optics
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Get In Touch - ENTERS FROM RIGHT */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <h4 className="text-sm font-mono tracking-widest uppercase text-white mb-5 font-bold">
              Contact Studio
            </h4>

            <div className="space-y-4 text-xs sm:text-[13px] text-neutral-400 font-light leading-relaxed">
              {/* Address */}
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>
                  Baghlaf Building Showroom<br />
                  No.5 Satellite Market Naif Deira - Dubai, UAE
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
                <a href="tel:+971569165676" className="hover:text-white transition-colors">
                  +971 56 916 5676
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sales1@pixelstoredubai.com" className="hover:text-white transition-colors">
                  sales1@pixelstoredubai.com
                </a>
              </div>

              {/* Social Round Circle Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-8 h-8 bg-neutral-900 hover:bg-white hover:text-black border border-white/20 flex items-center justify-center transition-all cursor-pointer text-white"
                >
                  <span className="text-xs font-bold font-serif">f</span>
                </a>

                <a
                  href="#"
                  aria-label="X"
                  className="w-8 h-8 bg-neutral-900 hover:bg-white hover:text-black border border-white/20 flex items-center justify-center transition-all cursor-pointer text-white"
                >
                  <span className="text-xs font-bold font-sans">𝕏</span>
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-8 h-8 bg-neutral-900 hover:bg-white hover:text-black border border-white/20 flex items-center justify-center transition-all cursor-pointer text-white"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar: Developed by Digiimpact & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <p>
            Developed by <span className="text-white font-semibold">Digiimpact</span>
          </p>
          <p>
            Copyright © 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
