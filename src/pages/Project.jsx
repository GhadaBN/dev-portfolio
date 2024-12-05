import React from "react";
import { useParams } from "react-router-dom";
import projects from "../assets/projectsData.json";
import ProjectHeader from "../components/ProjectHeader";
import Boards from "../components/Boards";
import MoreProjects from "../components/MoreProjects";
const Project = () => {
  const { projectId } = useParams();

  const project = projects.find((proj) => proj.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="my-8">
      <ProjectHeader
        title={project.title}
        description={project.description}
        technology={project.technology}
        demo={project.demo}
      />
      <Boards projectBoards={project.projectBoards} />
      <MoreProjects currentProjectId={projectId} projects={projects} />
    </div>
  );
};

export default Project;
