import React from "react";
import { notFound } from "next/navigation";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { getCategoryBySlug, getProductsByCategory, CATEGORIES } from "../../data/products";
import CategoryProductsClient from "./CategoryProductsClient";

interface PageProps {
  params: Promise<{
    categorySlug: string;
  }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    categorySlug: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return { title: "Category Not Found | PixelStore" };

  return {
    title: `${category.name} | PixelStore Archive`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(categorySlug);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col selection:bg-black selection:text-white">
      <Navbar />
      <main className="flex-1 w-full">
        <CategoryProductsClient category={category} products={products} />
      </main>
      <Footer />
    </div>
  );
}

