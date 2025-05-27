import React from 'react';

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-8 py-4  relative bg-white">
      <div className="flex items-center">
        <a href="/" className="text-2xl font-bold text-blue-500">LinguaLearn</a>
      </div>

      {/* Center: Navigation Links */}
      <nav className="hidden md:flex gap-8">
        <a href="/home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
        <a href="/about" className="text-gray-700 hover:text-blue-600 transition">About</a>
        <a href="/services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
        <a href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
      </nav>

      {/* Right: Login/Signup */}
      <div className="flex gap-4">
        <a href="/login" className="text-gray-700 hover:text-blue-600 transition">Login</a>
        <a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Signup
        </a>
      </div>
    </header>
  );
};

export default Header;
