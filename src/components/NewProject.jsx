import React, { useRef } from "react";
import Input from "./ui/Input";
import Modal from "./ui/Modal";

const NewProject = ({ onCancel, onSave }) => {
  const modalRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const duedateRef = useRef();
  const handleOnSave = () => {
    const title = titleRef.current.value.trim();
    const description = descriptionRef.current.value.trim();
    const duedate = duedateRef.current.value.trim();
    if (!title || !description || !duedate) {
      modalRef.current.open();
      return;
    }
    const newproject = {
      id: Math.random(),
      name: title,
      description,
      duedate,
    };
    onSave(newproject);
    onCancel();
  };
  return (
    <>
      <Modal ref={modalRef} btnCaption={"OK"}>
        <h2 className="text-xl">Invalid Input</h2>
        <p className="text-stone-600">Please check your input.</p>
      </Modal>
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
          <Input
            type="date"
            label={"Due Date"}
            ref={duedateRef}
            id={"duedate"}
          />
          <Input label={"Description"} ref={descriptionRef} textArea />
        </div>
      </div>
    </>
  );
};

export default NewProject;
