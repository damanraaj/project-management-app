import React from "react";
import Button from "./ui/Button";

const ProjectsSideBar = ({
  onSelectProject,
  onStartAdd,
  projectList,
  selectedProject,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-500 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAdd}>+ Add project</Button>
      </div>
      {projectList &&
        projectList.map((project) => {
          let btnCssClass =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedProject) {
            btnCssClass += " bg-stone-800 text-stone-200";
          } else {
            btnCssClass += " text-stone-400";
          }
          return (
            <ul key={project.id} className="mt-8">
              <button
                onClick={onSelectProject.bind(null, project.id)}
                className={btnCssClass}
              >
                {project.name}
              </button>
            </ul>
          );
        })}
    </aside>
  );
};

export default ProjectsSideBar;
