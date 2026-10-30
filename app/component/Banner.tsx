// @ts-nocheck
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const bagVariants = [
    {
        id: 1,
        name: 'Monochrome Matte Messenger',
        price: '$149.00',
        image: '/duos.png',
        thumb: '/das.png',
        tag: 'SPECIAL EDITION',
        desc: 'Precision-engineered shock absorbing partitions protect your vintage lenses and camera body. Built with weather-resistant heavy duck canvas and genuine full-grain leather.',
    },
    {
        id: 2,
        name: 'Obsidian Canvas SLR Holster',
        price: '$165.00',
        image: '/duo.png',
        thumb: '/bagg.png',
        tag: 'LIMITED RUN',
        desc: 'Full grain leather accents with dual side quick-access camera compartments. Rugged brass hardware designed for field shoots.',
    },
    {
        id: 3,
        name: 'Pure Onyx Vintage Bag',
        price: '$180.00',
        image: '/duo.png',
        thumb: '/das.png',
        tag: 'STUDIO CRAFT',
        desc: 'Custom ballistic weatherproofing layered with soft microfiber lining to keep high-end mirrorless sensors and optics scratch-free.',
    },
];

export default function Banner() {
    const [selectedBag, setSelectedBag] = useState(bagVariants[0]);
    const [, setCartCount] = useState(0);

    return (
        <section className="relative w-full h-screen min-h-[580px] max-h-[880px] flex flex-col justify-between overflow-hidden select-none bg-neutral-950 font-sans selection:bg-amber-500 selection:text-black">
            {/* 1. Base Landscape Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bsanner.png"
                    alt="SUPA. FAST. Landscape Banner"
                    fill
                    priority
                    className="object-cover object-center filter contrast-[1.04] brightness-[0.98]"
                    sizes="100vw"
                />
                {/* Soft atmospheric gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-black/20 pointer-events-none" />
            </div>

            {/* 2. Center Layer: Giant Typographic Elements & Centered Floating Bag */}
            <div className="relative z-20 flex-1 flex flex-col justify-center items-center pointer-events-none translate-y-10 sm:translate-y-14 lg:translate-y-16">
                <div className="relative w-full max-w-7xl px-4 sm:px-8 flex items-center justify-between h-full">
                    {/* LEFT: "PIXEL" Big Bold Outlined Headline */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-2 sm:left-6 lg:left-10 top-0 sm:top-2 lg:top-4 z-10"
                    >
                        <h1
                            className="text-[19vw] sm:text-[16vw] lg:text-[14vw] font-black leading-none tracking-tight select-none uppercase font-sans scale-y-[1.1] origin-top-left"
                            style={{
                                WebkitTextStroke: '2.5px rgba(255, 255, 255, 0.95)',
                                color: 'transparent',
                                textShadow: '0 8px 30px rgba(0,0,0,0.35)',
                            }}
                        >
                            PIXEL
                        </h1>
                    </motion.div>

                    {/* CENTER: Floating Bag - Centered and Big */}
                    <motion.div
                        key={selectedBag.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="relative z-20 mx-auto flex items-center justify-center -translate-y-1 sm:-translate-y-2"
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
                            className="relative w-[230px] sm:w-[290px] md:w-[340px] lg:w-[380px] h-[220px] sm:h-[280px] md:h-[330px] lg:h-[370px] pointer-events-auto"
                        >
                            <Image
                                src={selectedBag.image}
                                alt={selectedBag.name}
                                fill
                                priority
                                className="object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)] hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 290px, 380px"
                            />
                        </motion.div>
                    </motion.div>

                    {/* RIGHT: "Store" Big Serif Headline */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                        className="absolute right-2 sm:right-6 lg:right-10 bottom-2 sm:bottom-4 lg:bottom-6 z-10 text-right"
                    >
                        <span
                            className="inline-block text-[21vw] sm:text-[18vw] lg:text-[15.5vw] font-serif italic font-normal leading-none tracking-tight select-none text-white/95 scale-y-[1.1] origin-bottom-right"
                            style={{
                                textShadow: '0 10px 40px rgba(0,0,0,0.5)',
                            }}
                        >
                            Store.
                        </span>
                    </motion.div>
                </div>
            </div>

            {/* 3. Bottom-Left Natural Description Text */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="relative z-30 w-full px-6 sm:px-10 lg:px-12 pb-12 sm:pb-16 lg:pb-18 pl-14 sm:pl-16 lg:pl-16"
            >
                <div className="max-w-md text-left">
                    <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed drop-shadow">
                        Precision optics, mirrorless bodies, and flagship folding devices. Curated in Dubai for creators with authentic brand warranties and same-day express delivery.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
