import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  const obfuscateEmail = () => {
    const email = "contact.ghadabennasr[at]gmail[dot]com"
      .replace("[at]", "@")
      .replace("[dot]", ".");
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="relative h-auto overflow-hidden flex flex-col">
      <div className="ml-8 mt-12 w-[90vw]">
        <div className="relative text-customLg font-sohne font-book leading-x-tight uppercase whitespace-nowrap flex items-center">
          <div className="overflow-hidden">
            <span className="inline-block transform translate-y-full animate-maskReveal delay-100">
              Have a project in mind?
            </span>
          </div>
        </div>
        <div className="relative text-customLg font-sohne font-book leading-x-tight uppercase whitespace-nowrap flex items-center">
          <div className="overflow-hidden">
            <span className="inline-block transform translate-y-full animate-maskReveal delay-200">
              Or want to say hello,
            </span>
          </div>
        </div>
        <div className="relative text-customLg font-sohne font-book leading-x-tight uppercase whitespace-nowrap flex items-center">
          <div className="overflow-hidden">
            <span className="inline-block transform translate-y-full animate-maskReveal delay-300">
              drop me a line.
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center w-[80vw] mt-10 pr-5">
        <div className="flex mt-10 items-start space-x-10">
          <div className="overflow-hidden">
            <div className="font-sohneBreit font-normal text-customSm uppercase text-left transform translate-x-full animate-leftReveal delay-600">
              <span className="">Contact</span>
            </div>
          </div>
          <div className="flex flex-col space-y-2 overflow-hidden">
            <div className="flex w-[8vw] justify-between items-center transform translate-x-full animate-leftReveal delay-1200">
              <a
                href={"https://www.linkedin.com/in/ghadabennasr/"}
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

            <div className="flex w-[8vw] justify-between items-center transform translate-x-full animate-leftReveal delay-1200">
              <a
                href="#"
                onClick={obfuscateEmail}
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

            <div className="flex w-[8vw] justify-between items-center transform translate-x-full animate-leftReveal delay-1200">
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
