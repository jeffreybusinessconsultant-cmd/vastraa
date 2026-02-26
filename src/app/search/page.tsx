"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/common/ProductCard";
import { newArrivalsData, topSellingData, relatedProductData } from "../page";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import InputGroup from "@/components/ui/input-group";
import Image from "next/image";

const allProducts = [
  ...newArrivalsData,
  ...topSellingData,
  ...relatedProductData,
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(queryParam);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return allProducts;
    
    const query = searchQuery.toLowerCase();
    return allProducts.filter((product) => {
      return (
        product.title.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.style.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <h2
          className={cn([
            integralCF.className,
            "font-bold text-[32px] md:text-[40px] text-black uppercase mb-5 md:mb-6 mt-8",
          ])}
        >
          Search Products
        </h2>

        <div className="mb-8">
          <InputGroup className="bg-[#F0F0F0] max-w-2xl">
            <InputGroup.Text>
              <Image
                priority
                src="/icons/search.svg"
                height={20}
                width={20}
                alt="search"
                className="min-w-5 min-h-5"
              />
            </InputGroup.Text>
            <InputGroup.Input
              type="search"
              name="search"
              placeholder="Search for products..."
              className="bg-transparent placeholder:text-black/40"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </InputGroup>
        </div>

        {searchQuery && (
          <p className="text-black/60 mb-6">
            {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''} found for "{searchQuery}"
          </p>
        )}

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-black/40 mb-4">No products found</p>
            <p className="text-black/60">Try searching with different keywords</p>
          </div>
        )}
      </div>
    </main>
  );
}
