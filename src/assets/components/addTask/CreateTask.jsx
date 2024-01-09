import { useState } from "react";
import "../../css/addTask/createTask.css";
import { Input } from "../Input.jsx";
import { RegisterButton } from "../RegisterButton.jsx";
import { DropDown } from "./DropDwon.jsx";
import Tag from "../../../api/Tag.js";
import Task from "../../../api/Task.js";
import { useNavigate } from "react-router-dom";

const tagApi = new Tag();
const taskApi = new Task();
function CreateTask() {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [taskDate, setTaskDate] = useState(null);
  const [taskTime, setTaskTime] = useState(null);
  const [selectedTagOptoin, setSelectedTagOption] = useState(null);
  const [selectedPriorityOption, setSelectedPriorityOption] = useState(null);
  const [openTagOptions, setOpenTagOptions] = useState(false);
  const [openPriorityOptions, setPriorityOptions] = useState(false);
  const [tagOptions, setTags] = useState([]);
  const navigate = useNavigate();
  async function getTags() {
    let resultData = JSON.parse(await tagApi.getTags());
    if (resultData.data !== null || resultData.data !== undefined) {
      setTags(resultData.data);
    }
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
      event: setTitle,
    },
    {
      type: "text",
      title: "Enter the task description",
      icon: "description",
      place: "Description about the task",
      event: setDescription,
    },
    {
      type: "date",
      title: "Enter the task complete date",
      icon: "calendar_month",
      place: "Enter the task Date",
      event: setTaskDate,
    },
    {
      type: "number",
      title: "Enter the task time ",
      icon: "timer",
      place: "Enter the task time in mins",
      event: setTaskTime,
    },
  ];
  const buttons = data.map((item) => {
    return <Input properties={item} />;
  });

  const priorityOptions = [
    { tag_name: "Low", icon: "bi bi-brightness-alt-high" },
    { tag_name: "Medium", icon: "bi bi-brightness-alt-high-fill" },
    { tag_name: "High", icon: "bi bi-brightness-high-fill" },
  ];

  const handleTaskCreation = async (event) => {
    event.preventDefault();
    const data = {
      title,
      description,
      due_date: taskDate,
      timer: taskTime,
      tag_id: selectedTagOptoin,
      priority: selectedPriorityOption,
    };
    let result = JSON.parse(await taskApi.createTask(data));
    if (result.status === 200) {
      navigate("/schedule");
    } else {
      alert(result.error);
    }
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
