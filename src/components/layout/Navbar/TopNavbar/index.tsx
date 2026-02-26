"use client";

import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React, { useState } from "react";
import { NavMenu } from "../navbar.types";
import { MenuList } from "./MenuList";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import Image from "next/image";
import InputGroup from "@/components/ui/input-group";
import ResTopNavbar from "./ResTopNavbar";
import CartBtn from "./CartBtn";
import { useRouter } from "next/navigation";

const data: NavMenu = [
  {
    id: 1,
    label: "Shop",
    type: "MenuList",
    children: [
      {
        id: 11,
        label: "T-Shirts",
        url: "/shop?category=t-shirts",
        description: "Comfortable and stylish t-shirts for everyday wear",
      },
      {
        id: 12,
        label: "Shirts",
        url: "/shop?category=shirts",
        description: "Formal and casual shirts for all occasions",
      },
      {
        id: 13,
        label: "Jeans",
        url: "/shop?category=jeans",
        description: "Premium quality denim jeans",
      },
      {
        id: 14,
        label: "Hoodies",
        url: "/shop?category=hoodie",
        description: "Cozy hoodies and jackets",
      },
      {
        id: 15,
        label: "Shorts",
        url: "/shop?category=shorts",
        description: "Comfortable shorts for casual and athletic wear",
      },
    ],
  },
  {
    id: 2,
    type: "MenuItem",
    label: "On Sale",
    url: "/shop?sale=true",
    children: [],
  },
  {
    id: 3,
    type: "MenuItem",
    label: "New Arrivals",
    url: "/shop?new=true",
    children: [],
  },
  {
    id: 4,
    type: "MenuItem",
    label: "All Products",
    url: "/shop",
    children: [],
  },
]

const TopNavbar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="sticky top-0 bg-white z-20 shadow-sm border-b border-black/5">
      <div className="w-full mx-auto items-center justify-between md:justify-start py-4 md:py-5 px-6 lg:px-12 xl:px-20 2xl:px-32 flex relative">
        <div className="flex items-center">
          <div className="block md:hidden mr-4">
            <ResTopNavbar data={data} />
          </div>
          <Link
            href="/"
            className="flex items-center mr-6 lg:mr-16 xl:mr-20"
          >
            <Image
              src="/vastraa-logo.svg"
              alt="Vastraa"
              width={140}
              height={40}
              priority
              className="h-8 lg:h-10 w-auto"
            />
          </Link>
        </div>
        <NavigationMenu className="hidden md:flex mr-4 lg:mr-12 xl:mr-16">
          <NavigationMenuList className="gap-2 lg:gap-6 xl:gap-8">
            {data.map((item) => (
              <React.Fragment key={item.id}>
                {item.type === "MenuItem" && (
                  <MenuItem label={item.label} url={item.url} />
                )}
                {item.type === "MenuList" && (
                  <MenuList data={item.children} label={item.label} />
                )}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mr-4 lg:mr-8">
          <InputGroup className="bg-[#F0F0F0] w-full">
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
              className="bg-transparent placeholder:text-black/40 w-full text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </InputGroup>
        </form>
        <div className="flex items-center gap-3 lg:gap-5">
          <Link href="/search" className="block md:hidden p-1">
            <Image
              priority
              src="/icons/search-black.svg"
              height={100}
              width={100}
              alt="search"
              className="max-w-5.5 max-h-5.5"
            />
          </Link>
          <CartBtn />
          <Link href="/search" className="hidden md:block p-1 hover:opacity-70 transition-opacity">
            <Image
              priority
              src="/icons/search-black.svg"
              height={100}
              width={100}
              alt="search"
              className="max-w-5.5 max-h-5.5"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
