import React from "react";

const Footer = () => {
  return (
    <footer className="hidden md:block lg:block fixed bottom-0 left-0 w-full h-14 px-8 py-8 mb-2 z-20">
      <div className="flex items-center justify-end space-x-1">
        <span className="h-5 w-5 rounded-full border border-black bg-customPink"></span>
        <span className="h-5 w-5 rounded-full border border-black  bg-customBeige"></span>
      </div>
    </footer>
  );
};

export default Footer;
