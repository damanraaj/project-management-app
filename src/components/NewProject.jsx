import React, { useRef } from "react";
import Input from "./ui/Input";

const NewProject = ({ onCancel, onSave }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const duedateRef = useRef();
  const handleOnSave = () => {
    const newproject = {
      name: titleRef.current.value,
      descriptions: descriptionRef.current.value,
      duedate: duedateRef.current.value,
    };
    onSave(newproject);
  };
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={onCancel}
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleOnSave}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label={"Project Name"} ref={titleRef} id={"title"} />
        <Input label={"Due Date"} ref={duedateRef} id={"duedate"} />
        <Input label={"Description"} ref={descriptionRef} textArea />
      </div>
    </div>
  );
};

export default NewProject;
