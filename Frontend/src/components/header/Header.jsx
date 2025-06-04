import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Header = ({ isLoggedIn = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const getNavLinkClass = ({ isActive }) =>
    clsx(
      "transition duration-150 ease-in-out",
      isActive
        ? "text-blue-600 border-b-2 border-blue-600"
        : "text-gray-700 hover:text-blue-600"
    );

  const AuthNavLinks = (
    <nav className="hidden sm:flex space-x-6 text-sm font-medium">
      <NavLink to="/dashboard" className={getNavLinkClass}>
        Dashboard
      </NavLink>
      <NavLink to="/lessons" className={getNavLinkClass}>
        Lessons
      </NavLink>
      <NavLink to="/practice" className={getNavLinkClass}>
        Practice
      </NavLink>
      <NavLink to="/community" className={getNavLinkClass}>
        Community
      </NavLink>
    </nav>
  );

  const GuestNavLinks = (
    <nav className="hidden md:flex gap-8 font-medium">
      <NavLink to="/home" className={getNavLinkClass}>
        Home
      </NavLink>
      <NavLink to="/about" className={getNavLinkClass}>
        About
      </NavLink>
      <NavLink to="/services" className={getNavLinkClass}>
        Services
      </NavLink>
      <NavLink to="/contact" className={getNavLinkClass}>
        Contact
      </NavLink>
    </nav>
  );

  const GuestActions = (
    <div className="hidden md:flex items-center gap-4 ml-6">
      <NavLink to="/login" className={getNavLinkClass}>
        Login
      </NavLink>
      <NavLink
        to="/signup"
        className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition"
      >
        Signup
      </NavLink>
    </div>
  );

  const MobileMenu = (
    <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-20 mt-2">
      <nav className="flex flex-col px-4 py-4 gap-4 font-medium">
        <NavLink to="/home" className={getNavLinkClass} onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/about" className={getNavLinkClass} onClick={closeMenu}>
          About
        </NavLink>
        <NavLink to="/services" className={getNavLinkClass} onClick={closeMenu}>
          Services
        </NavLink>
        <NavLink to="/contact" className={getNavLinkClass} onClick={closeMenu}>
          Contact
        </NavLink>
        <div className="border-t border-gray-200 pt-4 mt-2">
          <NavLink to="/login" className={getNavLinkClass} onClick={closeMenu}>
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="block mt-2 bg-blue-600 text-white text-center px-4 py-2 rounded font-semibold hover:bg-blue-700 transition"
            onClick={closeMenu}
          >
            Signup
          </NavLink>
        </div>
      </nav>
    </div>
  );

  return (
    <header className="w-full bg-white shadow-sm py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-30">
        <NavLink to="/" className="text-2xl font-bold text-blue-600" aria-label="LinguaLearn Home">
          LinguaLearn
        </NavLink>

        {isLoggedIn ? (
          <>
            {AuthNavLinks}
            <div className="text-gray-600 text-xl ml-4">
              <FaUserCircle title="User Profile" role="img" aria-label="User Profile" />
            </div>
          </>
        ) : (
          <>
            {GuestNavLinks}
            {GuestActions}

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {menuOpen && MobileMenu}
          </>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default Header;
