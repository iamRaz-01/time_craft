// Header.jsx
import { useState } from "react";
import "../../css/bar/header.css";
import { Taskbutton } from "./Taskbutton";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isAddTaskMode, setIsAddTaskMode] = useState(true);
  const [addTaskIcon, setAddTaskIcon] = useState("add");
  const navigate = useNavigate();

  const handleToggleMode = () => {
    setIsAddTaskMode((prevMode) => !prevMode);
    setAddTaskIcon(isAddTaskMode ? "arrow_back" : "add");

    if (addTaskIcon === "add") {
      navigate("/addTask");
    }
  };

  return (
    <div className="header">
      <Taskbutton
        icon={addTaskIcon}
        text={isAddTaskMode ? "Add Task" : "Go Back"}
        onContentChange={handleToggleMode}
      />

      <div className="profile-div">
        <div className="time">
          <p>10 : 00 pm</p>
        </div>
        <Taskbutton icon="notifications" text="Notifications" />
        <div className="profile-icon">
          <span className="material-symbols-outlined">badge</span>
        </div>
      </div>
    </div>
  );
};

export { Header };
