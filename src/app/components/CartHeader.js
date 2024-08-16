"use client";
import Link from 'next/link';
import { LOGO_URL } from '../utils/Constant';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector((state) => state.product.cart);

  return (
    <header className="bg-pink-100 shadow-lg sm:bg-yellow-200 lg:bg-blue-300">
      <div className="container flex flex-col items-center justify-between p-4 md:flex-row">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <img src={LOGO_URL} alt="Logo" className="h-10" />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center md:flex-row md:space-x-8">
          <ul className="flex flex-col space-y-2 text-center md:flex-row md:space-y-0 md:space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-700">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-700">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-700">Contact Us</Link>
            </li>
          </ul>

          {/* Cart Icon */}
          <div className="mt-4 md:mt-0">
            <Link href="/cart" className="flex items-center space-x-2 text-xl font-bold hover:text-gray-700">
              <FaShoppingCart />
              <span>Cart - {cart.length} items</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
