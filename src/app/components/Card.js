"use client";
import React, { useEffect, useState } from "react";
import { PRODUCT_API_URL } from '../utils/Constant';
import { useDispatch, useSelector } from "react-redux";
import { setProducts, addToCart } from "../utils/productSlice"; 
import { ApplyConfetti } from "./confetti";
import { motion } from "framer-motion";

const Card = () => {
  const [localProducts, setLocalProducts] = useState([]); 
  const query = useSelector((state) => state.search.query);
  const dispatch = useDispatch();

  const getProduct = async () => {
    try {
      const res = await fetch(PRODUCT_API_URL);
      const json = await res.json();
      setLocalProducts(json.products);
      dispatch(setProducts(json.products)); 
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    ApplyConfetti();
  };

  const filteredProducts = localProducts.filter((product) =>
    product.title.toLowerCase().includes(query?.toLowerCase() || "")
  );

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            className="p-4 border rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="object-cover w-full h-48 mb-4 rounded-lg sm:h-56 lg:h-64"
            />
            <h3 className="mb-2 text-lg font-semibold text-gray-900">{product.title}</h3>
            <p className="mb-4 text-gray-700">${product.price}</p>
            <div className="flex justify-center">
              <motion.button
                className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default Card;
