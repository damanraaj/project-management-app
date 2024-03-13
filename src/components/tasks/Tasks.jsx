import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ tasks, onAddTask }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-2">Tasks</h2>
      <NewTask />
      {tasks && tasks.length > 0 && tasks.map((task) => <p>{task}</p>)}
      {!tasks && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet
        </p>
      )}
    </section>
  );
};

export default Tasks;
