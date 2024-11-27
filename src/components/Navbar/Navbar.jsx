import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-8">
      <div className="flex items-center justify-between">
        {/* Logo on the left */}
        <div className="logo-container">
          <Link to="/">
            <img src={assets.hand_logo} alt="My Logo" className="h-9 w-auto" />
          </Link>
        </div>

        {/* Centered link */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link
            to="/"
            className="nav-link uppercase font-sohne text-black font-semibold text-sm"
          >
            selected works
          </Link>
        </div>

        {/* Right-aligned links */}
        <div className="flex space-x-8">
          <Link
            to="/about"
            className="nav-link uppercase font-sohne text-black font-semibold text-sm"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="nav-link uppercase font-sohne text-black font-semibold text-sm"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
