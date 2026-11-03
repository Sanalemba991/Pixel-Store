import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ProductsDirectory from "./ProductsDirectory";

export const metadata = {
  title: "Products & Categories | PixelStore",
  description: "Browse curated camera collections, precision optics, power accessories, and roasted blends.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col selection:bg-black selection:text-white">
      <Navbar />
      <main className="flex-1 w-full">
        <ProductsDirectory />
      </main>
      <Footer />
    </div>
  );
}

