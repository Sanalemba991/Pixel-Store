'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote:
      'From planning to final delivery, everything was handled with clarity and precision. Their attention to detail and design quality really stood out.',
    author: 'Daniel Karim',
    role: 'Creative Director & Visual Storyteller',
    portrait: '/testimonial1.jpg',
    pillQuote: 'Chromatic precision & high-calibre ergonomic finesse.',
  },
  {
    id: 2,
    quote:
      'The optical fidelity and build quality completely exceeded my expectations. Having gear that feels tactile and responsive transforms the documentary workflow.',
    author: 'Marcus Vance',
    role: 'Cinematographer & Filmmaker',
    portrait: '/testimonial2.jpg',
    pillQuote: 'Built like an heirloom with modern optical sharpness.',
  },
  {
    id: 3,
    quote:
      'Their minimalist approach to analog mechanics is genuinely inspiring. It is rare to find hardware where every knob and finish feels intentionally considered.',
    author: 'Elena Rostova',
    role: 'Product Designer & Photographer',
    portrait: '/testimonial3.jpg',
    pillQuote: 'Tactile perfection that inspires every single frame.',
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonials[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-[#f2f2f3] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-black overflow-hidden relative">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* =========================================================================
            TOP HEADER - ENTERS FROM LEFT
        ========================================================================= */}
        <motion.div
          initial={{ x: -70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-neutral-500 bg-neutral-100 border border-neutral-300 px-2.5 py-0.5 rounded-sm mb-2.5 inline-block">
            TESTIMONIALS & VOICES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans tracking-tight text-black font-light leading-snug max-w-xl mx-auto">
            Why <strong className="font-bold text-black">Pixel Store</strong> Feels <strong className="font-bold underline decoration-1 underline-offset-4 decoration-neutral-400">Human</strong>
          </h2>
        </motion.div>

        {/* =========================================================================
            MAIN TESTIMONIAL CARD CONTAINER
        ========================================================================= */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="p-3 sm:p-6 relative rounded-sm"
        >
          {/* Card Body: Left Portrait + Right Testimonial Quote */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-stretch">
            {/* Left Column: Portrait with Floating Caption Box */}
            <div className="md:col-span-5 relative flex flex-col justify-end">
              <div className="relative aspect-[4/3] md:aspect-square w-full max-h-[280px] overflow-hidden bg-neutral-200 border border-neutral-300 shadow-sm">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={current.portrait}
                      alt={current.author}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 320px"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Floating Highlight Pill box on bottom-left of photo */}
              <div className="absolute -bottom-2.5 left-2 right-2 sm:right-4 bg-black text-white p-2.5 shadow-lg border border-black">
                <p className="text-[10px] font-mono uppercase tracking-wider font-bold leading-tight">
                  {current.pillQuote}
                </p>
              </div>
            </div>

            {/* Right Column: Quote + Author info + Navigation controls */}
            <div className="md:col-span-7 bg-[#0f1013] border border-black p-5 sm:p-6 flex flex-col justify-between shadow-inner">
              {/* Quote Body with animated switch */}
              <div className="pt-1">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={current.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="text-neutral-200 text-sm sm:text-base leading-relaxed font-light italic"
                  >
                    “{current.quote}”
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Author Info + Slider arrows row */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-end justify-between gap-3">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                    {current.author}
                  </h4>
                  <p className="text-[11px] text-neutral-400 font-mono font-light mt-0.5">
                    {current.role}
                  </p>
                </div>

                {/* Arrow Controls (< >) */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                    className="w-8 h-8 bg-neutral-900 border border-white/20 hover:bg-white hover:text-black flex items-center justify-center text-white transition-all cursor-pointer shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next testimonial"
                    className="w-8 h-8 bg-neutral-900 border border-white/20 hover:bg-white hover:text-black flex items-center justify-center text-white transition-all cursor-pointer shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Thumbnail Selector Row */}
          <div className="flex items-center justify-center gap-2.5 mt-5 pt-3">
            {testimonials.map((item, index) => {
              const isSelected = index === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-9 h-9 overflow-hidden transition-all duration-200 cursor-pointer border ${isSelected
                    ? 'border-black scale-105 shadow-md opacity-100 ring-1.5 ring-black'
                    : 'border-neutral-300 opacity-60 hover:opacity-100'
                    }`}
                  aria-label={`Select testimonial by ${item.author}`}
                >
                  <Image
                    src={item.portrait}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
