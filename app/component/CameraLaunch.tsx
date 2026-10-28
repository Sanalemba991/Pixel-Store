'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CameraLaunch() {
  return (
    <section className="w-full bg-white py-20 md:py-28 px-6 sm:px-10 lg:px-16 text-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Heading and Description - ENTERS FROM LEFT */}
        <motion.div
          initial={{ x: -90, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 flex flex-col justify-center pr-0 lg:pr-6 z-10"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white bg-black px-3 py-1 font-bold">
              CAMERA 1.0.124 // NOIR
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black leading-[1.08] text-black tracking-tight mb-6">
            Our New<br />
            Camera<br />
            <span className="text-neutral-500 font-light">Launch.</span>
          </h2>

          <p className="text-neutral-700 text-xs sm:text-sm font-normal leading-relaxed mb-8 max-w-sm tracking-wide">
            THE NEW PIXEL SERIES FOR CAPTURING MEMORIES WITH UNCOMPROMISING MONOCHROMATIC DEPTH AND SHARPNESS.
          </p>

          <div>
            <button
              type="button"
              className="px-8 py-3.5 bg-black text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black border-2 border-black transition-all duration-300 cursor-pointer shadow-xl hover:shadow-black/20"
            >
              READ MORE
            </button>
          </div>
        </motion.div>

        {/* Center Column: Big Camera Hero Image - ENTERS FROM BOTTOM / SCALE */}
        <motion.div
          initial={{ y: 70, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="lg:col-span-5 relative z-10"
        >
          <div className="relative aspect-[4/3] sm:aspect-square w-full  shadow-2xl group bg-white">
            <Image
              src="/camera-hero.jpg"
              alt="Our New Camera Launch"
              fill
              className="object-cover filter  contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
            {/* High-contrast bottom label */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-black/85 backdrop-blur-xs text-white px-4 py-2 font-mono text-[11px] border border-white/20">
              <span className="tracking-widest">SERIES MONO-X</span>
              <span className="font-bold">50mm f/1.4</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Two stacked complementary camera detail photos - ENTERS FROM RIGHT */}
        <motion.div
          initial={{ x: 90, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-3 flex flex-row lg:flex-col gap-4 sm:gap-6 z-10"
        >
          <div className="relative aspect-square w-full  shadow-xl group bg-white overflow-hidden">
            <Image
              src="/camera-detail.jpg"
              alt="Camera angle perspective"
              fill
              className="object-cover filter  contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>

          <div className="relative aspect-square w-full  shadow-xl group bg-white overflow-hidden">
            <Image
              src="/camera-hand.jpg"
              alt="Camera instant film eject"
              fill
              className="object-cover filter  contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
