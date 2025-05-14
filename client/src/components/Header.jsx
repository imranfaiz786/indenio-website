import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
// import logo from '../assets/indeniologo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#0A0A23] text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-3xl font-extrabold tracking-wide text-indigo-500">INDENIO</h1>
        {/* <div><img src={logo} alt="indenio" /></div> */}

        <div className="hidden md:flex space-x-8 text-white text-lg font-medium">
          <Link to="/" className="hover:text-indigo-400 transition">Home</Link>
          <Link to="/about" className="hover:text-indigo-400 transition">About</Link>
          <Link to="/services" className="hover:text-indigo-400 transition">Services</Link>
          <Link to="/portfolio" className="hover:text-indigo-400 transition">Portfolio</Link>
          <Link to="/contact" className="hover:text-indigo-400 transition">Contact</Link>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#121232] text-white px-6 pb-4 space-y-3 text-lg font-medium">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-indigo-400">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-indigo-400">About</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="block hover:text-indigo-400">Services</Link>
          <Link to="/portfolio" onClick={() => setMenuOpen(false)} className="block hover:text-indigo-400">Portfolio</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-indigo-400">Contact</Link>
        </div>
      )}
    </header>
  );
}