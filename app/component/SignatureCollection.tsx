'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const signatureBlends = [
  {
    id: 1,
    title: 'Precision 01',
    subtitle: 'WASHED PROCESS',
    intensity: 'INTENSITY 4/5',
    image: '/coffee-bag.jpg',
  },
  {
    id: 2,
    title: 'Monolith 02',
    subtitle: 'NATURAL PROCESS',
    intensity: 'INTENSITY 5/5',
    image: '/coffee-bag.jpg',
  },
  {
    id: 3,
    title: 'Aura Noir 03',
    subtitle: 'HONEY PROCESS',
    intensity: 'INTENSITY 3/5',
    image: '/coffee-bag.jpg',
  },
];

export default function SignatureCollection() {
  return (
    <section className="w-full bg-[#ffffff] text-black py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-b border-neutral-300 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* =========================================================================
            SECTION 1: SIGNATURE BLEND HEADER (FROM LEFT) + 3 DARK CARDS (FROM RIGHT)
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Text Block - SLIDES FROM LEFT */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 pr-0 lg:pr-8"
          >
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-3">
              COLLECTION 2026 // SERIE NOIRE
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-black mb-6">
              Signature Blend.
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-8 max-w-sm font-light">
              Distinctive profiles roasted in small batches to preserve singular notes and aromatic purity. Engineered for demanding palates and repeatable perfection.
            </p>

            {/* Slider arrows indicator */}
            <div className="flex items-center gap-3 pt-4">
              <button
                type="button"
                aria-label="Previous slide"
                className="w-9 h-9 rounded-full border border-neutral-300 hover:border-black hover:bg-black hover:text-white flex items-center justify-center text-neutral-800 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next slide"
                className="w-9 h-9 rounded-full border border-neutral-300 hover:border-black hover:bg-black hover:text-white flex items-center justify-center text-neutral-800 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Right Cards: 3 Minimalist Black Monolith Cards - SLIDES FROM RIGHT */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {signatureBlends.map((blend, idx) => (
              <motion.div
                key={blend.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-black text-white rounded-none p-6 sm:p-8 flex flex-col items-center justify-between group cursor-pointer transition-all duration-300 hover:bg-neutral-900 hover:shadow-2xl border border-neutral-900 hover:border-neutral-700"
              >
                {/* Product Bag Mockup */}
                <div className="relative w-full aspect-[3/4] mb-8 overflow-hidden flex items-center justify-center">
                  <Image
                    src={blend.image}
                    alt={blend.title}
                    fill
                    className="object-contain p-2 filter grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>

                {/* Card Typography */}
                <div className="w-full text-center">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider uppercase mb-1">
                    <span>{blend.title}</span>
                    <span className="text-neutral-400 font-light text-[10px]">→</span>
                  </div>
                  <p className="text-[10px] tracking-widest text-neutral-400 uppercase font-light">
                    {blend.subtitle}
                  </p>
                  <p className="text-[9px] tracking-widest text-neutral-500 uppercase mt-2 font-mono">
                    {blend.intensity}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* =========================================================================
            SECTION 2: THE HOUSE BLEND (TEXT LEFT, OVERLAPPING CARD RIGHT)
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column - COMES FROM LEFT */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 pr-0 lg:pr-8"
          >
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-2">
              MONOCHROME PROFILE
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-black mb-6">
              The House Blend.
            </h3>
            <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed mb-4 font-light">
              Carefully balanced to showcase nuanced acidity layered over decadent dark cacao and toasted almond notes. Every harvest is roasted with precision thermodynamic curves to highlight the sweet balance between origin character and caramelization.
            </p>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-8 font-light">
              Roasted weekly in micro-lots to maintain peak carbon degasification windows. Optimized for both calibrated espresso extractions and crystal-clear immersion pour-overs.
            </p>

            <button
              type="button"
              className="text-xs font-semibold tracking-widest uppercase text-black hover:text-neutral-600 border-b border-black pb-1 transition-colors cursor-pointer"
            >
              READ SPECIFICATIONS →
            </button>
          </motion.div>

          {/* Right Product Graphic Card - COMES FROM RIGHT */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[1.2/1] border border-neutral-300 rounded-none p-8 sm:p-10 flex flex-col justify-center items-end bg-neutral-100/70 shadow-xl">
              {/* Overlapping Bag Image */}
              <div className="absolute -left-6 sm:-left-12 top-1/2 -translate-y-1/2 w-[160px] sm:w-[220px] aspect-[2/3] drop-shadow-2xl">
                <Image
                  src="/coffee-bag.jpg"
                  alt="The House Blend bag"
                  fill
                  className="object-contain filter grayscale contrast-125"
                  sizes="(max-width: 768px) 160px, 220px"
                />
              </div>

              {/* Data Specifications inside card */}
              <div className="w-[50%] sm:w-[55%] space-y-5 text-left pl-4">
                <div>
                  <div className="w-5 h-5 rounded-full border border-black flex items-center justify-center mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                  </div>
                  <h4 className="text-base sm:text-lg font-sans font-bold text-black tracking-wide">
                    Shamcean
                  </h4>
                </div>

                <div>
                  <span className="text-[10px] tracking-widest uppercase text-neutral-500 font-semibold block mb-0.5 font-mono">
                    Flavor
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-black">
                    Floral & Dark Cocoa
                  </p>
                </div>

                <div>
                  <span className="text-[10px] tracking-widest uppercase text-neutral-500 font-semibold block mb-1 font-mono">
                    Intensity
                  </span>
                  <div className="flex gap-1.5">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="w-2 h-2 rounded-full bg-black" />
                    ))}
                    <span className="w-2 h-2 rounded-full bg-neutral-300" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================================
            SECTION 3: MEDIUM ROAST (OVERLAPPING BLACK CARD LEFT, TEXT RIGHT)
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Graphic: Dark Monolith Card with Overlapping Bag - COMES FROM LEFT */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex items-center justify-center order-2 lg:order-1"
          >
            <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[1.2/1] bg-black text-white rounded-none p-8 sm:p-10 flex flex-col justify-center items-end shadow-2xl border border-neutral-800">
              {/* Overlapping bag on the left */}
              <div className="absolute -left-6 sm:-left-12 top-1/2 -translate-y-1/2 w-[160px] sm:w-[220px] aspect-[2/3] drop-shadow-2xl">
                <Image
                  src="/coffee-bag.jpg"
                  alt="Medium Roast pouch"
                  fill
                  className="object-contain filter grayscale contrast-125"
                  sizes="(max-width: 768px) 160px, 220px"
                />
              </div>

              {/* Data Specifications inside dark card */}
              <div className="w-[50%] sm:w-[55%] space-y-6 text-left pl-4">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-neutral-400 font-semibold block mb-1 font-mono">
                    Flavor
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-white">
                    Blackberry & Espresso
                  </p>
                </div>

                <div>
                  <span className="text-[10px] tracking-widest uppercase text-neutral-400 font-semibold block mb-1.5 font-mono">
                    Intensity
                  </span>
                  <div className="flex gap-1.5">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="w-2 h-2 rounded-full bg-white" />
                    ))}
                    <span className="w-2 h-2 rounded-full bg-neutral-700" />
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold tracking-wider uppercase text-neutral-300">
                      Harvest
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono">2026/A NOIR</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Text Column - COMES FROM RIGHT */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 pl-0 lg:pl-8 order-1 lg:order-2"
          >
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-2">
              ROAST PROFILE
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-black mb-6">
              Medium Roast.
            </h3>
            <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed mb-4 font-light">
              Roasted slightly past first crack to unlock deeper body while preserving vibrant notes. Developed for smooth, lingering mouthfeel with zero unpleasant bitterness.
            </p>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-8 font-light">
              Sealed in nitrogen-flushed recyclable pouches with one-way degassing valves to guarantee cellar freshness for up to 90 days.
            </p>

            <button
              type="button"
              className="text-xs font-semibold tracking-widest uppercase text-black hover:text-neutral-600 border-b border-black pb-1 transition-colors cursor-pointer"
            >
              READ SPECIFICATIONS →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
