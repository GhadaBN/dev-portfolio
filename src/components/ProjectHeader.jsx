import React, { useState } from "react";
import { FiPlus, FiMinus, FiArrowUpRight } from "react-icons/fi";
const ProjectHeader = ({ title, description, technology, demo }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="lg: max-w-screen-lg my-16 mx-auto py-6">
      <div className="w-[80vw]">
        <div className="w-[100%] mt-6 mb-16 text-left overflow-hidden">
          <h1 className="py-10 inline-block text-customM font-sohneBreit font-book leading-x-tight uppercase whitespace-nowrap transform translate-y-full animate-maskReveal delay-200">
            {title}
          </h1>
        </div>
        <div className="w-[85%] flex space-x-10">
          <div className="w-[40%]">
            <h2 className="text-customSm font-sohneBreit font-normal uppercase text-left border-b border-black px-2 py-2 my-1">
              Technology Stack
            </h2>
            <div>
              {technology?.map((tech, index) => {
                const [techTitle, techDescription] = tech.split(": ");
                const isOpen = openAccordion === index;

                return (
                  <div
                    key={index}
                    className="border-b border-black px-2 py-2 my-1"
                  >
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleAccordion(index)}
                    >
                      <p className="font-sohneBreit uppercase text-customSm font-normal text-left">
                        {techTitle}
                      </p>
                      <span
                        className={`relative h-5 w-5 rounded-full border border-black flex items-center justify-center transform transition-all duration-500 ease-in-out ${
                          isOpen
                            ? "bg-customPink rotate-180"
                            : "bg-customBeige rotate-0"
                        }`}
                      >
                        {isOpen ? (
                          <FiMinus className="h-3 w-3 transition-colors duration-400 ease-in-out" />
                        ) : (
                          <FiPlus className="h-3 w-3 transition-colors duration-400 ease-in-out" />
                        )}
                      </span>
                    </div>
                    <div
                      className={`overflow-hidden transition-[max-height] duration-1000 ease-in-out`}
                      style={{
                        maxHeight: isOpen ? "500px" : "0",
                      }}
                    >
                      <p className="text-left text-customSm font-sohneBreit font-light mt-2">
                        {techDescription}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-[45%]">
            {demo?.map((link, index) => (
              <div key={index} className="border-b border-black px-2 py-2 my-1">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full group"
                >
                  <h2 className="font-sohneBreit font-normal text-customSm uppercase text-left">
                    Demo Website
                  </h2>
                  <span className="relative h-5 w-5 rounded-full border border-black bg-customBeige group-hover:bg-customRed flex items-center justify-center transition-colors duration-500 ease-in-out">
                    <FiArrowUpRight className="text-black group-hover:text-white h-3 w-3 transition-colors duration-500 ease-in-out" />
                  </span>
                </a>
              </div>
            ))}
            <h2 className="text-customSm font-sohneBreit font-normal uppercase text-left border-b border-black px-2 py-2 mb-1">
              Project Information
            </h2>

            {description && (
              <div className="text-customSm font-sohneBreit font-light text-left px-2 py-2 mb-1">
                {description.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
