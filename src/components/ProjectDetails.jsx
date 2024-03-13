import React from "react";
import Tasks from "./tasks/Tasks";

const ProjectDetails = ({ project, onDelete }) => {
  const fmtDate = new Date(project.duedate).toLocaleString("en-in", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600">{project.name}</h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete.bind(null, project.id)}
          >
            Delete
          </button>
        </div>
        <p className="text-stone-400 mb-4">{fmtDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks tasks={project.tasks} />
    </div>
  );
};

export default ProjectDetails;
