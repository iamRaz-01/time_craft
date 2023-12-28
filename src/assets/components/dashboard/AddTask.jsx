import "../../css/dashboard/addtask.css";
import { Input, DropDown } from "../Input";
import { RegisterButton } from "../RegisterButton";

function AddTask() {
  const a = () => {
    alert("hi");
  };
  console.log(sessionStorage.getItem('token'))
  let data = [
    {
      type: "text",
      title: "",
      icon: "add_task",
      place: "Enter the title",
      event: a,
    },
    {
      type: "text",
      title: "",
      icon: "description",
      place: "Description",
      event: a,
    },
    {
      type: "date",
      title: "",
      icon: "calendar_month",
      place: "",
      event: a,
    },
    {
      type: "text",
      title: "",
      icon: "timer",
      place: "  ",
      event: a,
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
  const tagOptions = ["New tag"]
  return (
    <div className="create-task-div">
      <form>
        <h2>New Task </h2>
        <DropDown dropDownFor="Select Tag" options={tagOptions} />
        {buttons}
        <DropDown dropDownFor="Priority" options={priorityOptions} />
        <RegisterButton buttonFor="Create"></RegisterButton>
      </form>
    </div>
  );
}

export { AddTask };
