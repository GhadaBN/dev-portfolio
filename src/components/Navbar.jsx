import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { assets } from "../assets/assets";

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(scrollY.get() > 10);
    };

    const unsubscribe = scrollY.on("change", updateScroll);

    return () => unsubscribe();
  }, [scrollY]);
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 max-w-[96%] w-full my-6 z-20 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FBFBF6] bg-opacity-100 rounded-full shadow-sm  py-2 px-8 "
          : "bg-transparent rounded-none shadow-none text-black"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="logo-container">
          <Link to="/" onClick={() => setActiveTab("/")}>
            <img src={assets.hand_logo} alt="My Logo" className="h-9 w-auto" />
          </Link>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex">
          <Link
            to="/selected-works"
            onClick={() => setActiveTab("/selected-works")}
            className="nav-link flex items-center space-x-2 uppercase font-sohneBreit text-black font-semibold text-sm"
          >
            {activeTab === "/selected-works" && (
              <span className="h-3 w-3 rounded-full border border-black bg-customRed"></span>
            )}
            <span>selected works</span>
          </Link>
        </div>
        <div className="hidden lg:flex space-x-8">
          <Link
            to="/about"
            onClick={() => setActiveTab("/about")}
            className="nav-link flex items-center space-x-2 uppercase font-sohneBreit text-black font-semibold text-sm"
          >
            {activeTab === "/about" && (
              <span className="h-3 w-3 rounded-full border border-black bg-customRed"></span>
            )}
            <span>About</span>
          </Link>
          <Link
            onClick={() => setActiveTab("/contact")}
            to="/contact"
            className="nav-link flex items-center space-x-2 uppercase font-sohneBreit text-black font-semibold text-sm"
          >
            {activeTab === "/contact" && (
              <span className="h-3 w-3 rounded-full border border-black bg-customRed"></span>
            )}
            <span>Contact</span>
          </Link>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 bg-white rounded-lg shadow-lg p-4 space-y-4">
          <Link
            to="/selected-works"
            onClick={() => {
              setActiveTab("/selected-works");
              setIsMenuOpen(false);
            }}
            className="block uppercase font-sohneBreit text-black font-semibold text-sm"
          >
            Selected Works
          </Link>
          <Link
            to="/about"
            onClick={() => {
              setActiveTab("/about");
              setIsMenuOpen(false);
            }}
            className="block uppercase font-sohneBreit text-black font-semibold text-sm"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => {
              setActiveTab("/contact");
              setIsMenuOpen(false);
            }}
            className="block uppercase font-sohneBreit text-black font-semibold text-sm"
          >
            Contact
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
