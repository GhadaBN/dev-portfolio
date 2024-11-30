import React from "react";
import { useParams } from "react-router-dom";
import projects from "../../assets/projectsData.json";
import ProjectHeader from "../../components/ProjectHeader";
import Boards from "../../components/Boards";
const Project = () => {
  const { projectId } = useParams();

  const project = projects.find((proj) => proj.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div classeName="my-8">
      <ProjectHeader
        title={project.title}
        description={project.description}
        technology={project.technology}
      />
      <Boards projectBoards={project.projectBoards} />
    </div>
  );
};

export default Project;
