import React from "react";
import { notFound } from "next/navigation";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import {
  getProductBySlug,
  getProductsByCategory,
  PRODUCTS,
} from "../../../data/products";
import ProductDetailClient from "./ProductDetailClient";

interface PageProps {
  params: Promise<{
    categorySlug: string;
    productSlug: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((prod) => ({
    categorySlug: prod.categorySlug,
    productSlug: prod.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { productSlug } = await params;
  const product = getProductBySlug(productSlug);
  if (!product) return { title: "Product Not Found | PixelStore" };

  return {
    title: `${product.name} | PixelStore Studio`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { categorySlug, productSlug } = await params;
  const product = getProductBySlug(productSlug);

  if (!product || product.categorySlug.toLowerCase() !== categorySlug.toLowerCase()) {
    notFound();
  }

  const related = getProductsByCategory(product.categorySlug).filter(
    (p) => p.slug !== product.slug
  );

  return (
    <div className="min-h-screen bg-white text-black flex flex-col selection:bg-black selection:text-white">
      <Navbar />
      <main className="flex-1 w-full">
        <ProductDetailClient product={product} relatedProducts={related} />
      </main>
      <Footer />
    </div>
  );
}

