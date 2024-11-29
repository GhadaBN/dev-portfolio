import React from "react";
import { useParams } from "react-router-dom";
import projects from "../../assets/projectsData.json";
import Boards from "../../components/Boards";
const Project = () => {
  const { projectId } = useParams();

  const project = projects.find((proj) => proj.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "85vw", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "1rem" }}>{project.title}</h1>
      <div>
        {project.description.map((desc, index) => (
          <p key={index} style={{ marginBottom: "1rem" }}>
            {desc}
          </p>
        ))}
      </div>
      <Boards projectBoards={project.projectBoards} />
    </div>
  );
};

export default Project;
