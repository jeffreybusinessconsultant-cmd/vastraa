"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MobileFilters from "@/components/shop-page/filters/MobileFilters";
import Filters from "@/components/shop-page/filters";
import { newArrivalsData, relatedProductData, topSellingData } from "../page";
import ProductCard from "@/components/common/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";
import { setSortBy, setCurrentPage, toggleCategory } from "@/lib/features/filters/filtersSlice";
import { useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const allProducts = [
  ...newArrivalsData,
  ...topSellingData,
  ...relatedProductData,
];

const ITEMS_PER_PAGE = 9;

export default function ShopPage() {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const { categories, priceRange, colors, sizes, dressStyles, sortBy, currentPage } = useAppSelector(
    (state: RootState) => state.filters
  );

  // Handle URL parameters
  useEffect(() => {
    const category = searchParams.get('category');
    if (category && !categories.includes(category)) {
      dispatch(toggleCategory(category));
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let products = [...allProducts];

    // Filter by URL parameters
    const sale = searchParams.get('sale');
    const newArrivals = searchParams.get('new');

    if (sale === 'true') {
      products = products.filter(p => p.discount.percentage > 0 || p.discount.amount > 0);
    }

    if (newArrivals === 'true') {
      products = newArrivalsData;
    }

    if (categories.length > 0) {
      products = products.filter((product) => {
        return categories.includes(product.category);
      });
    }

    if (priceRange[0] > 0 || priceRange[1] < 3000) {
      products = products.filter((product) => {
        const finalPrice = product.discount.percentage > 0
          ? product.price - (product.price * product.discount.percentage) / 100
          : product.discount.amount > 0
          ? product.price - product.discount.amount
          : product.price;
        return finalPrice >= priceRange[0] && finalPrice <= priceRange[1];
      });
    }

    if (colors.length > 0) {
      products = products.filter((product) => {
        return product.colors.some((color) => colors.includes(color));
      });
    }

    if (sizes.length > 0) {
      products = products.filter((product) => {
        return product.sizes.some((size) => sizes.includes(size));
      });
    }

    if (dressStyles.length > 0) {
      products = products.filter((product) => {
        return dressStyles.includes(product.style);
      });
    }

    // Sort products
    if (sortBy === "low-price") {
      products.sort((a, b) => {
        const priceA = a.discount.percentage > 0
          ? a.price - (a.price * a.discount.percentage) / 100
          : a.discount.amount > 0
          ? a.price - a.discount.amount
          : a.price;
        const priceB = b.discount.percentage > 0
          ? b.price - (b.price * b.discount.percentage) / 100
          : b.discount.amount > 0
          ? b.price - b.discount.amount
          : b.price;
        return priceA - priceB;
      });
    } else if (sortBy === "high-price") {
      products.sort((a, b) => {
        const priceA = a.discount.percentage > 0
          ? a.price - (a.price * a.discount.percentage) / 100
          : a.discount.amount > 0
          ? a.price - a.discount.amount
          : a.price;
        const priceB = b.discount.percentage > 0
          ? b.price - (b.price * b.discount.percentage) / 100
          : b.discount.amount > 0
          ? b.price - b.discount.amount
          : b.price;
        return priceB - priceA;
      });
    }

    return products;
  }, [categories, priceRange, colors, sizes, dressStyles, sortBy, searchParams]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <div className="flex flex-col md:flex-row md:space-x-5">
          <aside className="hidden md:block w-full md:max-w-72.5 p-5 md:px-6 md:py-5 rounded-[20px] border border-black/10 h-fit">
            <Filters />
          </aside>
          <section className="w-full">
            <div className="flex items-center justify-between mb-4 md:mb-5">
              <h6 className="text-2xl md:text-[32px] font-bold text-black">
                Products
                <span className="text-base md:text-xl font-normal text-black/60 ml-2">
                  ({filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'})
                </span>
              </h6>
              <div className="flex items-center space-x-3">
                <div className="block md:hidden">
                  <MobileFilters />
                </div>
                <Select
                  value={sortBy}
                  onValueChange={(value: any) => dispatch(setSortBy(value))}
                >
                  <SelectTrigger className="w-fit min-w-48 bg-transparent">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="most-popular">Most Popular</SelectItem>
                    <SelectItem value="low-price">Price: Low to High</SelectItem>
                    <SelectItem value="high-price">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} data={product} />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-2xl text-black/40 mb-4">No products found</p>
                <p className="text-black/60">Try adjusting your filters</p>
              </div>
            )}
            {totalPages > 1 && (
              <div className="mt-8">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => handlePageChange(page)}
                          isActive={currentPage === page}
                          className={`cursor-pointer ${currentPage === page ? 'bg-black! text-white!' : ''}`}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
