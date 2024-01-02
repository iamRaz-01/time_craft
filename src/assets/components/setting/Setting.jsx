import "../../css/setting/setting.css";
import { NavBar } from "../bar/NavBar";
import { Header } from "../bar/Header";
import { ScheduleBodyContent } from "../schedule/ScheduleBodyContent";
const Setting = () => {
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
export { Setting };
