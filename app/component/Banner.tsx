'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const bagVariants = [
    {
        id: 1,
        name: 'Monochrome Matte Messenger',
        price: '$149.00',
        image: '/das.png',
        thumb: '/vintage-bag.jpg',
    },
    {
        id: 2,
        name: 'Obsidian Canvas SLR Holster',
        price: '$165.00',
        image: '/das.png',
        thumb: '/vintage-bag.jpg',
    },
    {
        id: 3,
        name: 'Pure Onyx Vintage Bag',
        price: '$180.00',
        image: '/das.png',
        thumb: '/vintage-bag.jpg',
    },
    {
        id: 4,
        name: 'Stealth Black Rugged Pack',
        price: '$155.00',
        image: '/vintage-bag.jpg',
        thumb: '/vintage-bag.jpg',
    },
];

export default function Banner() {
    const [selectedBag, setSelectedBag] = useState(bagVariants[0]);
    const [, setCartCount] = useState(0);

    return (
        <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden select-none font-sans bg-white text-black">
            {/* High-Contrast Pure White & Solid Black Split Layout */}
            <div className="absolute inset-0 z-0 flex flex-col lg:flex-row pointer-events-none">
                {/* Left Panel: Crisp Pure White */}
                <div className="w-full lg:w-[62%] h-full bg-white" />
                {/* Right Panel: Solid Pure Black */}
                <div className="w-full lg:w-[38%] h-full bg-black lg:border-l-2 border-black" />
            </div>

            {/* MAIN HERO CONTENT */}
            <main className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 py-8 lg:py-12">
                {/* Left Column: Pure White Background Area - ENTERS FROM LEFT */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-[48%] max-w-xl z-20 py-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-[10px] tracking-widest uppercase font-mono font-bold mb-4">
                        <span className="w-1.5 h-1.5 bg-white animate-pulse" />
                        BLACK & WHITE EDITION
                    </div>

                    {/* Crisp Black Price */}
                    <div className="text-4xl md:text-5xl font-mono font-extrabold text-black tracking-tight mb-3">
                        {selectedBag.price}
                    </div>

                    {/* Bold Black Title */}
                    <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-sans font-black leading-[1.1] text-black tracking-tight mb-5">
                        Canvas Leather DSLR Vintage Camera Messenger Bag
                    </h1>

                    <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed mb-8 max-w-md font-normal">
                        Precision-engineered shock absorbing partitions protect your vintage lenses and camera body. Built with weather-resistant heavy duck canvas and genuine full-grain leather.
                    </p>

                    {/* High Contrast Black & White Buttons */}
                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            onClick={() => setCartCount((c) => c + 1)}
                            className="px-8 py-3.5 bg-black hover:bg-neutral-800 text-white font-bold text-xs tracking-widest uppercase border-2 border-black shadow-lg hover:shadow-black/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                        >
                            Add to Cart
                        </button>
                        <button
                            type="button"
                            className="px-6 py-3.5 bg-white hover:bg-black hover:text-white text-black font-bold text-xs tracking-widest uppercase border-2 border-black transition-all cursor-pointer"
                        >
                            Explore Gear
                        </button>
                    </div>
                </motion.div>

                {/* Center / Hero Bag Image - ENTERS FROM RIGHT / CENTER */}
                <motion.div
                    initial={{ x: 100, opacity: 0, scale: 0.95 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="w-full lg:w-[44%] relative flex items-center justify-center my-8 lg:my-0 lg:-ml-8 z-20"
                >
                    <div className="relative group transition-transform duration-500 hover:scale-[1.02]">
                        <div className="relative w-[320px] sm:w-[440px] md:w-[480px] lg:w-[520px] h-[280px] sm:h-[360px] md:h-[400px] lg:h-[420px]">
                            <Image
                                src={selectedBag.image}
                                alt={selectedBag.name}
                                fill
                                priority
                                className="object-contain p-2 filter  contrast-125 drop-shadow-2xl transition-all duration-300"
                                sizes="(max-width: 768px) 100vw, 520px"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Right Column (Pure Black Panel) - ENTERS FROM RIGHT */}
                <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="w-full lg:w-[16%] flex flex-col items-center lg:items-end justify-between self-stretch py-2 z-20 gap-6 text-white"
                >
                    {/* Thumbnails rail on black panel */}
                    <div className="flex flex-row lg:flex-col items-center gap-3 relative">
                        <div className="hidden lg:block w-8 h-[2px] bg-white mb-2 self-start mr-2" />
                        {bagVariants.map((item) => {
                            const isSelected = item.id === selectedBag.id;
                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setSelectedBag(item)}
                                    className={`relative w-14 h-12 overflow-hidden p-0.5 transition-all duration-200 cursor-pointer ${isSelected
                                        ? 'ring-2 ring-white scale-105 shadow-xl bg-white'
                                        : 'opacity-50 hover:opacity-100 bg-neutral-900 border border-neutral-700'
                                        }`}
                                    aria-label={`Select ${item.name}`}
                                >
                                    <Image
                                        src={item.thumb}
                                        alt={item.name}
                                        width={56}
                                        height={48}
                                        className="w-full h-full object-cover filter  contrast-125"
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* Featured Mini Floating Card (High contrast white card inside black right column) */}
                    <div className="w-full max-w-[240px] bg-white text-black p-4 shadow-2xl border-2 border-white mt-auto">
                        <p className="text-[10px] uppercase tracking-widest text-neutral-600 font-mono font-bold mb-2">
                            Featured Gear
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 relative flex-shrink-0 bg-black overflow-hidden border border-black">
                                <Image
                                    src="/vintage-bag.jpg"
                                    alt="Related bag"
                                    fill
                                    className="object-cover filter  contrast-125"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-[11px] font-bold text-black line-clamp-2 leading-tight">
                                    Obsidian Vintage SLR Camera Messenger Bag
                                </h4>
                                <div className="flex items-center gap-1 mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-black text-[10px] leading-none">
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>
        </section>
    );
}