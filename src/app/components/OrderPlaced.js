"use client";

import Link from "next/link";
import OrderSummary from "./OrderSummary";

const OrderPlaced = () => {
    return (
        <div className="container p-4 mx-auto text-center lg:max-w-4xl">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h1 className="mb-4 text-4xl font-semibold text-green-600">
              Order Placed Successfully!
            </h1>
           
            <p className="text-lg text-gray-700">
              Your order has been confirmed and will be shipped soon.
            </p>
            
        <OrderSummary/>
        <div className="mt-8">
          <Link href="/" className="p-2 m-2 text-white bg-green-500 rounded md:px-4 md:py-2 hover:bg-green-600">
            Continue Shopping
          </Link>
<div className="pt-4">


          <Link href="/orders" className="p-2 m-2 text-white bg-gray-500 rounded md:px-4 md:py-2 hover:bg-gray-600">
            View My Orders
          </Link> </div>
        </div>
      </div>
    </div>)}

    export default OrderPlaced;