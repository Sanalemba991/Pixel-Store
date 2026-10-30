// @ts-nocheck
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
    motion,
    AnimatePresence,
    useInView,
    useReducedMotion,
} from "framer-motion";

/* =====================================================================
   BANNER DATA (Bag variants)
   ===================================================================== */
const bagVariants = [
    {
        id: 1,
        name: "Monochrome Matte Messenger",
        price: "$149.00",
        image: "/das.png",
        thumb: "/vintage-bag.jpg",
    },
    {
        id: 2,
        name: "Obsidian Canvas SLR Holster",
        price: "$165.00",
        image: "/das.png",
        thumb: "/vintage-bag.jpg",
    },
    {
        id: 3,
        name: "Pure Onyx Vintage Bag",
        price: "$180.00",
        image: "/das.png",
        thumb: "/vintage-bag.jpg",
    },
    {
        id: 4,
        name: "Stealth Black Rugged Pack",
        price: "$155.00",
        image: "/vintage-bag.jpg",
        thumb: "/vintage-bag.jpg",
    },
];

/* =====================================================================
   IMAGES (Unsplash)
   Pass the photo ID from the Unsplash URL, e.g.
   https://unsplash.com/photos/EEftR6aZSMY  ->  unsplash("EEftR6aZSMY")
   If an image fails to load, a line illustration is shown instead.
   ===================================================================== */
const unsplash = (id, w = 1200) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMG = {
    story: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&w=1200&q=80", // modern store showroom
    phones: "https://images.unsplash.com/photo-1511707171634-5f897ff02543?auto=format&fit=crop&w=1200&q=80", // modern smartphone
    cameras: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80", // pro camera with lens
    studio: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=80", // cameras in studio
    showroom: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&w=1200&q=80", // lit storefront window
    team: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80", // Omar: man smiling
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80", // Priya: woman professional
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80", // Daniel: man with glasses
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80", // Layla: woman smiling
    ],
};

/* =====================================================================
   CONTENT (placeholder data, replace with your real information)
   ===================================================================== */

const stats = [
    { value: 50000, suffix: "+", label: "Customers served across the UAE" },
    { value: 1200, suffix: "+", label: "Phones, cameras and lenses in stock" },
    { value: 100, suffix: "%", label: "Genuine products with brand warranty" },
    { value: 4.9, suffix: "/5", label: "Average customer rating", decimals: 1 },
];

const categories = [
    { name: "Flagship phones", note: "Latest releases, sealed" },
    { name: "Everyday phones", note: "Great value, solid battery" },
    { name: "Mirrorless cameras", note: "Full frame and APS-C" },
    { name: "DSLR cameras", note: "Reliable, proven bodies" },
    { name: "Lenses and optics", note: "Prime, zoom and wide" },
    { name: "Accessories", note: "Cases, tripods, storage" },
];

const values = [
    {
        title: "Only genuine products",
        text: "Every device comes from authorised distributors with full manufacturer warranty. No grey stock and no surprises.",
    },
    {
        title: "Honest advice",
        text: "We tell you when a cheaper model does the job. Our staff are paid to help you choose, not to push the biggest box.",
    },
    {
        title: "Clear pricing in AED",
        text: "The price you see is the price you pay, VAT included, with nothing added at checkout.",
    },
    {
        title: "Support after the sale",
        text: "Setup help, warranty claims and repairs are handled by the same people who sold you the device.",
    },
];

const steps = [
    {
        title: "Tell us what you need",
        text: "Share your budget and how you plan to use the device. Chat, call or walk in.",
    },
    {
        title: "Compare and test",
        text: "Try phones and cameras side by side in our Dubai showroom or studio.",
    },
    {
        title: "Order with confidence",
        text: "Pay securely, get a VAT invoice and receive your device sealed and warranty-registered.",
    },
    {
        title: "Get help whenever you need it",
        text: "Our team stays with you for setup, accessories, trade-ins and warranty service.",
    },
];

const timeline = [
    { year: "2018", text: "PixelStore opens as a small phone and camera counter in Dubai." },
    { year: "2020", text: "Online store launches with delivery to all seven emirates." },
    { year: "2022", text: "Our camera studio opens so customers can test gear before buying." },
    { year: "2024", text: "We become an authorised reseller for leading global brands." },
    { year: "2026", text: "More than 50,000 customers have chosen PixelStore." },
];

const journeyPhotos = [
    {
        year: "2018",
        tag: "Inaugural Hub",
        title: "PixelStore Opens in Dubai",
        desc: "Started as a dedicated camera and mobile counter with authentic advice and handpicked lenses.",
        src: "/camera-hero.jpg",
    },
    {
        year: "2020",
        tag: "UAE Nationwide",
        title: "Seven Emirates Delivery",
        desc: "Launched our full online catalog with rapid delivery across Dubai, Abu Dhabi, and all seven emirates.",
        src: "/lifestyle-urban.jpg",
    },
    {
        year: "2022",
        tag: "Creative Studio",
        title: "Hands-on Experience Studio",
        desc: "Opened our camera studio so creators and filmmakers can test bodies and sensors before purchase.",
        src: "/camera-hand.jpg",
    },
    {
        year: "2024",
        tag: "Authorised Partner",
        title: "Global Brand Reseller",
        desc: "Officially certified as an authorised reseller for leading international camera and smartphone makers.",
        src: "/camera-detail.jpg",
    },
    {
        year: "2026",
        tag: "50,000+ Community",
        title: "50,000+ Creators Milestone",
        desc: "More than 50,000 visual artists, photographers, and customers trust PixelStore for their essential gear.",
        src: "/lifestyle-sunset.jpg",
    },
];

const brands = ["Apple", "Samsung", "Google", "Sony", "Canon", "Nikon", "Fujifilm", "GoPro", "DJI", "Xiaomi"];

const team = [
    { name: "Omar Al Farsi", role: "Founder and CEO" },
    { name: "Priya Nair", role: "Head of Mobile" },
    { name: "Daniel Reyes", role: "Camera Specialist" },
    { name: "Layla Haddad", role: "Customer Care Lead" },
];

const reviews = [
    {
        quote:
            "I came in unsure which camera to buy. They let me test three and recommended the cheapest one that fit my needs.",
        name: "Hassan M.",
        role: "Wedding photographer, Dubai",
    },
    {
        quote:
            "Genuine phone, proper warranty card and delivery the next morning. This is how electronics should be sold.",
        name: "Sarah K.",
        role: "Marketing manager, Business Bay",
    },
    {
        quote:
            "They set up my new phone and moved all my data across. I did not have to do anything.",
        name: "Rashid A.",
        role: "Customer since 2021",
    },
];

const trust = [
    "Manufacturer warranty on every item",
    "VAT invoice with every order",
    "Secure card and Apple Pay checkout",
    "Free delivery across Dubai",
];

const faqs = [
    {
        q: "Are your products genuine and covered by warranty?",
        a: "Yes. Every phone and camera is sourced from authorised distributors and includes the full manufacturer warranty. We register the warranty with you at purchase.",
    },
    {
        q: "How fast is delivery in Dubai?",
        a: "Orders placed before 2 pm are delivered within 24 hours across Dubai. Other emirates usually receive their order in one to two working days.",
    },
    {
        q: "Can I try a camera or phone before buying?",
        a: "Yes. Visit our showroom and studio to handle devices, compare sensors and screens, and ask our specialists anything.",
    },
    {
        q: "Do you accept trade-ins?",
        a: "We accept trade-ins on selected phones and cameras. Bring your device in for a free assessment and we will deduct the value from your new purchase.",
    },
    {
        q: "What is your return policy?",
        a: "Unopened items can be returned within 7 days. If a device arrives faulty, we replace it or refund you. Contact our team and we will handle it.",
    },
];

/* =====================================================================
   SHARED HELPERS
   ===================================================================== */

const reveal = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
    }),
};

const view = { once: true, margin: "-80px" };

function Counter({ to, suffix, decimals = 0 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const reduce = useReducedMotion();
    const [n, setN] = useState(0);

    useEffect(() => {
        if (!inView) return;
        if (reduce) return setN(to);
        let raf;
        const start = performance.now();
        const tick = (t) => {
            const p = Math.min((t - start) / 1800, 1);
            setN(to * (1 - Math.pow(1 - p, 4)));
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, to, reduce]);

    return (
        <span ref={ref}>
            {decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString("en-US")}
            {suffix}
        </span>
    );
}

/* Camera viewfinder frame: corner brackets that lock in when scrolled into view */
function Frame({ children, tone = "dark", label, className = "" }) {
    const c = tone === "dark" ? "border-black" : "border-white";
    const corner = (pos, d) => (
        <motion.span
            aria-hidden
            className={`pointer-events-none absolute z-10 h-7 w-7 sm:h-9 sm:w-9 ${c} ${pos}`}
            initial={{ opacity: 0, scale: 1.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] }}
        />
    );
    return (
        <div className={`relative p-3 sm:p-4 ${className}`}>
            {corner("left-0 top-0 border-l-2 border-t-2", 0.05)}
            {corner("right-0 top-0 border-r-2 border-t-2", 0.12)}
            {corner("bottom-0 left-0 border-b-2 border-l-2", 0.19)}
            {corner("bottom-0 right-0 border-b-2 border-r-2", 0.26)}
            {children}
            {label && (
                <span
                    className={`absolute bottom-6 left-6 z-10 rounded-full px-3 py-1 text-xs font-medium sm:bottom-7 sm:left-7 ${tone === "dark" ? "bg-white text-black" : "bg-black text-white"
                        }`}
                >
                    {label}
                </span>
            )}
        </div>
    );
}

/* Simple line illustrations used when a photo file is not present yet */
function Illustration({ kind }) {
    const common = {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
    };
    return (
        <svg viewBox="0 0 120 120" className="h-1/2 w-1/2 text-black/70" {...common}>
            {kind === "phone" && (
                <>
                    <rect x="34" y="12" width="52" height="96" rx="10" />
                    <path d="M52 20h16" />
                    <circle cx="60" cy="98" r="3" />
                </>
            )}
            {kind === "camera" && (
                <>
                    <path d="M18 40h20l6-10h32l6 10h20a6 6 0 0 1 6 6v46a6 6 0 0 1-6 6H18a6 6 0 0 1-6-6V46a6 6 0 0 1 6-6z" />
                    <circle cx="60" cy="68" r="19" />
                    <circle cx="60" cy="68" r="8" />
                </>
            )}
            {kind === "store" && (
                <>
                    <path d="M16 44l8-26h72l8 26" />
                    <path d="M16 44a11 11 0 0 0 22 0 11 11 0 0 0 22 0 11 11 0 0 0 22 0 11 11 0 0 0 22 0" />
                    <path d="M22 56v46h76V56" />
                    <rect x="48" y="72" width="24" height="30" />
                </>
            )}
            {kind === "person" && (
                <>
                    <circle cx="60" cy="42" r="18" />
                    <path d="M24 106c2-22 18-34 36-34s34 12 36 34" />
                </>
            )}
        </svg>
    );
}

/* Photo with a monochrome look and a clean fallback */
function Photo({ src, alt, kind = "store", className = "" }) {
    const [failed, setFailed] = useState(false);
    return (
        <div className={`relative overflow-hidden bg-neutral-100 group ${className}`}>
            {failed ? (
                <div className="flex h-full w-full items-center justify-center">
                    <Illustration kind={kind} />
                </div>
            ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={() => setFailed(true)}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-108 hover:scale-108"
                />
            )}
        </div>
    );
}

function Heading({ children, className = "" }) {
    return (
        <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={view}
            className={`text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl ${className}`}
        >
            {children}
        </motion.h2>
    );
}

function Check({ light }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={`h-5 w-5 shrink-0 ${light ? "text-white" : "text-black"}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12.5l2.7 2.7L16 9.8" />
        </svg>
    );
}

function FaqItem({ item, open, onToggle }) {
    return (
        <div className="border-b border-black/10">
            <button
                onClick={onToggle}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
            >
                <span className="text-xl font-bold tracking-tight">
                    {item.q}
                </span>
                <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/20 text-xl leading-none"
                >
                    +
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="max-w-2xl pb-7 leading-relaxed text-black/65">
                            {item.a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function JourneyVerticalSlider({
    activeIndex,
    direction,
    onSelect,
    onNext,
    onPrev,
    onPauseChange,
}: {
    activeIndex: number;
    direction: number;
    onSelect: (index: number) => void;
    onNext: () => void;
    onPrev: () => void;
    onPauseChange: (paused: boolean) => void;
}) {
    const item = journeyPhotos[activeIndex];

    return (
        <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={view}
            className="w-full"
            onMouseEnter={() => onPauseChange(true)}
            onMouseLeave={() => onPauseChange(false)}
        >
            <Frame tone="dark" className="!p-2.5 sm:!p-3">
                <div className="relative h-[460px] sm:h-[520px] w-full overflow-hidden rounded-xl bg-neutral-950 shadow-2xl">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={activeIndex}
                            custom={direction}
                            variants={{
                                enter: (dir: number) => ({
                                    y: dir >= 0 ? "-100%" : "100%",
                                    opacity: 0,
                                    scale: 0.96,
                                }),
                                center: {
                                    y: 0,
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        y: { type: "spring", stiffness: 220, damping: 26 },
                                        opacity: { duration: 0.35 },
                                        scale: { duration: 0.35 },
                                    },
                                },
                                exit: (dir: number) => ({
                                    y: dir >= 0 ? "100%" : "-100%",
                                    opacity: 0,
                                    scale: 0.96,
                                    transition: {
                                        y: { type: "spring", stiffness: 220, damping: 26 },
                                        opacity: { duration: 0.35 },
                                        scale: { duration: 0.35 },
                                    },
                                }),
                            }}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="absolute inset-0 h-full w-full"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={item.src}
                                alt={item.title}
                                className="h-full w-full object-cover select-none"
                            />
                            {/* Cinematic Gradient Overlays */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/30" />
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(0,0,0,0.5)_100%)]" />

                            {/* Top Badges */}
                            <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
                                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold tracking-wide text-white backdrop-blur-md border border-white/25">
                                    {item.year}
                                </span>
                                <span className="rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium tracking-wide text-white/90 backdrop-blur-md border border-white/10">
                                    {item.tag}
                                </span>
                            </div>

                            {/* Bottom Caption Information */}
                            <div className="absolute bottom-6 left-6 right-16 z-20 text-white">
                                <div className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-1.5 flex items-center gap-1.5">
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                                    Dubai Chapter {activeIndex + 1} of {journeyPhotos.length}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                                    {item.title}
                                </h3>
                                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-white/80 line-clamp-3 max-w-sm">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Up & Down Slider Controls (right floating panel) */}
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-2 rounded-full bg-black/70 p-2 backdrop-blur-md border border-white/15 shadow-xl">
                        <button
                            type="button"
                            onClick={onPrev}
                            title="Previous photo (slide up)"
                            className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 hover:bg-white/20 hover:text-white transition active:scale-90 cursor-pointer"
                        >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
                            </svg>
                        </button>

                        {/* Slide Indicators */}
                        <div className="flex flex-col gap-1.5 py-1 items-center">
                            {journeyPhotos.map((p, i) => (
                                <button
                                    key={p.year}
                                    type="button"
                                    onClick={() => onSelect(i)}
                                    title={`Go to ${p.year}`}
                                    className={`rounded-full transition-all duration-300 cursor-pointer ${i === activeIndex
                                        ? "h-6 w-2 bg-white"
                                        : "h-2 w-2 bg-white/40 hover:bg-white/80"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={onNext}
                            title="Next photo (slide down)"
                            className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 hover:bg-white/20 hover:text-white transition active:scale-90 cursor-pointer"
                        >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>

                    {/* Up-to-down slider direction badge */}
                    <div className="absolute bottom-3 right-4 z-20 hidden sm:flex items-center gap-1 text-[10px] text-white/50 tracking-wider font-mono">
                        <span>SLIDER ↓</span>
                    </div>
                </div>
            </Frame>
        </motion.div>
    );
}

/* =====================================================================
   PAGE
   ===================================================================== */

export default function AboutPage() {
    const [selectedBag, setSelectedBag] = useState(bagVariants[0]);
    const [openFaq, setOpenFaq] = useState(0);
    const [timelineIndex, setTimelineIndex] = useState(0);
    const [timelineDirection, setTimelineDirection] = useState(1);
    const [isSliderPaused, setIsSliderPaused] = useState(false);

    const handleNextSlide = () => {
        setTimelineDirection(1); // coming from up to down
        setTimelineIndex((prev) => (prev + 1) % journeyPhotos.length);
    };

    const handlePrevSlide = () => {
        setTimelineDirection(-1);
        setTimelineIndex((prev) => (prev - 1 + journeyPhotos.length) % journeyPhotos.length);
    };

    const handleSelectSlide = (targetIndex: number) => {
        setTimelineDirection(targetIndex >= timelineIndex ? 1 : -1);
        setTimelineIndex(targetIndex);
    };

    useEffect(() => {
        if (isSliderPaused) return;
        const timer = setInterval(() => {
            setTimelineDirection(1); // auto-slide: new photo comes from up to down
            setTimelineIndex((prev) => (prev + 1) % journeyPhotos.length);
        }, 4200);
        return () => clearInterval(timer);
    }, [isSliderPaused]);

    return (
        <main className="bg-white text-black antialiased font-sans">
            {/* HERO BANNER - EXACT RECREATION OF SUPA. FAST. AESTHETIC */}
            <section className="relative w-full h-screen min-h-[580px] max-h-[880px] flex flex-col justify-between overflow-hidden select-none bg-neutral-950 font-sans selection:bg-amber-500 selection:text-black">
                {/* 1. Base Landscape Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/da.png"
                        alt="About PixelStore Landscape Banner"
                        fill
                        priority
                        className="object-cover object-center filter contrast-[1.04] brightness-[0.98]"
                        sizes="100vw"
                    />
                    {/* Soft atmospheric gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-black/20 pointer-events-none" />
                </div>

                {/* 2. Center Layer: Giant Typographic Elements & Floating Devices/Bag */}
                <div className="relative z-20 flex-1 flex flex-col justify-center items-center pointer-events-none translate-y-10 sm:translate-y-14 lg:translate-y-16">
                    <div className="relative w-full max-w-7xl px-4 sm:px-8 flex items-center justify-between h-full">
                        {/* LEFT: "ABOUT" Big Bold Outlined Headline */}
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
                                ABOUT
                            </h1>
                        </motion.div>

                        {/* CENTER: Floating Camera Gear with Smooth Hover & Bobbing */}
                        <motion.div
                            key={selectedBag.id}
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
                                    src={selectedBag.image}
                                    alt={selectedBag.name}
                                    fill
                                    priority
                                    className="object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)] hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 290px, 380px"
                                />
                            </motion.div>
                        </motion.div>

                        {/* RIGHT: "Story" Big Serif Headline */}
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
                                Story.
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
                            Established 2018 in Dubai. Built by creators, for photographers and visual storytellers with hands-on studio gear testing and local agency warranties.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* INTRO / STORY */}
            <section id="story" className="w-full px-8 md:px-16 py-20 md:py-28">
                <div className="grid gap-14 md:grid-cols-2 md:items-center">
                    <div>
                        <div className="inline-block px-3 py-1 bg-black text-white text-[10px] tracking-widest uppercase font-bold mb-4">
                            Our Heritage & Purpose
                        </div>
                        <Heading className="mb-6">Built by creators, for photographers and tech lovers.</Heading>
                        <p className="text-base leading-relaxed text-black/75 mb-6">
                            Founded in Dubai in 2018, PixelStore was born out of frustration with impersonal tech retailers and questionable grey market inventory. We set out to build a trusted destination where camera enthusiasts and smartphone power users could get hands-on experience, genuine warranty coverage, and sincere advice.
                        </p>
                        <p className="text-base leading-relaxed text-black/70 mb-8">
                            Today, from our Dubai showroom and studio to our online store serving all emirates, we continue to treat every customer like a fellow creator. We believe in helping you invest in the right gear that elevates your craft.
                        </p>
                        <div className="grid grid-cols-2 gap-4 border-t border-black/10 pt-6">
                            <div>
                                <div className="text-2xl font-bold text-black">100% Genuine</div>
                                <div className="text-xs text-black/60 mt-1">Direct from official brand distributors</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-black">Dubai Studio</div>
                                <div className="text-xs text-black/60 mt-1">Try and test gear before purchase</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Frame>
                            <Photo
                                src={IMG.showroom}
                                alt="PixelStore Dubai Showroom"
                                kind="store"
                                className="aspect-[4/3] w-full"
                            />
                        </Frame>
                    </div>
                </div>
            </section>


            {/* STATS */}
            <section className="bg-black text-white">
                <div className="w-full grid grid-cols-2 gap-y-6 px-8 md:px-16 py-10 md:grid-cols-4 md:py-12">
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            variants={reveal}
                            custom={i}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="px-2 md:border-l md:border-white/15 md:px-6 md:first:border-l-0"
                        >
                            <div
                                className="text-3xl font-bold tracking-tight sm:text-4xl"
                            >
                                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals} />
                            </div>
                            <p className="mt-1.5 max-w-[14rem] text-xs sm:text-sm leading-snug text-white/60">
                                {s.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* WHAT WE SELL */}
            <section className="w-full px-8 md:px-16 py-20 md:py-28">
                <Heading className="max-w-2xl">Two things, done properly.</Heading>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-black/65">
                    We focus on mobile phones and cameras so we can know them better than
                    anyone, and stock only what we are happy to recommend.
                </p>

                <div className="mt-14 grid gap-10 md:grid-cols-2">
                    {[
                        {
                            title: "Mobile phones",
                            text: "Flagship and mid-range smartphones from the brands people trust, sealed and covered by warranty. We help you compare chips, cameras and battery life so you buy the one that fits how you actually use it.",
                            items: ["Latest flagships", "Everyday value phones", "Cases and chargers", "Trade-in advice"],
                            src: IMG.phones,
                            kind: "phone",
                        },
                        {
                            title: "Cameras and lenses",
                            text: "Mirrorless, DSLR, compact and action cameras for beginners, creators and working photographers. Our team shoots with what we sell, so the advice you get comes from real use.",
                            items: ["Mirrorless and DSLR", "Lenses and tripods", "Vlogging and action kits", "Memory and batteries"],
                            src: IMG.cameras,
                            kind: "camera",
                        },
                    ].map((c, i) => (
                        <motion.article
                            key={c.title}
                            variants={reveal}
                            custom={i}
                            initial="hidden"
                            whileInView="show"
                            viewport={view}
                        >
                            <Frame>
                                <Photo
                                    src={c.src}
                                    alt={c.title}
                                    kind={c.kind}
                                    className="aspect-[4/3] w-full"
                                />
                            </Frame>
                            <h3
                                className="mt-8 text-3xl font-bold tracking-tight"
                            >
                                {c.title}
                            </h3>
                            <p className="mt-4 leading-relaxed text-black/65">{c.text}</p>
                            <ul className="mt-6 flex flex-wrap gap-2 text-sm">
                                {c.items.map((item) => (
                                    <li
                                        key={item}
                                        className="rounded-full border border-black/20 px-4 py-2"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.article>
                    ))}
                </div>
            </section>
            <section className="w-full px-8 md:px-16 py-20 md:py-28">
                <div className="grid gap-14 md:grid-cols-[1fr_1.4fr]">
                    <div className="md:sticky md:top-28 md:self-start">
                        <Heading>What you can expect from us.</Heading>
                        <div className="mt-10">
                            <Frame>
                                <Photo
                                    src={IMG.studio}
                                    alt="Camera studio at PixelStore"
                                    kind="camera"
                                    className="aspect-[4/3] w-full"
                                />
                            </Frame>
                        </div>
                    </div>

                    <div className="divide-y divide-black/10 border-y border-black/10 self-start">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                variants={reveal}
                                custom={i}
                                initial="hidden"
                                whileInView="show"
                                viewport={view}
                                className="py-9"
                            >
                                <h3
                                    className="text-2xl font-bold tracking-tight"
                                >
                                    {v.title}
                                </h3>
                                <p className="mt-3 max-w-lg leading-relaxed text-black/65">
                                    {v.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-black py-12 md:py-14 text-white">
                <div className="w-full px-8 md:px-16">
                    <motion.h2
                        variants={reveal}
                        initial="hidden"
                        whileInView="show"
                        viewport={view}
                        className="text-2xl sm:text-3xl font-bold tracking-tight"
                    >
                        How buying from us works.
                    </motion.h2>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
                        {steps.map((s, i) => (
                            <motion.div
                                key={s.title}
                                variants={reveal}
                                custom={i}
                                initial="hidden"
                                whileInView="show"
                                viewport={view}
                            >
                                <div
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-xs font-bold"
                                >
                                    {i + 1}
                                </div>
                                <h3
                                    className="mt-3.5 text-base font-bold tracking-tight"
                                >
                                    {s.title}
                                </h3>
                                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-white/60">
                                    {s.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TIMELINE */}
            <section className="w-full px-8 md:px-16 py-20 md:py-28">
                <Heading>Our journey in Dubai</Heading>
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left: Interactive Timeline */}
                    <div className="relative border-l border-black/20 pl-8 sm:pl-12 lg:col-span-7">
                        {timeline.map((t, i) => {
                            const isSelected = timelineIndex === i;
                            return (
                                <motion.div
                                    key={t.year}
                                    variants={reveal}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={view}
                                    onClick={() => handleSelectSlide(i)}
                                    className={`relative pb-14 last:pb-0 cursor-pointer group transition-all duration-300 ${isSelected ? "opacity-100" : "opacity-60 hover:opacity-100"
                                        }`}
                                >
                                    <span
                                        className={`absolute -left-[37px] top-2 h-3 w-3 rounded-full sm:-left-[53px] transition-all duration-300 ${isSelected
                                            ? "bg-black ring-4 ring-black/20 scale-125"
                                            : "bg-black/50 group-hover:bg-black group-hover:scale-110"
                                            }`}
                                    />
                                    <div className="flex items-center gap-3">
                                        <div className="text-3xl font-bold tracking-tight">
                                            {t.year}
                                        </div>
                                        {isSelected && (
                                            <span className="text-[10px] tracking-wider uppercase font-bold px-2.5 py-0.5 bg-black text-white rounded-full">
                                                Viewing Photo
                                            </span>
                                        )}
                                    </div>
                                    <p className="mt-2 max-w-md leading-relaxed text-black/65">
                                        {t.text}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right: Vertical Photo Slider (come from up to down) */}
                    <div className="lg:col-span-5 lg:sticky lg:top-28 w-full max-w-lg mx-auto lg:mx-0">
                        <JourneyVerticalSlider
                            activeIndex={timelineIndex}
                            direction={timelineDirection}
                            onSelect={handleSelectSlide}
                            onNext={handleNextSlide}
                            onPrev={handlePrevSlide}
                            onPauseChange={setIsSliderPaused}
                        />
                    </div>
                </div>
            </section>

            {/* TEAM */}
            <section className="bg-neutral-50 py-20 md:py-28">
                <div className="w-full px-8 md:px-16">
                    <Heading className="max-w-xl">The people behind the counter.</Heading>
                    <p className="mt-5 max-w-xl text-lg leading-relaxed text-black/65">
                        A small team of phone and camera enthusiasts who answer your
                        questions the way we would want ours answered.
                    </p>
                    <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
                        {team.map((p, i) => (
                            <motion.div
                                key={p.name}
                                variants={reveal}
                                custom={i}
                                initial="hidden"
                                whileInView="show"
                                viewport={view}
                            >
                                <Frame className="!p-2">
                                    <Photo
                                        src={IMG.team[i]}
                                        alt={p.name}
                                        kind="person"
                                        className="aspect-[3/4] w-full"
                                    />
                                </Frame>
                                <h3
                                    className="mt-5 text-xl font-bold tracking-tight"
                                >
                                    {p.name}
                                </h3>
                                <p className="mt-1 text-sm text-black/55">{p.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}