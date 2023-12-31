import "../../css/dashboard/addtask.css";
import { Input, DropDown } from "../Input";
import { RegisterButton } from "../RegisterButton";
import { useState } from "react";
import Tag from '../../../api/Tag'

function AddTask() {
  const [tag, setTag] = useState('');
  const [currentTags, setCurrentTags] = useState('');
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [priority, setPriority] = useState('');



  async function createTag(name) {
    let tag = new Tag()
    let result = await tag.createTag(name);
    console.log(result);
  }


  async function a(d) {
    if (tag === 'create One') {
      let newtag = prompt("Enter the name of the tag");
      await createTag(newtag);

    }
    setTag(d);
  };
  let data = [
    {
      type: "text",
      title: "",
      icon: "add_task",
      place: "Enter the title",
      event: setTaskName,
    },
    {
      type: "text",
      title: "",
      icon: "description",
      place: "Description",
      event: setDescription,
    },
    {
      type: "date",
      title: "",
      icon: "calendar_month",
      place: "",
      event: setDate,
    },
    {
      type: "text",
      title: "",
      icon: "timer",
      place: "  ",
      event: setTime,
    },
  ];
  const buttons = data.map((e) => {
    return <Input properties={e} />;
  });

  const priorityOptions = [
    { priority: 'Low', icon: 'bi bi-brightness-alt-high' },
    { priority: 'Medium', icon: 'bi bi-brightness-alt-high-fill' },
    { priority: 'High', icon: 'bi bi-brightness-high-fill' },
  ];
  const tagOptions = [{ tag: 'select tag' }, { tag: 'create One' }];

  return (
    <div className="create-task-div">
      <form>
        <h2>New Task </h2>
        <DropDown dropDownFor="Select Tag" options={tagOptions} event={a} />
        {buttons}
        <DropDown dropDownFor="Priority" options={priorityOptions} event={a} />
        <RegisterButton buttonFor="Create"></RegisterButton>
      </form>
    </div>
  );
}

export { AddTask };
