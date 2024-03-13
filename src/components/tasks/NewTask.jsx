import React, { useRef } from "react";

const NewTask = ({ onAddTask }) => {
  const taskRef = useRef();
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        ref={taskRef}
      />
      <button
        onClick={() => onAddTask(taskRef.current.value)}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
