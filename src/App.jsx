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

  const handleSelectProject = (projectid) => {
    setProjects((prevState) => {
      return {
        ...prevState,
        selected: projectid,
      };
    });
  };
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar
        onStartAdd={handleShowNewProject}
        onSelectProject={handleSelectProject}
        projectList={projects.projectList}
        selectedProject={projects.selected}
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
        <ProjectDetails
          project={projects.projectList.find((p) => p.id === projects.selected)}
        />
      )}
    </main>
  );
}

export default App;
