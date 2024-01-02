import { useState } from "react";
import "../../css/addTask/createTask.css";
import { Input } from "../Input.jsx";
import { RegisterButton } from "../RegisterButton.jsx";
import { DropDown } from "./DropDwon.jsx";
import Tag from "../../../api/Tag.js";

const tagApi = new Tag();
function CreateTask() {
  const [taskTitle, setTaskTitle] = useState(null);
  const [taskDescription, setTaskDescription] = useState(null);
  const [taskDate, setTaskDate] = useState(null);
  const [taskTime, setTaskTime] = useState(null);
  const [selectedTagOptoin, setSelectedTagOption] = useState(null);
  const [selectedPriorityOption, setSelectedPriorityOption] = useState(null);
  const [openTagOptions, setOpenTagOptions] = useState(false);
  const [openPriorityOptions, setPriorityOptions] = useState(false);
  const [tagOptions, setTags] = useState([]);

  async function getTags() {
    let resultData = JSON.parse(await tagApi.getTags());
    if (resultData.data !== null || resultData.data !== undefined) {
      setTags(resultData.data);
    }
    console.log(resultData);
  }
  const handleOpenPriorityOptions = () => {
    setPriorityOptions((prevOptions) => !prevOptions);
    if (openTagOptions === true) {
      setOpenTagOptions(false);
    }
  };

  const handleOpenTagOptions = async () => {
    setOpenTagOptions((prevOptions) => !prevOptions);
    await getTags();
    if (openPriorityOptions === true) {
      setPriorityOptions(false);
    }
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
  const buttons = data.map((item) => {
    return <Input properties={item} />;
  });

  const priorityOptions = [
    { tag: "Low", icon: "bi bi-brightness-alt-high" },
    { tag: "Medium", icon: "bi bi-brightness-alt-high-fill" },
    { tag: "High", icon: "bi bi-brightness-high-fill" },
  ];

  const handleTaskCreation = (event) => {
    event.preventDefault();
    const data = {
      taskTitle,
      taskDescription,
      taskDate,
      taskTime,
      selectedTagOptoin,
      selectedPriorityOption,
    };
  };

  return (
    <div className="create-task-div">
      <form onSubmit={handleTaskCreation}>
        <h2>New Task </h2>
        <DropDown
          dropDownFor="Select a Tag"
          options={tagOptions}
          isOpen={openTagOptions}
          openOptions={handleOpenTagOptions}
          hangleSelectedTagOption={setSelectedTagOption}
        />
        {buttons}
        <DropDown
          dropDownFor="Priority"
          options={priorityOptions}
          openOptions={handleOpenPriorityOptions}
          isOpen={openPriorityOptions}
          handleSelectedPriorityOption={setSelectedPriorityOption}
        />
        <RegisterButton buttonFor="Create" type="submit"></RegisterButton>
      </form>
    </div>
  );
}

export { CreateTask };
