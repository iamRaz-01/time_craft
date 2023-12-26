import "../../css/dashboard/taskstatus.css";
import { StatusCard } from "./StatusCard";
function TaskStatus() {
  return (
    <div className="task-status-container">
      <div className="task-status-inside-div">
        <StatusCard icon="pending_actions" />
        <StatusCard icon="verified" />
        <StatusCard icon="receipt_long" />
      </div>
    </div>
  );
}
export { TaskStatus };
