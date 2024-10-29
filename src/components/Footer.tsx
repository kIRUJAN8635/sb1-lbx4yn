import React from 'react';
import { Footprints, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Footprints className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">DD Footwear</span>
            </div>
            <p className="text-sm">
              Leading footwear manufacturer in Sri Lanka, delivering quality and comfort since 1970.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="hover:text-blue-500">Products</Link>
              </li>
              <li>
                <Link to="/order-status" className="hover:text-blue-500">Track Order</Link>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">Become a Partner</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">About Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">FAQs</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">Shipping Information</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">Returns Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>123 Main Street</li>
              <li>Colombo, Sri Lanka</li>
              <li>Phone: +94 11 234 5678</li>
              <li>Email: info@ddfootwear.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} DD Footwear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;