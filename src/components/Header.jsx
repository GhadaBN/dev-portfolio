import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <header className="absolute bottom-8 left-8 w-[90vw]">
      <div className="relative text-4xl md:text-customXl font-sohne font-book leading-x-tight uppercase whitespace-nowrap flex items-center space-x-2">
        <div className="overflow-hidden">
          <span className="inline-block transform translate-y-full animate-maskReveal">
            GHADA
          </span>
        </div>
        <div className="overflow-hidden flex items-center">
          <span className="w-60 bg-customBeige h-19 transform translate-x-full animate-leftReveal"></span>
        </div>
        <div className="overflow-hidden">
          <span className="inline-block transform translate-y-full animate-maskReveal delay-500">
            BENNASR
          </span>
        </div>
        <div className="overflow-hidden relative mb-10">
          <Link
            to="/about"
            className="flex items-center space-x-1 group relative transform translate-y-full animate-maskReveal delay-500"
          >
            <span className="h-4 w-4 rounded-full border border-black bg-customBeige group-hover:bg-customRed"></span>
            <span className="font-sohneBreit font-semibold text-customSm uppercase">
              About
            </span>
          </Link>
        </div>
      </div>

      <div className="relative text-4xl md:text-customXl font-sohne font-book leading-x-tight uppercase whitespace-nowrap flex items-center space-x-2">
        <div className="overflow-hidden relative mb-10">
          <a
            href={"https://github.com/GhadaBN"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 group ml-2 relative transform translate-y-full animate-maskReveal delay-600"
          >
            <span className="font-sohneBreit font-semibold text-customSm uppercase">
              GITHUB
            </span>
            <span className="relative h-4 w-4 rounded-full border border-black bg-customBeige group-hover:bg-customRed flex items-center justify-center">
              {" "}
              <FiArrowUpRight className="text-black group-hover:text-white h-3 w-3" />
            </span>
          </a>
        </div>
        <div className="overflow-hidden">
          <span className="inline-block transform translate-y-full animate-maskReveal delay-600">
            CREATIVE DEVELOPER
          </span>
        </div>
      </div>
      <div className="text-4xl md:text-customXl font-sohne leading-x-tight font-book uppercase">
        <div className="flex items-center overflow-hidden">
          <span className="relative text-customXl -top-3 inline-block transform translate-y-full animate-maskReveal delay-1200">
            +
          </span>
          <span className="ml-2 inline-block transform translate-y-full animate-maskReveal delay-700">
            VISUAL DESIGNER
          </span>
        </div>
      </div>
      <div className="flex items-center text-4xl md:text-customXl leading-x-tight font-sohne font-book uppercase whitespace-nowrap overflow-hidden">
        <span className="inline-block transform translate-y-full animate-maskReveal delay-800">
          BASED IN BERLIN
        </span>
        <div className="overflow-hidden ml-4">
          <img
            src={assets.mars_icon}
            alt="icon"
            className="h-19 w-auto transform translate-y-full animate-maskReveal delay-800"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
