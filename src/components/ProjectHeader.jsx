import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const ProjectHeader = ({ title, description, technology }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6 flex">
      <h1 className="w-[80vw] py-10 text-customXl font-sohne font-book leading-tight-0.9 uppercase">
        {title}
      </h1>
      <div className="w-[35vw] bg-customBg border border-black px-4 py-2">
        <h2 className="text-lg font-sohneBreit font-semibold mb-4 uppercase">
          Project Information
        </h2>
        {description && (
          <div className="mb-8">
            {description.map((desc, index) => (
              <p key={index} className="mb-2">
                {desc}
              </p>
            ))}
          </div>
        )}

        <div>
          <div>
            {technology?.map((tech, index) => {
              const [techTitle, techDescription] = tech.split(": ");
              return (
                <div key={index} className="border-b border-black mb-4 pb-4">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    <p className="text-lg font-medium">{techTitle}</p>
                    {openAccordion === index ? (
                      <FiMinus className="text-xl" />
                    ) : (
                      <FiPlus className="text-xl" />
                    )}
                  </div>

                  {openAccordion === index && (
                    <p className="text-gray-700 mt-2">{techDescription}</p>
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
