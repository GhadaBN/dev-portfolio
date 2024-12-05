import React from "react";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";

const MoreProjects = ({ currentProjectId, projects }) => {
  const filteredProjects = projects.filter(
    (project) => project.id !== currentProjectId
  );

  return (
    <div className="more-projects-wrapper relative mt-16 left-8 text-left">
      <span className="h-4 w-4 rounded-full border border-black bg-customBeige group-hover:bg-customRed"></span>
      <h2 className="inline-block mb-8 transform translate-y-full animate-maskReveal transition-all duration-500 ease-out text-2xl font-sohneBreit font-book leading-x-tight uppercase whitespace-nowrap">
        More Projects
      </h2>
      <div className="flex flex-col space-y-6">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className="relative flex items-center">
            <Link
              to={`/projects/${project.id}`}
              className="group flex items-center relative"
            >
              <div className="flex items-center justify-between w-[90vw]">
                <div className="flex items-center group-hover:translate-x-14 transition-all duration-500 ease-out space-x-2">
                  {/* Arrow */}
                  <span className="relative flex items-center justify-center">
                    <MdArrowForward className="text-black h-20 w-20 -ml-20 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
                  </span>

                  {/* Project Title */}
                  <div className="overflow-hidden">
                    <span
                      className="inline-block transform translate-y-full animate-maskReveal transition-all duration-500 ease-out text-customM font-sohneBreit font-book leading-x-tight uppercase whitespace-nowrap"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {project.title}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center relative">
                  <div className="overflow-hidden">
                    <span
                      className={`inline-block transform translate-y-full animate-maskReveal text-center text-customM font-sohneBreit font-book leading-x-tight uppercase whitespace-nowrap transition-opacity duration-300 ease-out group-hover:opacity-0 ${
                        project.projectNumber === "01"
                          ? "pr-1 tracking-widest"
                          : "tracking-normal"
                      }`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {project.projectNumber}
                    </span>
                  </div>
                  {/* Icon */}
                  <img
                    src={project.icon}
                    alt="icon"
                    className="max-h-20 max-w-full absolute opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
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

export default MoreProjects;
