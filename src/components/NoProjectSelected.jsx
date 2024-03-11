import React from "react";
import noProjectImage from "../assets/no-projects.png";
import Button from "./ui/Button";

const NoProjectSelected = () => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4">
        No Project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project from the sidebar to get started or create a new one
      </p>
      <p className="mt-8">
        <Button>Create new project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;