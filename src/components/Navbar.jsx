import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathnam);
  return (
    <nav className="fixed top-0 left-0 w-full h-14 px-8 py-8 mb-8 z-20">
      <div className="flex items-center justify-between">
        <div className="logo-container">
          <Link to="/" onClick={() => setActiveTab("/")}>
            <img src={assets.hand_logo} alt="My Logo" className="h-9 w-auto" />
          </Link>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link
            to="/selected-works"
            onClick={() => setActiveTab("/selected-works")}
            className={`nav-link uppercase font-sohneBreit text-black font-semibold text-sm ${
              activeTab === "/selected-works" ? "text-customGrey" : "text-black"
            }`}
          >
            selected works
          </Link>
        </div>

        <div className="flex space-x-8">
          <Link
            to="/about"
            onClick={() => setActiveTab("/about")}
            className={`nav-link uppercase font-sohneBreit text-black font-semibold text-sm ${
              activeTab === "/about" ? "text-customGrey" : "text-black"
            }`}
          >
            About
          </Link>
          <Link
            onClick={() => setActiveTab("/contact")}
            to="/contact"
            className={`nav-link uppercase font-sohneBreit text-black font-semibold text-sm ${
              activeTab === "/contact" ? "text-customGrey" : "text-black"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
