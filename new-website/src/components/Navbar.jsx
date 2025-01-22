import React from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="w-screen h-auto p-4 flex flex-row justify-between items-center border-b-2">
      {/* Logo Section */}
      <img src={logo} className="h-8 invert" alt="Company Logo" />

      {/* Navigation Links */}
      <div className="flex flex-row justify-around gap-5 text-sm md:text-base">
        <a href="/" className="text-gray-800 hover:text-black transition-colors">
          Home
        </a>
        <a href="/about" className="text-gray-800 hover:text-black transition-colors">
          About
        </a>
        <a href="/services" className="text-gray-800 hover:text-black transition-colors">
          Services
        </a>
        <a href="/products" className="text-gray-800 hover:text-black transition-colors">
          Products
        </a>
        <a href="/contact" className="text-gray-800 hover:text-black transition-colors">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
