import { NavBar } from "../bar/NavBar";
import { Header } from "../bar/Header";
import { CreateTask } from "./CreateTask";
import "../../css/addTask/addTask.css";

const AddTask = () => {
  return (
    <div id="add-task-div-container">
      <NavBar />
      <div className="home-nav-and-body-content-div">
        <Header />
        <CreateTask />
      </div>
    </div>
  );
};

export { AddTask };
