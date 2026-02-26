"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";
import { toggleDressStyle } from "@/lib/features/filters/filtersSlice";
import { cn } from "@/lib/utils";

type DressStyle = {
  title: string;
  slug: string;
};

const dressStylesData: DressStyle[] = [
  {
    title: "Casual",
    slug: "casual",
  },
  {
    title: "Formal",
    slug: "formal",
  },
  {
    title: "Party",
    slug: "party",
  },
  {
    title: "Gym",
    slug: "gym",
  },
];

const DressStyleSection = () => {
  const dispatch = useAppDispatch();
  const { dressStyles } = useAppSelector((state: RootState) => state.filters);

  return (
    <Accordion type="single" collapsible defaultValue="filter-style">
      <AccordionItem value="filter-style" className="border-none">
        <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">
          Dress Style
        </AccordionTrigger>
        <AccordionContent className="pt-4 pb-0">
          <div className="flex flex-col text-black/60 space-y-0.5">
            {dressStylesData.map((dStyle, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => dispatch(toggleDressStyle(dStyle.slug))}
                className={cn([
                  "flex items-center justify-between py-2 text-left hover:text-black transition-colors",
                  dressStyles.includes(dStyle.slug) && "text-black font-medium",
                ])}
              >
                {dStyle.title} <MdKeyboardArrowRight />
              </button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default DressStyleSection;
