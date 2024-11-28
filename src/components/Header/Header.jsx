import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <header className="absolute bottom-4 left-4 sm:left-0 md:bottom-4 md:left-4 lg:left-6 flex flex-col items-start text-left w-[90vw]">
      <div className="relative text-4xl md:text-7.5xl font-sohne font-bold leading-tight-0.9 uppercase whitespace-nowrap">
        <span>GHADA BENNASR</span>
        <Link
          to="/about"
          className="absolute top-3 left-full ml-4 flex items-center space-x-2 group"
        >
          <span className="h-4 w-4 rounded-full border border-black bg-[#EAE4D3] group-hover:bg-customRed"></span>
          <span className="text-sm font-semibold uppercase">About</span>
        </Link>
      </div>

      <div className="text-4xl md:text-7.5xl font-sohne font-bold leading-tight-0.9 uppercase">
        <span>CREATIVE DEVELOPER</span>
      </div>
      <div className="text-4xl md:text-7.5xl font-sohne leading-tight-0.9 font-bold uppercase">
        <span>+ VISUAL DESIGNER</span>
      </div>
      <div className="flex items-center text-4xl md:text-7.5xl leading-tight-0.9 font-sohne font-bold uppercase whitespace-nowrap">
        <span>BASED IN BERLIN</span>
        <img
          src={assets.mars_icon}
          alt="icon"
          className="h-17 w-auto ml-4 align-middle"
        />
      </div>
    </header>
  );
};

export default Header;
