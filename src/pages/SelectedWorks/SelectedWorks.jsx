import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { assets } from "../../assets/assets";
import projects from "../../assets/projectsData.json";

const SelectedWorks = () => {
  return (
    <div className="selected-works-page-wrapper relative h-[80vh]">
      <div className="absolute bottom-4 left-4 sm:left-0 md:bottom-4 md:left-4 lg:left-6 flex flex-col items-start text-left w-[90vw]">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative text-4xl md:text-customXl font-sohne font-book leading-tight-0.9 uppercase whitespace-nowrap flex items-center space-x-2"
          >
            <Link
              to={`/projects/${project.id}`}
              className="flex items-center space-x-1 group relative -top-5"
            >
              <span>{project.title}</span>
              <span className="relative h-4 w-4 rounded-full border border-black bg-customBeige group-hover:bg-customRed flex items-center justify-center">
                <FiArrowUpRight className="text-black group-hover:text-white h-3 w-3" />
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedWorks;
