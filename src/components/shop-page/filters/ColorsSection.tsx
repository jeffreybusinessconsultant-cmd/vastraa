"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IoMdCheckmark } from "react-icons/io";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";
import { toggleColor } from "@/lib/features/filters/filtersSlice";

const ColorsSection = () => {
  const dispatch = useAppDispatch();
  const { colors } = useAppSelector((state: RootState) => state.filters);

  const colorOptions = [
    { name: "Green", class: "bg-green-600" },
    { name: "Red", class: "bg-red-600" },
    { name: "Yellow", class: "bg-yellow-300" },
    { name: "Orange", class: "bg-orange-600" },
    { name: "Cyan", class: "bg-cyan-400" },
    { name: "Blue", class: "bg-blue-600" },
    { name: "Purple", class: "bg-purple-600" },
    { name: "Pink", class: "bg-pink-600" },
    { name: "White", class: "bg-white" },
    { name: "Black", class: "bg-black" },
  ];

  return (
    <Accordion type="single" collapsible defaultValue="filter-colors">
      <AccordionItem value="filter-colors" className="border-none">
        <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">
          Colors
        </AccordionTrigger>
        <AccordionContent className="pt-4 pb-0">
          <div className="flex space-2.5 flex-wrap md:grid grid-cols-5 gap-2.5">
            {colorOptions.map((color, index) => (
              <button
                key={index}
                type="button"
                className={cn([
                  color.class,
                  "rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20",
                ])}
                onClick={() => dispatch(toggleColor(color.name))}
              >
                {colors.includes(color.name) && (
                  <IoMdCheckmark className="text-base text-white" />
                )}
              </button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ColorsSection;
