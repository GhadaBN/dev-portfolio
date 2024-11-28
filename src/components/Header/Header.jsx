import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <header className="absolute bottom-4 left-4 sm:left-0 md:bottom-4 md:left-4 lg:left-6 flex flex-col items-start text-left w-[90vw]">
      <div className="relative text-4xl md:text-customXl font-sohne font-book leading-tight-0.9 uppercase whitespace-nowrap flex items-center space-x-2">
        <span>GHADA</span>
        <span className="h-20 w-60 bg-customBeige inline-block"></span>
        <span>BENNASR</span>
        <Link
          to="/about"
          className="flex items-center space-x-1 group relative -top-5"
        >
          <span className="h-4 w-4 rounded-full border border-black bg-customBeige group-hover:bg-customRed"></span>
          <span className="font-sohneBreit font-semibold text-customSm uppercase ">
            About
          </span>
        </Link>
      </div>

      <div className="relative text-4xl md:text-customXl font-sohne font-book leading-tight-0.9 uppercase whitespace-nowrap flex items-center space-x-2">
        <Link
          to="/about"
          className="flex items-center space-x-1 group ml-2 relative -top-5"
        >
          <span className="font-sohneBreit font-semibold text-customSm uppercase">
            GITHUB
          </span>
          <span className="relative h-4 w-4 rounded-full border border-black bg-customBeige group-hover:bg-customRed flex items-center justify-center">
            {" "}
            <FiArrowUpRight className="text-black group-hover:text-white h-3 w-3" />
          </span>
        </Link>

        <span>CREATIVE DEVELOPER</span>
      </div>

      <div className="text-4xl md:text-customXl font-sohne leading-tight-0.9 font-book uppercase">
        <div className="flex items-center">
          <span className="relative text-customXl -top-3">+</span>
          <span className="ml-2">VISUAL DESIGNER</span>
        </div>
      </div>
      <div className="flex items-center text-4xl md:text-customXl leading-tight-0.9 font-sohne font-book uppercase whitespace-nowrap">
        <span>BASED IN BERLIN</span>
        <img
          src={assets.mars_icon}
          alt="icon"
          className="h-20 w-auto ml-4 align-middle"
        />
      </div>
    </header>
  );
};

export default Header;
