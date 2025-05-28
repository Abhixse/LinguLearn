import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between px-4 md:px-8 py-4 bg-white relative shadow-sm">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/" className="text-2xl font-bold text-blue-500">
          LinguaLearn
        </a>
      </div>

      {/* Navigation (hidden on mobile) */}
      <nav className="hidden md:flex gap-8 font-[Poppins] font-semibold">
        <a
          href="/home"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Home
        </a>
        <a
          href="/about"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          About
        </a>
        <a
          href="/services"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Services
        </a>
        <a
          href="/contact"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Contact
        </a>
      </nav>

      {/* Right side: Login/Signup (hidden on mobile) */}
      <div className="hidden md:flex gap-4 justify-center items-center">
        <a href="/login" className="text-gray-700 hover:text-blue-600 transition">
          Login
        </a>
        <a
          href="/signup"
          className="font-semibold bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Signup
        </a>
      </div>

      {/* Hamburger button (mobile only) */}
      <button
        className="md:hidden flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-20">
          <nav className="flex flex-col px-4 py-4 gap-4 font-[Poppins] font-semibold">
            <a
              href="/home"
              className="text-gray-700 hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/services"
              className="text-gray-700 hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <div className="border-t border-gray-200 mt-2 pt-2 flex flex-col gap-2">
              <a
                href="/login"
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </a>
              <a
                href="/signup"
                className="font-semibold bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center"
                onClick={() => setMenuOpen(false)}
              >
                Signup
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
