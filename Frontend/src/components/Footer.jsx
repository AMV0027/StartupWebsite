import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-sm">
            We are committed to delivering high-quality solutions that empower businesses to succeed. Our expertise lies in innovation and excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#services" className="text-sm text-gray-400 hover:text-white">Our Services</a></li>
            <li><a href="#about" className="text-sm text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#portfolio" className="text-sm text-gray-400 hover:text-white">Portfolio</a></li>
            <li><a href="#contact" className="text-sm text-gray-400 hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-400">Phone: +1 234 567 890</li>
            <li className="text-gray-400">Email: info@business.com</li>
            <li className="text-gray-400">Address: 123 Business Lane, NY</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <a
              href="#facebook"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-white text-gray-400 hover:text-black transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#twitter"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-white text-gray-400 hover:text-black transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#linkedin"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-white text-gray-400 hover:text-black transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-white text-gray-400 hover:text-black transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Your Business Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
