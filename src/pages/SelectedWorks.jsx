import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { assets } from "../assets/assets";
import projects from "../assets/projectsData.json";

const SelectedWorks = () => {
  return (
    <div className="selected-works-page-wrapper relative h-[calc(90vh-9vh)] overflow-hidden">
      <div className="absolute bottom-12 left-8 flex flex-col items-start text-left w-[95vw]">
        {projects.map((project, index) => (
          <div key={project.id} className="relative flex items-center">
            <Link
              to={`/projects/${project.id}`}
              className="group flex items-center relative"
            >
              <div className="flex items-center justify-between w-[90vw] ">
                <div className="flex items-center group-hover:translate-x-14 transition-all duration-500 ease-out space-x-2">
                  {/* Arrow */}
                  <span className="relative flex items-center justify-center">
                    <FiArrowRight className="text-black h-20 w-20 -ml-20 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
                  </span>

                  {/* Project Title */}
                  <span
                    className="inline-block transform transition-all duration-500 ease-out text-customM font-sohneBreit font-book leading-x-tight uppercase whitespace-nowrap"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {project.title}
                  </span>
                </div>

                {/* 01 Text and Icon */}
                <div className="flex items-center justify-center relative">
                  {/* 01 Text */}
                  <span
                    className={`text-center text-customM font-sohneBreit font-book leading-x-tight uppercase whitespace-nowrap transition-opacity duration-300 ease-out group-hover:opacity-0 ${
                      project.projectNumber === "01"
                        ? "pr-1 tracking-widest"
                        : "tracking-normal"
                    }`}
                  >
                    {project.projectNumber}
                  </span>

                  {/* Icon */}
                  <img
                    src={assets.mars_icon}
                    alt="icon"
                    className="h-10 w-auto absolute opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                  />
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
