import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSideBar";
import ProjectDetails from "./components/ProjectDetails";

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

  const handleSelectProject = (project) => {
    setProjects((prevState) => {
      return {
        ...prevState,
        selected: project,
      };
    });
  };
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar
        onStartAdd={handleShowNewProject}
        onSelectProject={handleSelectProject}
        projectList={projects.projectList}
      />
      {!projects.selected && (
        <NoProjectSelected onStartAdd={handleShowNewProject} />
      )}
      {projects.selected == "new" && (
        <NewProject
          onCancel={handleUnselectProject}
          onSave={handleAddNewProject}
        />
      )}
      {projects.selected && projects.selected !== "new" && (
        <ProjectDetails project={projects.projectList[0]} />
      )}
    </main>
  );
}

export default App;
