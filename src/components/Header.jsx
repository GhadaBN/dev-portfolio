import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <header className="absolute bottom-12 md:bottom-8 left-2 md:left-8 w-[90vw] whitespace-nowrap text-customRs md:text-7xl lg:text-customXl font-sohne uppercase font-book">
      <div className="relative flex items-center space-x-2 whitespace-nowrap">
        <div className="overflow-hidden">
          <span className="inline-block transform translate-y-full animate-maskReveal">
            GHADA
          </span>
        </div>

        <div className="flex items-center justify-center overflow-hidden">
          <span className="hidden transform translate-x-full md:block w-60 bg-customBeige h-19 animate-leftReveal"></span>
        </div>
        <div className="overflow-hidden">
          <span className="inline-block delay-500 transform translate-y-full animate-maskReveal">
            BENNASR
          </span>
        </div>
        <div className="relative hidden mb-10 overflow-hidden md:block">
          <Link
            to="/about"
            className="relative flex items-center space-x-1 delay-500 transform translate-y-full group animate-maskReveal"
          >
            <span className="w-4 h-4 border border-black rounded-full bg-customBeige group-hover:bg-customRed"></span>
            <span className="font-semibold uppercase font-sohneBreit text-customSm">
              About
            </span>
          </Link>
        </div>
      </div>

      <div className="relative flex items-center sm:space-x-0 md:space-x-2 whitespace-nowrap">
        <div className="relative hidden mb-10 overflow-hidden md:block">
          <a
            href={"https://github.com/GhadaBN"}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center ml-2 space-x-1 transform translate-y-full group animate-maskReveal delay-600"
          >
            <span className="font-semibold uppercase font-sohneBreit text-customSm">
              GITHUB
            </span>
            <span className="relative flex items-center justify-center w-4 h-4 border border-black rounded-full bg-customBeige group-hover:bg-customRed">
              {" "}
              <FiArrowUpRight className="w-3 h-3 text-black group-hover:text-white" />
            </span>
          </a>
        </div>
        <div className="ml-0 overflow-hidden md:ml-2n">
          <span className="inline-block transform translate-y-full animate-maskReveal delay-600">
            CREATIVE DEVELOPER
          </span>
        </div>
      </div>
      <div className="">
        <div className="flex items-center overflow-hidden">
          <span className="relative inline-block transform translate-y-full -top-1 md:-top-3 animate-maskReveal delay-1200">
            +
          </span>
          <span className="inline-block ml-1 delay-700 transform translate-y-full md:ml-2 animate-maskReveal">
            VISUAL DESIGNER
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-3 overflow-hidden">
        <span className="inline-block transform translate-y-full animate-maskReveal delay-800">
          BASED IN BERLIN
        </span>
        <div className="overflow-hidden h-customS md:h-customM lg:h-19 w-max-auto">
          <img
            src={assets.mars_icon}
            alt="icon"
            className="w[100%] h-[100%] transform translate-y-full animate-maskReveal delay-1200"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
