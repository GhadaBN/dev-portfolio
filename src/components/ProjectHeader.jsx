import React from "react";

const ProjectHeader = ({ title, description }) => {
  return (
    <div>
      <h1 className="py-10 text-customXl font-sohne font-book leading-tight-0.9 uppercase ">
        {title}
      </h1>
      <div>
        {description?.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
    </div>
  );
};

export default ProjectHeader;
