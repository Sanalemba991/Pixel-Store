'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function VisionCameras() {
  const photos = [
    {
      src: '/lifestyle-boat.jpg',
      alt: 'Photographer on boat in Paris',
      caption: 'CANAL PERSPECTIVE',
      direction: -1, // From left
    },
    {
      src: '/lifestyle-sunset.jpg',
      alt: 'Sunset landscape photographer silhouette',
      caption: 'HORIZON CAPTURE',
      direction: 0, // From center / scale
    },
    {
      src: '/lifestyle-urban.jpg',
      alt: 'Urban city street photographer with camera',
      caption: 'STREET MONOCHROME',
      direction: 1, // From right
    },
  ];

  return (
    <section className="relative w-full bg-black text-white border-b border-white/10 overflow-hidden">
      {/* Photographic Hero Panes */}
      <div className="relative w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 h-[420px] sm:h-[500px] lg:h-[540px] w-full divide-y md:divide-y-0 md:divide-x divide-white/10">
          {photos.map((photo, index) => {
            const initialX = photo.direction === -1 ? -80 : photo.direction === 1 ? 80 : 0;
            const initialY = photo.direction === 0 ? 50 : 0;

            return (
              <motion.div
                key={index}
                initial={{ x: initialX, y: initialY, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
                className="relative w-full h-full overflow-hidden group bg-neutral-950"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover filter  contrast-125 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:contrast-150"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 group-hover:via-black/20 transition-all duration-300" />

                {/* Subtle bottom caption */}
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase bg-black/60 backdrop-blur-xs px-2.5 py-1 border border-white/10">
                    {photo.caption}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Centered Large Headline Overlay & Description - Animated in */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-6 text-center"
        >
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.35em] uppercase text-neutral-300 mb-4 bg-black/70 backdrop-blur-md px-5 py-1.5 rounded-full border border-white/20 shadow-2xl">
            CRAFTED FOR STORYTELLERS
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black tracking-[0.18em] uppercase text-white drop-shadow-[0_10px_30px_rgba(0,0,0,1)] mb-4">
            VISION CAMERAS
          </h2>
          <p className="max-w-xl text-xs sm:text-sm text-neutral-300 font-light leading-relaxed drop-shadow-md tracking-wider">
            Engineered with timeless analog heritage and precision optics. Built for creators who see poetry in pure light and shadow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
