import React from "react";
import { FooterLinks } from "./footer.types";
import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinksData: FooterLinks[] = [
  {
    id: 1,
    title: "company",
    children: [
      {
        id: 11,
        label: "about",
        url: "/about",
      },
      {
        id: 12,
        label: "shop",
        url: "/shop",
      },
      {
        id: 13,
        label: "new arrivals",
        url: "/#new-arrivals",
      },
      {
        id: 14,
        label: "top selling",
        url: "/#top-selling",
      },
    ],
  },
  {
    id: 2,
    title: "help",
    children: [
      {
        id: 21,
        label: "customer support",
        url: "/support",
      },
      {
        id: 22,
        label: "delivery details",
        url: "/delivery",
      },
      {
        id: 23,
        label: "terms & conditions",
        url: "/terms",
      },
      {
        id: 24,
        label: "privacy policy",
        url: "/privacy",
      },
    ],
  },
  {
    id: 3,
    title: "shop",
    children: [
      {
        id: 31,
        label: "all products",
        url: "/shop",
      },
      {
        id: 32,
        label: "search",
        url: "/search",
      },
      {
        id: 33,
        label: "cart",
        url: "/cart",
      },
      {
        id: 34,
        label: "checkout",
        url: "/checkout",
      },
    ],
  },
  {
    id: 4,
    title: "categories",
    children: [
      {
        id: 41,
        label: "T-Shirts",
        url: "/shop?category=t-shirts",
      },
      {
        id: 42,
        label: "Shirts",
        url: "/shop?category=shirts",
      },
      {
        id: 43,
        label: "Jeans",
        url: "/shop?category=jeans",
      },
      {
        id: 44,
        label: "Hoodies",
        url: "/shop?category=hoodie",
      },
    ],
  },
];

const LinksSection = () => {
  return (
    <>
      {footerLinksData.map((item) => (
        <section className="flex flex-col mt-5" key={item.id}>
          <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
            {item.title}
          </h3>
          {item.children.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className={cn([
                link.id !== 41 && link.id !== 43 && "capitalize",
                "text-black/60 text-sm md:text-base mb-4 w-fit",
              ])}
            >
              {link.label}
            </Link>
          ))}
        </section>
      ))}
    </>
  );
};

export default LinksSection;
