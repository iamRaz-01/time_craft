import { TaskStatus } from "./dashboard/TaskStatus.jsx";
import { AddTask } from "./dashboard/AddTask.jsx";

const HomeBodyContent = ({ contentLayout }) => {
  const homeContentLayouts = [
    <TaskStatus key="taskStatus" />,
    <AddTask key="addTask" />,
  ];

  return (
    <div id="home-body-div-container">{homeContentLayouts[contentLayout]}</div>
  );
};

export { HomeBodyContent };
