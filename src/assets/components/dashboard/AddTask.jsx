import "../../css/dashboard/addtask.css";
import { Input, DropDown } from "../Input";
import { RegisterButton } from "../RegisterButton";

function AddTask() {
  const a = () => {
    alert("hi");
  };
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
  let buttons = data.map((e) => {
    return <Input properties={e} />;
  });

  return (
    <div className="create-task-div">
      <form>
        <h2>New Task </h2>
        {buttons}
        <DropDown />
        <DropDown />
        <RegisterButton buttonFor="Create"></RegisterButton>
      </form>
    </div>
  );
}

export { AddTask };
