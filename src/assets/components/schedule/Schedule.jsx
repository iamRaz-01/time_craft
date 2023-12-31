import "../../css/schedule/schedule.css";
import { ScheduleBodyContent } from "./ScheduleBodyContent";
import { NavBar } from "../bar/NavBar";
import { Header } from "../bar/Header";
const Schedule = () => {
  return (
    <div id="schedule-task-div-container">
      <NavBar />
      <div className="home-nav-and-body-content-div">
        <Header />
        <ScheduleBodyContent />
      </div>
    </div>
  );
};
export { Schedule };
