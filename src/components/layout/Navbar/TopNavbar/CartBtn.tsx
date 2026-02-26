"use client";

import { useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartBtn = () => {
  const { cart } = useAppSelector((state: RootState) => state.carts);

  return (
    <Link href="/cart" className="relative mr-3.5 p-1">
      <Image
        priority
        src="/icons/cart.svg"
        height={100}
        width={100}
        alt="cart"
        className="max-w-5.5 max-h-5.5"
      />
      {cart && cart.totalQuantities > 0 && (
        <span className="flex items-center justify-center bg-black text-white rounded-full min-w-5 h-5 px-1.5 text-xs absolute -top-2 -right-2">
          {cart.totalQuantities}
        </span>
      )}
    </Link>
  );
};

export default CartBtn;
