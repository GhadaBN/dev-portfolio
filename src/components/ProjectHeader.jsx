import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const ProjectHeader = ({ title, description, technology }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="max-w-screen-lg my-16 mx-auto p-6">
      <div className="w-[80vw] mx-auto">
        <div className="w-[60%]">
          <h1 className="py-10 text-7xl font-sohne font-book leading-tight-0.9 uppercase text-left">
            {title}
          </h1>
        </div>

        <div className="w-[40%] bg-customBg border border-black">
          <h2 className="text-lg font-sohneBreit font-semibold uppercase text-left border-b border-black px-4 py-2">
            Project Information
          </h2>

          {description && (
            <div className="text-left border-b border-black px-4 py-2">
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
                  className="border-b border-black px-4 py-2 last:border-none"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    <p className="font-sohneBreit uppercase text-lg font-medium text-left">
                      {techTitle}
                    </p>
                    {openAccordion === index ? (
                      <FiMinus className="text-xl" />
                    ) : (
                      <FiPlus className="text-xl" />
                    )}
                  </div>
                  {openAccordion === index && (
                    <p className="mt-2 text-left">{techDescription}</p>
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
