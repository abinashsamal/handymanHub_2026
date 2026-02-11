'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-gray-700 p-4 shadow-sm">
      <nav className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Top section with logo and contact info */}
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-[#1a237e]">London</span>
                <span className="text-[#e53935]">Handyman</span>
                <span className="text-[#1a237e]">Hub</span>
              </span>
            </Link>

            {/* Contact info - visible on desktop */}
            <div className="hidden md:flex items-center space-x-6 ml-10">
              <a href="tel:4165614736" className="flex items-center text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                416 561 4736
              </a>
              <a href="mailto:LondonHandymanHub@gmail.com" className="flex items-center text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                LondonHandymanHub@gmail.com
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>

          {/* Navigation menu - desktop */}
          <ul className="hidden md:flex space-x-4 items-center mt-4 md:mt-0">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-900">About</Link></li>
            <li><Link href="/services" className="hover:text-gray-900">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-gray-900">Gallery</Link></li>
            <li><Link href="/testimonials" className="hover:text-gray-900">Testimonials</Link></li>
            <li><Link href="/faq" className="hover:text-gray-900">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-gray-900">Contact</Link></li>
            <li><Link href="/quote" className="bg-[#e53935] text-white px-4 py-2 rounded-md hover:bg-red-700">Get a Quote</Link></li>
          </ul>
        </div>

        {/* Mobile menu */}
        <ul className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 space-y-2`}>
          <li><a href="tel:4165614736" className="flex items-center text-gray-600 hover:text-gray-900 py-2">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            416 561 4736
          </a></li>
          <li><Link href="/" className="block hover:text-gray-900 py-2">Home</Link></li>
          <li><Link href="/about" className="block hover:text-gray-900 py-2">About</Link></li>
          <li><Link href="/services" className="block hover:text-gray-900 py-2">Services</Link></li>
          <li><Link href="/gallery" className="block hover:text-gray-900 py-2">Gallery</Link></li>
          <li><Link href="/testimonials" className="block hover:text-gray-900 py-2">Testimonials</Link></li>
          <li><Link href="/faq" className="block hover:text-gray-900 py-2">FAQ</Link></li>
          <li><Link href="/contact" className="block hover:text-gray-900 py-2">Contact</Link></li>
          <li><Link href="/quote" className="block bg-[#e53935] text-white px-4 py-2 rounded-md hover:bg-red-700 mt-2">Get a Quote</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 