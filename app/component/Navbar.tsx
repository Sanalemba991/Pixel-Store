'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface NavbarProps {
    cartCount?: number;
}

export default function Navbar({ cartCount = 0 }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '#products', badge: 'New' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
                : 'bg-black/60 backdrop-blur-xs py-4 border-b border-white/5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
                {/* Brand Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-all duration-200 border border-white/20">
                        <svg
                            className="w-5 h-5 text-black"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                            />
                            <circle cx="12" cy="13" r="3" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg md:text-xl font-sans tracking-[0.2em] font-extrabold text-white group-hover:text-neutral-300 transition-colors uppercase">
                            PIXEL<span className="text-neutral-400 font-light ml-1">STORE</span>
                        </span>
                        <span className="text-[9px] tracking-[0.25em] uppercase text-neutral-400 font-mono -mt-0.5">
                            Monochrome Studio
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
                    {navLinks.map((link) => {
                        const isActive = activeLink === link.name;
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setActiveLink(link.name)}
                                className={`relative px-4 py-1.5 text-xs font-medium tracking-wider uppercase transition-all duration-200 rounded-full flex items-center gap-1.5 ${isActive
                                    ? 'text-black bg-white shadow-md font-semibold'
                                    : 'text-neutral-300 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {link.name}
                                {link.badge && (
                                    <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold uppercase tracking-tight ${isActive ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                        {link.badge}
                                    </span>
                                )}
                            </a>
                        );
                    })}
                </nav>

                {/* Right Action Icons: Search, Cart, User Profile */}
                <div className="flex items-center gap-3 sm:gap-4">
                    <button
                        type="button"
                        aria-label="Search items"
                        className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white transition-all cursor-pointer"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="7" />
                            <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                        </svg>
                    </button>

                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex flex-col justify-center items-center gap-1.5 text-white transition-colors cursor-pointer"
                        aria-label="Toggle mobile menu"
                    >
                        <span
                            className={`h-0.5 w-5 bg-white rounded-full transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                                }`}
                        />
                        <span
                            className={`h-0.5 w-4 bg-white rounded-full transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''
                                }`}
                        />
                        <span
                            className={`h-0.5 w-5 bg-white rounded-full transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden mt-3 px-6 py-4 bg-black/95 backdrop-blur-xl border-b border-white/10 flex flex-col gap-3 shadow-2xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => {
                                setActiveLink(link.name);
                                setMobileMenuOpen(false);
                            }}
                            className="flex items-center justify-between py-2 text-sm font-medium tracking-wider uppercase text-neutral-300 hover:text-white border-b border-white/5"
                        >
                            <span>{link.name}</span>
                            {link.badge && (
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white text-black font-semibold">
                                    {link.badge}
                                </span>
                            )}
                        </a>
                    ))}
                    <div className="pt-2 flex items-center justify-between text-neutral-400 text-xs">
                        <span>Black & White Series</span>
                        <span className="text-white font-medium">Explore →</span>
                    </div>
                </div>
            )}
        </motion.header>
    );
}
