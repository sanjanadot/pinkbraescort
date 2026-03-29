"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg" role="banner">
      <nav className="py-4" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-bold text-pink-500 hover:text-pink-600 transition-colors duration-300"
              >
                <i className="fas fa-heart" aria-hidden="true"></i>
                <span>Pink Bra Escorts</span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <ul className="flex space-x-8">
                {[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services" },
                  { label: "Gallery", href: "/gallery" },
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-pink-500 font-medium transition-colors duration-300 py-2 px-3 rounded-md hover:bg-pink-50"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-700 hover:text-pink-500 focus:outline-none"
                aria-label="Open main menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                  <span
                    className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                      menuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                      menuOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                      menuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 bg-white">
              <ul className="flex flex-col space-y-2 pt-4">
                {[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services" },
                  { label: "Gallery", href: "/gallery" },
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-gray-700 hover:text-pink-500 font-medium transition-colors duration-300 py-3 px-4 rounded-md hover:bg-pink-50"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
