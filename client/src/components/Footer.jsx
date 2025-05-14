import React from 'react';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A23] text-white pt-10 pb-6 mt-16 border-t border-gray-700">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-4">INDENIO</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Delivering advanced AI & IT solutions with unmatched innovation, quality, and excellence. We turn your vision into digital reality.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-indigo-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-indigo-400 transition">About Us</a></li>
            <li><a href="/services" className="hover:text-indigo-400 transition">Services</a></li>
            <li><a href="/contact" className="hover:text-indigo-400 transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-sm text-gray-300">Email: info@indenio.com</p>
          <p className="text-sm text-gray-300 mb-4">Phone: +1 (234) 567-890</p>

          <div className="flex space-x-4 text-indigo-400">
            <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white transition"><Linkedin size={20} /></a>
            <a href="mailto:info@indenio.com" className="hover:text-white transition"><Mail size={20} /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 text-sm">
        © {new Date().getFullYear()} INDENIO. All rights reserved.
      </div>
    </footer>
  );
}