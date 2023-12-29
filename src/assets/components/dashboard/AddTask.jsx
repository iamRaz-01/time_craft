import { useState } from "react";
import "../../css/dashboard/addtask.css";
import { Input, DropDown } from "../Input";
import { RegisterButton } from "../RegisterButton";

function AddTask() {
  const [taskTitle, setTaskTitle] = useState(null);
  const [taskDescription, setTaskDescription] = useState(null);
  const [taskDate, setTaskDate] = useState(null);
  const [taskTime, setTaskTime] = useState(null);

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
    { priority: "Low", icon: "bi bi-brightness-alt-high" },
    { priority: "Medium", icon: "bi bi-brightness-alt-high-fill" },
    { priority: "High", icon: "bi bi-brightness-high-fill" },
  ];

  const tagOptions = ["New tag"];

  const handleTaskCreation = (event) => {
    event.preventDefault();

    const tagValue = event.target.elements.tagDropdown.value;
    const priorityValue = event.target.elements.priorityDropdown.value;

    console.log(
      `${taskTitle}  ${taskDescription} ${taskDate} ${taskTime} ${tagValue} ${priorityValue}`
    );
  };

  return (
    <div className="create-task-div">
      <form onSubmit={handleTaskCreation}>
        <h2>New Task </h2>
        <DropDown
          name="tagDropdown"
          dropDownFor="Select Tag"
          options={tagOptions}
        />
        {buttons}
        <DropDown
          name="priorityDropdown"
          dropDownFor="Priority"
          options={priorityOptions}
        />
        <RegisterButton buttonFor="Create" type="submit"></RegisterButton>
      </form>
    </div>
  );
}

export { AddTask };
