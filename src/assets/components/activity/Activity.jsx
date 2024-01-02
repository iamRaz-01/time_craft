import "../../css/activity/activity.css";
import { NavBar } from "../bar/NavBar";
import { Header } from "../bar/Header";
import { ScheduleBodyContent } from "../schedule/ScheduleBodyContent";
const Activity = () => {
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
export { Activity };
