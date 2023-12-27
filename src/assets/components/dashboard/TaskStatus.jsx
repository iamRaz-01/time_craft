import "../../css/dashboard/taskstatus.css";
import { StatusCard } from "./StatusCard";
function TaskStatus() {
  return (
    <div className="task-status-container">
      <div className="task-status-inside-div">
        <StatusCard icon="pending_actions" idName="pending" />
        <StatusCard icon="verified" idName="completed" />
        <StatusCard icon="receipt_long" idName="yet-to-finish-today" />
      </div>
    </div>
  );
}
export { TaskStatus };
