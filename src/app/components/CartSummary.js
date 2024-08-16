"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyCoupon } from "../utils/cartSlice";
import Link from "next/link";

const CartSummary = () => {
  const dispatch = useDispatch();
  const { subtotal = 0, discount = 0, total = 0 } = useSelector((state) => state.cart);
  const [couponInput, setCouponInput] = useState("");

  const handleApplyCoupon = () => {
    dispatch(applyCoupon(couponInput));
  };

  return (
    <div className="p-4 mt-6 border-t border-gray-300 sm:max-w-md sm:mx-auto lg:max-w-lg lg:mt-8">
      <h2 className="mb-2 text-2xl font-semibold text-gray-800">Cart Summary</h2>
      <div className="mb-4">
        <p className="mb-1 text-gray-700">Subtotal: <span className="font-medium">${subtotal.toFixed(2)}</span></p>
        <p className="mb-1 text-gray-700">Discount: <span className="font-medium">${discount?.toFixed(2)}</span></p>
        <p className="text-gray-800">Total: <span className="font-semibold">${total.toFixed(2)}</span></p>
      </div>

      {/* Coupon Input */}
      <div className="mb-6">
        <input
          type="text"
          value={couponInput}
          onChange={(e) => setCouponInput(e.target.value)}
          className="w-full h-10 px-4 mb-2 border rounded focus:ring-2 focus:ring-blue-500"
          placeholder="Enter coupon code"
        />
        <button
          className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={handleApplyCoupon}
        >
          Apply Coupon
        </button>
      </div>

      {/* Checkout Button */}
      <Link href="cart/Checkout">
      <button className="w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
        Checkout
      </button> </Link>
    </div>
  );
};

export default CartSummary;
