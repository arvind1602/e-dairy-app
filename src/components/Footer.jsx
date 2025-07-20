// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">E-Dairy</h2>
          <p className="mt-2 text-sm text-gray-300">
            Fresh sweets and dairy at your doorstep. Order online and enjoy
            local taste from the comfort of home.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-yellow-400">
                Products
              </a>
            </li>
            <li>
              <a href="/booking" className="hover:text-yellow-400">
                Book Now
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>Email: support@edairy.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Nagpur, India</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 text-xs mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} E-Dairy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
