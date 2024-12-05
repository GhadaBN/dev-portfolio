import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { assets } from "../assets/assets";

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 max-w-[95%] w-full my-6 z-20 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FBFBF6] bg-opacity-100 rounded-full shadow-sm  py-2 px-8"
          : "bg-transparent rounded-none shadow-none text-black"
      }`}
    >
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
            className={`nav-link uppercase font-sohneBreit font-semibold text-sm text-inherit ${
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
            className={`nav-link uppercase font-sohneBreit text-inherit font-semibold text-sm ${
              activeTab === "/about" ? "text-customGrey" : "text-black"
            }`}
          >
            About
          </Link>
          <Link
            onClick={() => setActiveTab("/contact")}
            to="/contact"
            className={`nav-link uppercase font-sohneBreit text-inherit font-semibold text-sm ${
              activeTab === "/contact" ? "text-customGrey" : "text-black"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
