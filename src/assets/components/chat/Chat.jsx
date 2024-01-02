import "../../css/chat/chat.css"
import { NavBar } from "../bar/NavBar";
import { Header } from "../bar/Header";
import { ScheduleBodyContent } from "../schedule/ScheduleBodyContent";
const Chat = () => {
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
  export { Chat };
  