// @ts-nocheck
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        }, 5000);
    };

    const contactMethods = [
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Visit Our Dubai Hub",
            value: "PixelStore Experience Studio",
            desc: "Al Quoz Creative Zone, Warehouse 18, Dubai, UAE",
            actionText: "Get Directions",
            actionHref: "https://maps.google.com",
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: "Direct Phone & WhatsApp",
            value: "+971 4 392 8110",
            desc: "Mon – Sat from 9:00 AM to 8:30 PM (GST)",
            actionText: "Chat on WhatsApp",
            actionHref: "https://wa.me/97143928110",
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Direct Concierge Email",
            value: "concierge@pixelstore.ae",
            desc: "Response guaranteed within 2 hours on business days",
            actionText: "Send Direct Email",
            actionHref: "mailto:concierge@pixelstore.ae",
        },
    ];

    const faqs = [
        {
            q: "Can I test cameras, lenses, and gear before ordering?",
            a: "Absolutely. Our Dubai studio holds trial gear from Sony, Canon, Fujifilm, Leica, and Apple. You can mount optics on actual bodies, inspect 4K/8K crops, and consult our master gear techs.",
        },
        {
            q: "What is your typical delivery speed in Dubai?",
            a: "Orders confirmed before 2:00 PM are dispatched on our express same-day courier throughout Dubai. Deliveries to Abu Dhabi and all other emirates arrive within 24 hours.",
        },
        {
            q: "Do your products include official brand warranties in the UAE?",
            a: "Yes, 100%. We are certified direct brand resellers. Every single camera body, lens, and mobile flagships arrives brand-sealed with full local agency and manufacturer warranty certificates.",
        },
        {
            q: "How can corporate or production studios request custom quotes?",
            a: "You can reach our enterprise desk directly at enterprise@pixelstore.ae for VAT-compliant bulk invoicing.",
        },
    ];

    return (
        <main className="bg-white text-black min-h-screen font-sans selection:bg-black selection:text-white">
            {/* =========================================================================
                HERO BANNER (KEPT INTACT)
            ========================================================================= */}
            <section className="relative w-full h-screen min-h-[580px] max-h-[880px] flex flex-col justify-between overflow-hidden select-none bg-neutral-950 text-white">
                {/* 1. Base Landscape Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/da.png"
                        alt="SUPA. FAST. Landscape Banner"
                        fill
                        priority
                        className="object-cover object-center filter contrast-[1.04] brightness-[0.98]"
                        sizes="100vw"
                    />
                    {/* Soft atmospheric gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-black/20 pointer-events-none" />
                </div>

                {/* 2. Center Layer: Giant Foreground Typographic Elements & Floating Devices */}
                <div className="relative z-20 flex-1 flex flex-col justify-center items-center pointer-events-none translate-y-10 sm:translate-y-14 lg:translate-y-16">
                    {/* Layer Container */}
                    <div className="relative w-full max-w-7xl px-4 sm:px-8 flex items-center justify-between h-full">

                        {/* LEFT: "Get in" Big Bold Outlined Headline */}
                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute left-2 sm:left-6 lg:left-10 top-0 sm:top-2 lg:top-4 z-10"
                        >
                            <h1
                                className="text-[19vw] sm:text-[16vw] lg:text-[14vw] font-black leading-none tracking-tight select-none uppercase font-sans scale-y-[1.1] origin-top-left"
                                style={{
                                    WebkitTextStroke: "2.5px rgba(255, 255, 255, 0.95)",
                                    color: "transparent",
                                    textShadow: "0 8px 30px rgba(0,0,0,0.35)",
                                }}
                            >
                                Get in
                            </h1>
                        </motion.div>

                        {/* CENTER: Floating Camera-Style Powerbank Devices */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            className="relative z-20 mx-auto flex items-center justify-center -translate-y-1 sm:-translate-y-2"
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
                                className="relative w-[230px] sm:w-[290px] md:w-[340px] lg:w-[380px] h-[220px] sm:h-[280px] md:h-[330px] lg:h-[370px] pointer-events-auto"
                            >
                                <Image
                                    src="/das.png"
                                    alt="Supa Charger Camera Style Wireless Power Device"
                                    fill
                                    priority
                                    className="object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)] hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 290px, 380px"
                                />
                            </motion.div>
                        </motion.div>

                        {/* RIGHT: "Touch" Big Serif Headline */}
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                            className="absolute right-2 sm:right-6 lg:right-10 bottom-2 sm:bottom-4 lg:bottom-6 z-10 text-right"
                        >
                            <span
                                className="inline-block text-[21vw] sm:text-[18vw] lg:text-[15.5vw] font-serif italic font-normal leading-none tracking-tight select-none text-white/95 scale-y-[1.1] origin-bottom-right"
                                style={{
                                    textShadow: "0 10px 40px rgba(0,0,0,0.5)",
                                }}
                            >
                                Touch.
                            </span>
                        </motion.div>
                    </div>
                </div>

                {/* 3. Bottom-Left Natural Description Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="relative z-30 w-full px-6 sm:px-10 lg:px-12 pb-12 sm:pb-16 lg:pb-18 pl-14 sm:pl-16 lg:pl-16 text-white"
                >
                    <div className="max-w-md text-left">
                        <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed drop-shadow">
                            Al Quoz Creative Zone, Warehouse 18, Dubai. Direct concierge desk, hands-on gear trials, and guaranteed two-hour response times.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* =========================================================================
                CONTACT FORM
            ========================================================================= */}
            <section id="contact-form" className="py-20 lg:py-28 bg-[#f3f4f6] text-[#222222] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    {/* Header Row: "Say hello." + Top Right Subtitle */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline mb-16 sm:mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-7"
                        >
                            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#111111]">
                                Say hello<span className="text-[#111111]">.</span>
                            </h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            className="lg:col-span-5"
                        >
                            <p className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-neutral-500 leading-relaxed max-w-sm">
                                Feel free to drop us an email anytime.
                                <br />
                                We&apos;d love to hear from you.
                            </p>
                        </motion.div>
                    </div>

                    {/* Main Two-Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
                        {/* Left Side: Minimalist Underline Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-7"
                        >
                            {submitted ? (
                                <div className="py-12 border-b border-neutral-300">
                                    <h3 className="text-2xl font-light text-[#111111]">Thank you for reaching out.</h3>
                                    <p className="text-xs uppercase tracking-wider text-neutral-500 mt-2">
                                        We have received your message and will get back to you shortly.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-12 sm:space-y-14">
                                    {/* Row 1: Full Name & Email Address */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="Full Name"
                                                className="w-full bg-transparent border-b border-neutral-300 pb-3 text-sm text-[#111111] placeholder:text-neutral-500 focus:outline-none focus:border-black transition-colors"
                                            />
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="Email Address"
                                                className="w-full bg-transparent border-b border-neutral-300 pb-3 text-sm text-[#111111] placeholder:text-neutral-500 focus:outline-none focus:border-black transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Row 2: Phone Number & Message Subject */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12">
                                        <div className="relative">
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                placeholder="Phone Number"
                                                className="w-full bg-transparent border-b border-neutral-300 pb-3 text-sm text-[#111111] placeholder:text-neutral-500 focus:outline-none focus:border-black transition-colors"
                                            />
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                required
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                placeholder="Message Subject"
                                                className="w-full bg-transparent border-b border-neutral-300 pb-3 text-sm text-[#111111] placeholder:text-neutral-500 focus:outline-none focus:border-black transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Row 3: Message Textarea */}
                                    <div className="relative">
                                        <textarea
                                            rows={4}
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Message"
                                            className="w-full bg-transparent border-b border-neutral-300 pb-3 text-sm text-[#111111] placeholder:text-neutral-500 focus:outline-none focus:border-black transition-colors resize-none"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div>
                                        <button
                                            type="submit"
                                            className="px-9 py-3 rounded-full bg-black text-white text-[11px] font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors shadow-sm cursor-pointer"
                                        >
                                            Send
                                        </button>
                                    </div>
                                </form>
                            )}
                        </motion.div>

                        {/* Right Side: Need Help? Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                            className="lg:col-span-5 lg:pl-10 space-y-6 lg:pt-2"
                        >
                            <h3 className="text-3xl sm:text-4xl font-light tracking-tight text-[#111111]">
                                Need help?
                            </h3>
                            <p className="text-[11px] sm:text-xs tracking-wider uppercase text-neutral-500 leading-relaxed font-semibold max-w-sm">
                                If you&apos;re already a member and you&apos;re having a question or problem, please open a ticket and our support team will get back to you shortly.
                            </p>
                            <div className="pt-4">
                                <a
                                    href="#ticket"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        alert("Support ticket desk will open shortly.");
                                    }}
                                    className="inline-block px-8 py-3 rounded-full bg-black text-white text-[11px] font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors shadow-sm cursor-pointer"
                                >
                                    Open a Ticket
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* =========================================================================
                NEW SECTION 1: FIND US (direct contact channels)
            ========================================================================= */}
            <section id="find-us" className="py-20 lg:py-28 bg-white text-[#222222] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    {/* Header Row (same pattern as "Say hello.") */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline mb-16 sm:mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-7"
                        >
                            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#111111]">
                                Find us<span className="text-[#111111]">.</span>
                            </h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            className="lg:col-span-5"
                        >
                            <p className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-neutral-500 leading-relaxed max-w-sm">
                                Walk in, call, or write.
                                <br />
                                A real person answers every time.
                            </p>
                        </motion.div>
                    </div>

                    {/* Three channels */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-14">
                        {contactMethods.map((method, idx) => {
                            // Alternate direction: even from left, odd from right
                            const fromLeft = idx % 2 === 0;
                            return (
                                <motion.div
                                    key={method.title}
                                    initial={{ opacity: 0, x: fromLeft ? -50 : 50, y: 20 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.85,
                                        ease: [0.16, 1, 0.3, 1],
                                        delay: idx * 0.15,
                                    }}
                                    className="border-t border-neutral-300 pt-8 flex flex-col"
                                >
                                    <div className="flex items-center gap-3 text-neutral-500">
                                        {method.icon}
                                        <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
                                            {method.title}
                                        </span>
                                    </div>

                                    <p className="mt-8 text-2xl sm:text-[28px] font-light tracking-tight text-[#111111] leading-snug break-words">
                                        {method.value}
                                    </p>
                                    <p className="mt-3 text-sm text-neutral-500 leading-relaxed max-w-xs">
                                        {method.desc}
                                    </p>

                                    <div className="mt-8">
                                        <a
                                            href={method.actionHref}
                                            target={method.actionHref.startsWith("http") ? "_blank" : undefined}
                                            rel={method.actionHref.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className="inline-block px-8 py-3 rounded-full border border-black text-black text-[11px] font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors cursor-pointer"
                                        >
                                            {method.actionText}
                                        </a>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================================================
                NEW SECTION 2: FAQ (accordion)
            ========================================================================= */}
            <section id="faq" className="py-20 lg:py-28 bg-[#f3f4f6] text-[#222222] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
                        {/* Left: heading + prompt */}
                        <motion.div
                            initial={{ opacity: 0, x: -70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-5 space-y-6 lg:sticky lg:top-24"
                        >
                            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#111111]">
                                Questions<span className="text-[#111111]">.</span>
                            </h2>
                            <p className="text-[11px] sm:text-xs tracking-wider uppercase text-neutral-500 leading-relaxed font-semibold max-w-sm">
                                The answers people ask for most. Can&apos;t find yours? Write to us and we&apos;ll reply within two hours.
                            </p>
                            <div className="pt-4">
                                <a
                                    href="mailto:concierge@pixelstore.ae"
                                    className="inline-block px-8 py-3 rounded-full bg-black text-white text-[11px] font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors shadow-sm cursor-pointer"
                                >
                                    Ask Us Directly
                                </a>
                            </div>
                        </motion.div>

                        {/* Right: accordion */}
                        <motion.div
                            initial={{ opacity: 0, x: 70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            className="lg:col-span-7 border-t border-neutral-300"
                        >
                            {faqs.map((faq, i) => {
                                const isOpen = openFaq === i;
                                return (
                                    <div key={faq.q} className="border-b border-neutral-300">
                                        <button
                                            type="button"
                                            onClick={() => setOpenFaq(isOpen ? null : i)}
                                            aria-expanded={isOpen}
                                            aria-controls={`faq-panel-${i}`}
                                            className="w-full flex items-center justify-between gap-6 py-7 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#f3f4f6]"
                                        >
                                            <span className="text-lg sm:text-xl font-light tracking-tight text-[#111111] leading-snug">
                                                {faq.q}
                                            </span>
                                            <span
                                                className={`relative shrink-0 w-5 h-5 text-black transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                                                aria-hidden="true"
                                            >
                                                <span className="absolute left-0 top-1/2 w-full h-px bg-current -translate-y-1/2" />
                                                <span className="absolute top-0 left-1/2 h-full w-px bg-current -translate-x-1/2" />
                                            </span>
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    id={`faq-panel-${i}`}
                                                    key="content"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="pb-8 pr-10 text-sm text-neutral-600 leading-relaxed max-w-xl">
                                                        {faq.a}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}