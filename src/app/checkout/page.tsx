"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { RootState } from "@/lib/store";
import { useAppSelector } from "@/lib/hooks/redux";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, totalPrice, adjustedTotalPrice, promoDiscount } = useAppSelector(
    (state: RootState) => state.carts
  );
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    paymentMethod: "cod",
  });

  const finalTotal = Math.max(0, Math.round((adjustedTotalPrice || 0) - (promoDiscount || 0)));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.state || !formData.zipCode) {
      toast.error("Please fill in all fields");
      return;
    }

    // Simulate order placement
    toast.success("Order placed successfully!");
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  if (!cart || cart.items.length === 0) {
    return (
      <main className="pb-20">
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <div className="flex items-center flex-col text-gray-300 mt-32">
            <span className="block mb-4">Your cart is empty. Add items to checkout.</span>
            <Button className="rounded-full w-24" asChild>
              <Link href="/shop">Shop</Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <h2
          className={cn([
            integralCF.className,
            "font-bold text-[32px] md:text-[40px] text-black uppercase mb-5 md:mb-6 mt-8",
          ])}
        >
          Checkout
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Checkout Form */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="p-6 rounded-[20px] border border-black/10">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-full border border-black/10 focus:outline-none focus:border-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-full border border-black/10 focus:outline-none focus:border-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-full border border-black/10 focus:outline-none focus:border-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-full border border-black/10 focus:outline-none focus:border-black"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="p-6 rounded-[20px] border border-black/10">
                <h3 className="text-xl font-bold mb-4">Shipping Address</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-full border border-black/10 focus:outline-none focus:border-black"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-full border border-black/10 focus:outline-none focus:border-black"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">State *</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-full border border-black/10 focus:outline-none focus:border-black"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">ZIP Code *</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-full border border-black/10 focus:outline-none focus:border-black"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="p-6 rounded-[20px] border border-black/10">
                <h3 className="text-xl font-bold mb-4">Payment Method</h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === "cod"}
                      onChange={handleInputChange}
                      className="w-4 h-4"
                    />
                    <span>Cash on Delivery</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={handleInputChange}
                      className="w-4 h-4"
                    />
                    <span>Credit/Debit Card (Demo)</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === "upi"}
                      onChange={handleInputChange}
                      className="w-4 h-4"
                    />
                    <span>UPI (Demo)</span>
                  </label>
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96">
            <div className="p-6 rounded-[20px] border border-black/10 sticky top-4">
              <h3 className="text-xl font-bold mb-4">Order Summary</h3>
              <div className="space-y-4 mb-6">
                {cart.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span className="text-black/60">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="font-medium">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <hr className="border-t-black/10 mb-4" />
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-black/60">Subtotal</span>
                  <span className="font-bold">₹{totalPrice || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/60">Discount</span>
                  <span className="font-bold text-red-600">
                    -₹{Math.round((totalPrice || 0) - (adjustedTotalPrice || 0))}
                  </span>
                </div>
                {(promoDiscount || 0) > 0 && (
                  <div className="flex justify-between">
                    <span className="text-black/60">Promo</span>
                    <span className="font-bold text-red-600">-₹{promoDiscount || 0}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-black/60">Delivery</span>
                  <span className="font-bold">Free</span>
                </div>
                <hr className="border-t-black/10" />
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">₹{finalTotal}</span>
                </div>
              </div>
              <Button
                type="submit"
                onClick={handleSubmit}
                className="w-full mt-6 bg-black text-white rounded-full h-12 hover:bg-black/80"
              >
                Place Order
              </Button>
              <Link href="/cart" className="block text-center mt-4 text-sm text-black/60 hover:text-black">
                ← Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
