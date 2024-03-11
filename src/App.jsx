import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSideBar";

function App() {
  const [projects, setProjects] = useState({
    selected: false,
    projectList: [],
  });

  const handleUnselectProject = () => {
    setProjects((prevState) => {
      return {
        ...prevState,
        selected: false,
      };
    });
  };
  const handleShowNewProject = () => {
    setProjects((prevState) => {
      return {
        ...prevState,
        selected: "new",
      };
    });
  };

  const handleAddNewProject = (project) => {
    setProjects((prevState) => {
      return {
        ...prevState,
        projectList: [...prevState.projectList, project],
      };
    });
  };
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onStartAdd={handleShowNewProject} />
      {!projects.selected && (
        <NoProjectSelected onStartAdd={handleShowNewProject} />
      )}
      {projects.selected == "new" && (
        <NewProject
          onCancel={handleUnselectProject}
          onSave={handleAddNewProject}
        />
      )}
    </main>
  );
}

export default App;
