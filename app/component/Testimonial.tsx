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
    portrait: '/testimonial-1.jpg',
    pillQuote: 'Monochrome precision & high-calibre ergonomic finesse.',
  },
  {
    id: 2,
    quote:
      'The optical fidelity and build quality completely exceeded my expectations. Having gear that feels tactile and responsive transforms the documentary workflow.',
    author: 'Marcus Vance',
    role: 'Documentary Filmmaker',
    portrait: '/testimonial-2.jpg',
    pillQuote: 'Built like an heirloom with modern optical sharpness.',
  },
  {
    id: 3,
    quote:
      'Their minimalist approach to analog mechanics is genuinely inspiring. It is rare to find hardware where every knob and finish feels intentionally considered.',
    author: 'Elena Rostova',
    role: 'Industrial Designer & Photographer',
    portrait: '/testimonial-3.jpg',
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
    <section className="w-full bg-[#0a0a0c] py-24 sm:py-32 px-6 sm:px-10 lg:px-16 text-white border-b border-white/10 overflow-hidden relative">
      {/* Background glow & subtle grain */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/[0.04] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* =========================================================================
            TOP HEADER - ENTERS FROM LEFT
        ========================================================================= */}
        <motion.div
          initial={{ x: -70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 bg-white/5 border border-white/15 px-3 py-1 rounded-sm mb-4 inline-block">
            TESTIMONIALS & VOICES
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans tracking-tight text-white font-light leading-[1.15] max-w-2xl mx-auto">
            Why <strong className="font-bold text-white">Pixel Store</strong> Feels <strong className="font-bold underline decoration-1 underline-offset-8 decoration-white/40">Human</strong>
          </h2>
        </motion.div>

        {/* =========================================================================
            MAIN TESTIMONIAL CARD CONTAINER - ENTERS FROM RIGHT
        ========================================================================= */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="bg-black border border-white/15 p-8 sm:p-14 shadow-2xl relative"
        >
          {/* Card Body: Left Portrait + Right Testimonial Quote */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Portrait with Floating Caption Box */}
            <div className="lg:col-span-5 relative flex flex-col justify-end">
              <div className="relative aspect-square w-full overflow-hidden bg-neutral-900 border border-white/10 shadow-lg">
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
                      className="object-cover filter grayscale contrast-125"
                      sizes="(max-width: 1024px) 100vw, 400px"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Floating Highlight Pill box on bottom-left of photo */}
              <div className="absolute -bottom-3 left-3 right-3 sm:right-6 bg-white text-black p-3.5 shadow-2xl border border-neutral-300">
                <p className="text-[11px] font-mono uppercase tracking-wider font-bold leading-snug">
                  {current.pillQuote}
                </p>
              </div>
            </div>

            {/* Right Column: Quote + Author info + Navigation controls */}
            <div className="lg:col-span-7 bg-neutral-950 border border-white/10 p-8 sm:p-10 flex flex-col justify-between">
              {/* Quote Body with animated switch */}
              <div className="pt-2">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={current.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="text-neutral-200 text-base sm:text-lg leading-relaxed font-light italic"
                  >
                    “{current.quote}”
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Author Info + Slider arrows row */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-end justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    {current.author}
                  </h4>
                  <p className="text-xs text-neutral-400 font-mono font-light mt-0.5">
                    {current.role}
                  </p>
                </div>

                {/* Arrow Controls (< >) */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                    className="w-10 h-10 bg-neutral-900 border border-white/20 hover:bg-white hover:text-black flex items-center justify-center text-white transition-all cursor-pointer shadow-md"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next testimonial"
                    className="w-10 h-10 bg-neutral-900 border border-white/20 hover:bg-white hover:text-black flex items-center justify-center text-white transition-all cursor-pointer shadow-md"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Thumbnail Selector Row */}
          <div className="flex items-center justify-center gap-3 mt-8 pt-6">
            {testimonials.map((item, index) => {
              const isSelected = index === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-12 h-12 overflow-hidden transition-all duration-200 cursor-pointer border ${isSelected
                    ? 'border-white scale-110 shadow-lg opacity-100 ring-1 ring-white'
                    : 'border-white/20 opacity-40 hover:opacity-80'
                    }`}
                  aria-label={`Select testimonial by ${item.author}`}
                >
                  <Image
                    src={item.portrait}
                    alt={item.author}
                    fill
                    className="object-cover filter grayscale contrast-125"
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
