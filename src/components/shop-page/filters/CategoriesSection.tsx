"use client";

import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";
import { toggleCategory } from "@/lib/features/filters/filtersSlice";
import { cn } from "@/lib/utils";

type Category = {
  title: string;
  slug: string;
};

const categoriesData: Category[] = [
  {
    title: "T-shirts",
    slug: "t-shirts",
  },
  {
    title: "Shorts",
    slug: "shorts",
  },
  {
    title: "Shirts",
    slug: "shirts",
  },
  {
    title: "Hoodie",
    slug: "hoodie",
  },
  {
    title: "Jeans",
    slug: "jeans",
  },
];

const CategoriesSection = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state: RootState) => state.filters);

  return (
    <div className="flex flex-col space-y-0.5 text-black/60">
      {categoriesData.map((category, idx) => (
        <button
          key={idx}
          type="button"
          onClick={() => dispatch(toggleCategory(category.slug))}
          className={cn([
            "flex items-center justify-between py-2 text-left hover:text-black transition-colors",
            categories.includes(category.slug) && "text-black font-medium",
          ])}
        >
          {category.title} <MdKeyboardArrowRight />
        </button>
      ))}
    </div>
  );
};

export default CategoriesSection;
