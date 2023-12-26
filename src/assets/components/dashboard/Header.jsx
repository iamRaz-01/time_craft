import "../../css/dashboard/header.css";
import { Taskbutton } from "./Taskbutton";

const Header = ({ onContentChange }) => {
  const handleHomeBodyContentChage = () => {
    onContentChange();
  };
  return (
    <div className="header">
      <Taskbutton
        icon="add"
        text="Add Task"
        onContentChange={handleHomeBodyContentChage}
      />

      <div className="profile-div">
        <div className="time">
          <p>10 : 00 pm</p>
        </div>
        <Taskbutton
          icon="notifications"
          text="Notifications"
          onContentChange={handleHomeBodyContentChage}
        />
        <div className="profile-icon">
          <span className="material-symbols-outlined ">badge</span>
        </div>
      </div>
    </div>
  );
};
export { Header };
