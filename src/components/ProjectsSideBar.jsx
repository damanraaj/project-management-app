import React from "react";
import Button from "./ui/Button";

const ProjectsSideBar = ({ onStartAdd, projectList }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-500 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAdd}>+ Add project</Button>
      </div>
      {(projectList && projectList.map((project) => <li>{project}</li>)) || (
        <ul></ul>
      )}
    </aside>
  );
};

export default ProjectsSideBar;
