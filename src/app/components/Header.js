"use client";
import Link from 'next/link';
import { LOGO_URL } from '../utils/Constant';
import { FaShoppingCart } from "react-icons/fa";
import Searchbar from './Searchbar';
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector((state) => state.product.cart);

  return (
    <header className="bg-pink-100 shadow-lg sm:bg-yellow-200 lg:bg-blue-300">
      <div className="container flex flex-col items-center justify-center p-4 md:flex-row md:justify-around">
        <div className="mb-2 logo-container md:mb-0">
          <img src={LOGO_URL} alt="Logo" className="w-auto h-8" />
        </div>
        <Searchbar />
        <nav className="flex flex-col items-center justify-center md:flex-row">
          <ul className="flex flex-col justify-center space-y-2 md:flex-row md:space-y-0 md:space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-700">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-700">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-700">Contact Us</Link>
            </li>
            <li className="flex items-center space-x-2 text-xl font-bold">
              <FaShoppingCart className="text-lg" />
              <Link href="/cart" className="hover:text-gray-700">Cart - {cart.length} items</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
