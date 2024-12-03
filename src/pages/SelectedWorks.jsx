import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { assets } from "../assets/assets";
import projects from "../assets/projectsData.json";

const SelectedWorks = () => {
  return (
    <div className="selected-works-page-wrapper relative h-[calc(90vh-9vh)] overflow-hidden">
      <div className="absolute bottom-12 left-8 flex flex-col items-start text-left w-[90vw]">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="relative flex items-center space-x-2"
          >
            <Link
              to={`/projects/${project.id}`}
              className="group flex items-center relative"
            >
              <div className="flex items-center group-hover:translate-x-8 transition-all duration-500 ease-out">
                <span className="relative flex items-center justify-center transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <FiArrowRight className="text-black h-6 w-6" />
                </span>

                <div className="overflow-hidden ml-2">
                  <span
                    className="inline-block transform translate-y-full animate-maskReveal transition-all duration-500 ease-out text-customLg font-sohne font-book leading-x-tight uppercase whitespace-nowrap"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {project.title}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedWorks;
