import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="relative h-[90vh] overflow-hidden flex flex-col">
      <div className="ml-6 mt-12 w-[90vw]">
        <div className="relative text-customLg font-sohne font-book leading-tight-0.9 uppercase whitespace-nowrap flex items-center space-x-2">
          <span>Have a project in mind?</span>
        </div>
        <div className="relative text-customLg font-sohne font-book leading-tight-0.9 uppercase whitespace-nowrap flex items-center space-x-2">
          <span>Or want to say hello,</span>
        </div>
        <div className="relative text-customLg font-sohne font-book leading-tight-0.9 uppercase whitespace-nowrap flex items-center space-x-2">
          <span>drop me a line.</span>
        </div>
      </div>
      <div className="flex justify-end items-center w-[90vw] mt-20 -ml-40 ">
        <div className="flex mt-10 items-start space-x-10">
          <div className="font-sohneBreit font-normal text-customSm uppercase text-left">
            <span>Contact</span>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex w-[8vw] justify-between items-center">
              <a
                href={"https://github.com/GhadaBN"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full group"
              >
                <span className="font-sohneBreit font-normal text-customSm uppercase text-left">
                  Linkedin
                </span>
                <span className="relative h-5 w-5 rounded-full border border-black bg-customBeige group-hover:bg-customRed flex items-center justify-center">
                  <FiArrowUpRight className="text-black group-hover:text-white h-3 w-3" />
                </span>
              </a>
            </div>

            <div className="flex w-[8vw] justify-between items-center">
              <a
                href={"https://github.com/GhadaBN"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full group"
              >
                <span className="font-sohneBreit font-normal text-customSm uppercase text-left">
                  Email
                </span>
                <span className="relative h-5 w-5 rounded-full border border-black bg-customBeige group-hover:bg-customRed flex items-center justify-center">
                  <FiArrowUpRight className="text-black group-hover:text-white h-3 w-3" />
                </span>
              </a>
            </div>

            <div className="flex w-[8vw] justify-between items-center">
              <a
                href={"https://github.com/GhadaBN"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full group"
              >
                <span className="font-sohneBreit font-normal text-customSm uppercase text-left">
                  github
                </span>
                <span className="relative h-5 w-5 rounded-full border border-black bg-customBeige group-hover:bg-customRed flex items-center justify-center">
                  <FiArrowUpRight className="text-black group-hover:text-white h-3 w-3" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
