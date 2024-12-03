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
              className="flex items-center space-x-1 group relative"
            >
              <span className="relative  flex items-center justify-center">
                <FiArrowRight className="text-black group-hover:text-white h-20 w-20" />
              </span>
              <div className="overflow-hidden">
                <span
                  className="inline-block transform translate-y-full animate-maskReveal text-customLg font-sohne font-book leading-x-tight uppercase whitespace-nowrap"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {project.title}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedWorks;
