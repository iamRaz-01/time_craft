import { useState } from "react";
import "../../css/dashboard/addtask.css";
import { Input } from "../Input";
import { RegisterButton } from "../RegisterButton";
import { DropDown } from "../DropDwon.jsx";

function AddTask() {
  const [taskTitle, setTaskTitle] = useState(null);
  const [taskDescription, setTaskDescription] = useState(null);
  const [taskDate, setTaskDate] = useState(null);
  const [taskTime, setTaskTime] = useState(null);
  const [openTagOptions, setOpenTagOptions] = useState(false);
  const [openPriorityOptions, setPriorityOptions] = useState(false);

  const handleOpenPriorityOptions = () => {
    setPriorityOptions((prevOptions) => !prevOptions);
  };

  const handleOpenTagOptions = () => {
    setOpenTagOptions((prevOptions) => !prevOptions);
  };
  let data = [
    {
      type: "text",
      title: "Enter the task title",
      icon: "add_task",
      place: "Enter task title",
      event: setTaskTitle,
    },
    {
      type: "text",
      title: "Enter the task description",
      icon: "description",
      place: "Description about the task",
      event: setTaskDescription,
    },
    {
      type: "date",
      title: "Enter the task complete date",
      icon: "calendar_month",
      place: "Enter the task Date",
      event: setTaskDate,
    },
    {
      type: "time",
      title: "Enter the task time",
      icon: "timer",
      place: "Enter the task time",
      event: setTaskTime,
    },
  ];
  const buttons = data.map((e) => {
    return <Input properties={e} />;
  });

  const priorityOptions = [
    { tag: "Low", icon: "bi bi-brightness-alt-high" },
    { tag: "Medium", icon: "bi bi-brightness-alt-high-fill" },
    { tag: "High", icon: "bi bi-brightness-high-fill" },
  ];

  const tagOptions = [];

  const handleTaskCreation = (event) => {
    event.preventDefault();

    console.log(`${taskTitle}  ${taskDescription} ${taskDate} ${taskTime}`);
  };

  return (
    <div className="create-task-div">
      <form onSubmit={handleTaskCreation}>
        <h2>New Task </h2>
        <DropDown
          dropDownFor="Select Tag"
          options={tagOptions}
          isOpen={openTagOptions}
          openOptions={handleOpenTagOptions}
        />
        {buttons}
        <DropDown
          dropDownFor="Priority"
          options={priorityOptions}
          openOptions={handleOpenPriorityOptions}
          isOpen={openPriorityOptions}
        />
        <RegisterButton buttonFor="Create" type="submit"></RegisterButton>
      </form>
    </div>
  );
}

export { AddTask };
