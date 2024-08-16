"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../utils/productSlice";
import { updateSubtotal } from "../utils/cartSlice";
import CartSummary from "./CartSummary";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.product.cart);

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleQuantityChange = (product, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: product.id, quantity: newQuantity }));
    }
  };

  useEffect(() => {
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    dispatch(updateSubtotal(subtotal));
  }, [cart, dispatch]);

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center pb-4 mb-4 border-b">
                <img src={item.thumbnail} alt={item.title} className="object-cover w-24 h-24 mr-4" />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-700">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => handleQuantityChange(item, item.quantity - 1)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                      className="w-16 mx-2 text-center border rounded"
                      min="1"
                    />
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => handleQuantityChange(item, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      className="px-4 py-2 ml-4 text-white bg-red-500 rounded"
                      onClick={() => handleRemove(item)}
                    >
                      Remove Item
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <CartSummary />
        </div>
      )}
    </div>
  );
};

export default CartPage;
