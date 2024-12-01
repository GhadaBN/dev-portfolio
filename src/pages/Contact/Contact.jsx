import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="relative h-[calc(90vh-50vh)] overflow-hidden">
      <div className="absolute left-4 sm:left-0 md:bottom-8 md:left-4 lg:left-6 w-[90vw]">
        <div className="relative text-4xl md:text-customXl font-sohne font-book leading-tight-0.9 uppercase whitespace-nowrap flex items-center space-x-2">
          <span>Have a project in mind?</span>
        </div>
        <div className="relative text-4xl md:text-customXl font-sohne font-book leading-tight-0.9 uppercase whitespace-nowrap flex items-center space-x-2">
          <span>Or want to say hello,</span>
        </div>
        <div className="relative text-4xl md:text-customXl font-sohne font-book leading-tight-0.9 uppercase whitespace-nowrap flex items-center space-x-2">
          <span>drop me a line.</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
