export interface Product {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  tagline: string;
  description: string;
  price: number;
  currency: string;
  badge?: string;
  image: string;
  gallery?: string[];
  specs: { label: string; value: string }[];
  inStock: boolean;
}

export interface Category {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  itemCount: number;
}

export const CATEGORIES: Category[] = [
  {
    slug: "cameras",
    name: "Cameras",
    subtitle: "Monochrome & Full-Frame Optical Bodies",
    description: "Engineered for pure tactile handling, unmatched dynamic range, and precision black-and-white tonal graduation.",
    image: "/camera-hero.jpg",
    itemCount: 4,
  },
  {
    slug: "lenses",
    name: "Lenses & Optics",
    subtitle: "Prime Focal Glass & Anamorphic Lenses",
    description: "Crafted with hand-polished elements, zero chromatic aberration, and buttery smooth stepless aperture rings.",
    image: "/camera-detail.jpg",
    itemCount: 3,
  },
  {
    slug: "power-accessories",
    name: "Power & Accessories",
    subtitle: "MagSafe Packs, Grips & Modular Power",
    description: "Fast-discharge high-capacity external powerbanks and wireless studio docks built with aerospace alloy shells.",
    image: "/das.png",
    itemCount: 3,
  },
  {
    slug: "roast-blends",
    name: "Studio Roast Blends",
    subtitle: "Specialty Roasted Micro-Lots for Creators",
    description: "Small-batch specialty beans roasted exclusively to fuel long darkroom sessions and creative workflow.",
    image: "/coffee-bag.jpg",
    itemCount: 3,
  },
];

export const PRODUCTS: Product[] = [
  // --- CAMERAS ---
  {
    id: "cam-mono-x",
    slug: "pixel-mono-x",
    name: "Pixel Mono-X Flagship",
    categorySlug: "cameras",
    categoryName: "Cameras",
    tagline: "48MP True Monochrome Full-Frame Sensor",
    description:
      "Stripped of color filter arrays, the Pixel Mono-X captures pure luminous photon data directly onto its customized sensor. Uncompromised micro-contrast, zero interpolation, and legendary shadow gradation.",
    price: 3890,
    currency: "USD",
    badge: "Flagship",
    image: "/camera-hero.jpg",
    gallery: ["/camera-hero.jpg", "/camera-detail.jpg", "/camera-hand.jpg"],
    specs: [
      { label: "Sensor", value: "48.2MP Monochromatic BSI CMOS" },
      { label: "Mount", value: "Pixel Studio M-Mount" },
      { label: "ISO Sensitivity", value: "64 - 102,400 Native" },
      { label: "Shutter", value: "Mechanical Leaf up to 1/4000s" },
      { label: "Chassis", value: "Milled Magnesium & Matte Ceramic" },
      { label: "Weight", value: "540g" },
    ],
    inStock: true,
  },
  {
    id: "cam-vision-street",
    slug: "vision-street-compact",
    name: "Vision Street Compact",
    categorySlug: "cameras",
    categoryName: "Cameras",
    tagline: "Fixed 35mm f/1.8 Street Documentary Camera",
    description:
      "Ultra-quiet leaf shutter and whisper-quiet zone focusing made for candid street and travel storytelling. Compact enough for everyday carry with a razor-sharp integrated optic.",
    price: 1950,
    currency: "USD",
    badge: "New Release",
    image: "/camera-hand.jpg",
    gallery: ["/camera-hand.jpg", "/camera-detail.jpg", "/camera-hero.jpg"],
    specs: [
      { label: "Sensor", value: "26MP APS-C High Dynamic Sensor" },
      { label: "Lens", value: "Integrated 35mm f/1.8 Aspherical" },
      { label: "Viewfinder", value: "Hybrid Optical & 3.68M-dot OLED" },
      { label: "Focusing", value: "Zone Distance Scale & Eye-AF" },
      { label: "Weight", value: "390g" },
    ],
    inStock: true,
  },
  {
    id: "cam-studio-r",
    slug: "pixel-studio-r",
    name: "Pixel Studio-R Medium Format",
    categorySlug: "cameras",
    categoryName: "Cameras",
    tagline: "100MP Medium Format Computational Body",
    description:
      "Unparalleled resolution for gallery exhibitions and luxury commercial campaigns. Featuring 16-bit color depth processing and 5-axis sensor-shift stabilization.",
    price: 5990,
    currency: "USD",
    badge: "Studio Edition",
    image: "/camera-detail.jpg",
    gallery: ["/camera-detail.jpg", "/camera-hero.jpg", "/lifestyle-sunset.jpg"],
    specs: [
      { label: "Sensor", value: "100MP 44x33mm Medium Format" },
      { label: "Dynamic Range", value: "15.4 Stops" },
      { label: "Stabilization", value: "5-axis In-Body IBIS (7.0 stops)" },
      { label: "Display", value: "3.2-inch Tilt Touchscreen" },
      { label: "Weight", value: "780g" },
    ],
    inStock: true,
  },
  {
    id: "cam-rangefinder",
    slug: "analog-m-digital",
    name: "Analog-M Digital Rangefinder",
    categorySlug: "cameras",
    categoryName: "Cameras",
    tagline: "True Mechanical Split-Image Rangefinder",
    description:
      "Pure photography stripped of menus and clutter. Coupled mechanical rangefinder focusing with a tactile analog dial cluster and instantaneous response.",
    price: 4450,
    currency: "USD",
    image: "/lifestyle-urban.jpg",
    gallery: ["/lifestyle-urban.jpg", "/camera-hero.jpg"],
    specs: [
      { label: "Sensor", value: "36MP Full-Frame Monochromatic" },
      { label: "Focus", value: "Mechanical Split-Image Rangefinder" },
      { label: "Body", value: "Brass Top & Base Plate with Black Paint" },
      { label: "Battery Life", value: "750 frames per charge" },
    ],
    inStock: false,
  },

  // --- LENSES ---
  {
    id: "lens-50-f14",
    slug: "series-mono-50mm-f14",
    name: "Series Mono 50mm f/1.4",
    categorySlug: "lenses",
    categoryName: "Lenses & Optics",
    tagline: "The Reference Normal Prime for Cinematic Depth",
    description:
      "Formulated with rare earth glass elements to yield creamy bokeh and zero field curvature. Features an aperture ring with tactile click-stops that de-clicks for video with a flip of a toggle.",
    price: 1190,
    currency: "USD",
    badge: "Editor's Choice",
    image: "/camera-detail.jpg",
    gallery: ["/camera-detail.jpg", "/camera-hero.jpg"],
    specs: [
      { label: "Focal Length", value: "50mm" },
      { label: "Max Aperture", value: "f/1.4 (min f/16)" },
      { label: "Aperture Blades", value: "11 Curved Blades" },
      { label: "Filter Thread", value: "52mm" },
      { label: "Mount", value: "M-Mount / E-Mount Available" },
    ],
    inStock: true,
  },
  {
    id: "lens-35-f2",
    slug: "artisan-35mm-f2-pancake",
    name: "Artisan 35mm f/2.0 Ultra-Slim",
    categorySlug: "lenses",
    categoryName: "Lenses & Optics",
    tagline: "Pocketable Pancake Prime for Street Creators",
    description:
      "Measuring only 22mm deep, this optic turns any camera into a low-profile street machine. Razor-sharp across all frame corners right from wide open.",
    price: 780,
    currency: "USD",
    image: "/camera-hand.jpg",
    gallery: ["/camera-hand.jpg", "/camera-detail.jpg"],
    specs: [
      { label: "Focal Length", value: "35mm" },
      { label: "Max Aperture", value: "f/2.0" },
      { label: "Thickness", value: "22mm ultra-slim" },
      { label: "Weight", value: "145g" },
    ],
    inStock: true,
  },
  {
    id: "lens-85-f12",
    slug: "portrait-85mm-f12-master",
    name: "Master Portrait 85mm f/1.2",
    categorySlug: "lenses",
    categoryName: "Lenses & Optics",
    tagline: "Dreamlike Subject Separation and Rendering",
    description:
      "A monumental portrait optic engineered for extreme low-light clarity and ultra-shallow depth of field. Hand-assembled in small batches.",
    price: 1850,
    currency: "USD",
    badge: "Master Serie",
    image: "/camera-hero.jpg",
    gallery: ["/camera-hero.jpg", "/lifestyle-boat.jpg"],
    specs: [
      { label: "Focal Length", value: "85mm" },
      { label: "Max Aperture", value: "f/1.2" },
      { label: "Optic Groups", value: "11 Elements in 9 Groups" },
      { label: "Filter Size", value: "77mm" },
    ],
    inStock: true,
  },

  // --- POWER & ACCESSORIES ---
  {
    id: "pwr-supacharger",
    slug: "supacharger-camera-powerbank",
    name: "SupaCharger Camera Wireless Bank",
    categorySlug: "power-accessories",
    categoryName: "Power & Accessories",
    tagline: "Camera-Stylized MagSafe 15,000mAh Battery Dock",
    description:
      "Crafted with genuine camera dial aesthetics and tactile mechanical click switches. Delivers 65W GaN fast charging via USB-C PD and 15W Qi2 magnetic wireless fast charging.",
    price: 189,
    currency: "USD",
    badge: "Trending",
    image: "/das.png",
    gallery: ["/das.png", "/duos.png", "/dup.png"],
    specs: [
      { label: "Capacity", value: "15,000mAh / 55.5Wh" },
      { label: "Max Output", value: "65W USB-C Power Delivery" },
      { label: "Wireless Output", value: "15W Qi2 / MagSafe Certified" },
      { label: "Enclosure", value: "CNC Milled Aluminum & Vegan Leather" },
      { label: "Weight", value: "295g" },
    ],
    inStock: true,
  },
  {
    id: "pwr-dock-duo",
    slug: "pixel-dock-duo-station",
    name: "Pixel Studio Dock Duo",
    categorySlug: "power-accessories",
    categoryName: "Power & Accessories",
    tagline: "Dual Battery Rapid Charger & Backup Hub",
    description:
      "Simultaneously recharge two camera battery packs in under 45 minutes with precision OLED percentage status gauges.",
    price: 145,
    currency: "USD",
    image: "/duos.png",
    gallery: ["/duos.png", "/das.png"],
    specs: [
      { label: "Slots", value: "Dual Quick-Swap Modular Plates" },
      { label: "Input", value: "100W USB-C PD" },
      { label: "Screen", value: "High-contrast OLED Health Diagnostics" },
    ],
    inStock: true,
  },
  {
    id: "acc-strap-monochrome",
    slug: "artisan-woven-strap-noir",
    name: "Artisan Braided Quick-Strap Noir",
    categorySlug: "power-accessories",
    categoryName: "Power & Accessories",
    tagline: "High-Tensile Climbing Cord & Italian Leather Ends",
    description:
      "Engineered to support heavy camera rigs with ease and zero neck fatigue. Precision quick-release anchor connectors tested up to 80kg of load.",
    price: 85,
    currency: "USD",
    image: "/bagg.png",
    gallery: ["/bagg.png", "/dup.png"],
    specs: [
      { label: "Material", value: "Dyneema reinforced braided cord" },
      { label: "Length", value: "105cm fixed length" },
      { label: "Connectors", value: "Quick-Lock Anchor Pucks (x4 included)" },
    ],
    inStock: true,
  },

  // --- STUDIO ROAST BLENDS ---
  {
    id: "roast-precision-01",
    slug: "signature-blend-precision-01",
    name: "Precision 01 // Washed",
    categorySlug: "roast-blends",
    categoryName: "Studio Roast Blends",
    tagline: "Washed Process • Intensity 4/5 • Bergamot & Dark Cocoa",
    description:
      "Grown at 2,100 meters above sea level in Yirgacheffe, roasted to highlight crystal clarity, bright citric acidity, and a lingering cocoa finish.",
    price: 28,
    currency: "USD",
    badge: "Single Origin",
    image: "/coffee-bag.jpg",
    gallery: ["/coffee-bag.jpg"],
    specs: [
      { label: "Origin", value: "Yirgacheffe, Ethiopia" },
      { label: "Process", value: "Washed Process" },
      { label: "Elevation", value: "2,100m" },
      { label: "Notes", value: "Bergamot, Blackcurrant, Dark Cocoa" },
      { label: "Net Weight", value: "250g / 8.8oz Whole Bean" },
    ],
    inStock: true,
  },
  {
    id: "roast-monolith-02",
    slug: "signature-blend-monolith-02",
    name: "Monolith 02 // Natural",
    categorySlug: "roast-blends",
    categoryName: "Studio Roast Blends",
    tagline: "Natural Process • Intensity 5/5 • Black Cherry & Molasses",
    description:
      "Deep, heavy, and visceral. Sun-dried in cherry for 28 days to create thick body, syrupy mouthfeel, and bold dark fruit sweetness.",
    price: 32,
    currency: "USD",
    badge: "Limited Lot",
    image: "/coffee-bag.jpg",
    gallery: ["/coffee-bag.jpg"],
    specs: [
      { label: "Origin", value: "Huila, Colombia" },
      { label: "Process", value: "Extended Anaerobic Natural" },
      { label: "Elevation", value: "1,850m" },
      { label: "Notes", value: "Black Cherry, Molasses, Pipe Tobacco" },
      { label: "Net Weight", value: "250g / 8.8oz Whole Bean" },
    ],
    inStock: true,
  },
  {
    id: "roast-aura-03",
    slug: "signature-blend-aura-noir-03",
    name: "Aura Noir 03 // Honey",
    categorySlug: "roast-blends",
    categoryName: "Studio Roast Blends",
    tagline: "Honey Process • Intensity 3/5 • Jasmine & White Peach",
    description:
      "An aromatic powerhouse with delicate floral top notes and candied sweetness. Roasted light-medium to preserve complex floral volatiles.",
    price: 30,
    currency: "USD",
    image: "/coffee-bag.jpg",
    gallery: ["/coffee-bag.jpg"],
    specs: [
      { label: "Origin", value: "Tarrazu, Costa Rica" },
      { label: "Process", value: "Yellow Honey" },
      { label: "Elevation", value: "1,900m" },
      { label: "Notes", value: "Jasmine Blossom, White Peach, Honeycomb" },
      { label: "Net Weight", value: "250g / 8.8oz Whole Bean" },
    ],
    inStock: true,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.slug.toLowerCase() === slug.toLowerCase());
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return PRODUCTS.filter((p) => p.categorySlug.toLowerCase() === categorySlug.toLowerCase());
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}

