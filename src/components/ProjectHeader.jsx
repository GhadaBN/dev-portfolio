import React, { useState } from "react";
import { FiPlus, FiMinus, FiArrowUpRight } from "react-icons/fi";

const ProjectHeader = ({ title, description, technology, demo }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="max-w-screen-lg my-16 mx-auto p-6">
      <div className="w-[80vw] mx-auto">
        <div className="w-[60%] mt-6 mb-16">
          <h1 className="text-left py-10 text-customXl font-sohne font-book leading-tight-0.9 uppercase">
            {title}
          </h1>
        </div>

        <div className="w-[38%]">
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
                <span className="relative h-5 w-5 rounded-full border border-black bg-customBeige group-hover:bg-customRed flex items-center justify-center">
                  <FiArrowUpRight className="text-black group-hover:text-white h-3 w-3" />
                </span>
              </a>
            </div>
          ))}
          <h2 className="text-customSm font-sohneBreit font-normal uppercase text-left border-b border-black px-2 py-2 mb-1">
            Project Information
          </h2>

          {description && (
            <div className="text-customSm font-sohneBreit font-light text-left border-b border-black px-2 py-2 mb-1">
              {description.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          )}
          <div>
            {technology?.map((tech, index) => {
              const [techTitle, techDescription] = tech.split(": ");
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
                    {openAccordion === index ? (
                      <span className="relative h-5 w-5 rounded-full border border-black bg-customPink flex items-center justify-center">
                        <FiMinus className="h-3 w-3" />
                      </span>
                    ) : (
                      <span className="relative h-5 w-5 rounded-full border border-black bg-customBeige flex items-center justify-center">
                        <FiPlus className="h-3 w-3" />
                      </span>
                    )}
                  </div>
                  {openAccordion === index && (
                    <p className="text-left text-customSm font-sohneBreit font-light">
                      {techDescription}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
