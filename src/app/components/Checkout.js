"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderSummary from "./OrderSummary";
import { paymentMethod } from "../utils/payment";
import Link from "next/link";


const CheckoutPage = () => {
  const { subtotal, discount, total } = useSelector((state) => state.cart);
  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "Credit Card",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    console.log("Checkout initiated with details:", shippingDetails);
  };

  return (
    <div className="container p-4 mx-auto lg:max-w-4xl">
      <h1 className="mb-6 text-3xl font-semibold">Checkout</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Shipping Details Form */}
        <form className="space-y-4" onSubmit={handleCheckout}>
          <h2 className="text-xl font-semibold">Shipping Details</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={shippingDetails.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded"
              placeholder="Saksham Jain"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={shippingDetails.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded"
              placeholder="NIT GOA"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              name="city"
              value={shippingDetails.city}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded"
              placeholder="Margao"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Postal Code
            </label>
            <input
              type="text"
              name="postalCode"
              value={shippingDetails.postalCode}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded"
              placeholder="492001"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={shippingDetails.country}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded"
              placeholder="INDIA"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Payment Method
            </label>
            <select
              name="paymentMethod"
              value={shippingDetails.paymentMethod}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded"
              required
            >
              {paymentMethod.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </select>
          </div>
<Link href="Checkout/orderPlaced">
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
          >
            Place Order
          </button> </Link>
        </form>

        {/* Order Summary */}
        <OrderSummary
        />
      </div>
    </div>
  );
};

export default CheckoutPage;
