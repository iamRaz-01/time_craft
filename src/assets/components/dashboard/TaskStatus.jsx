import "../../css/dashboard/taskstatus.css";
import { StatusCard } from "./StatusCard";
const TaskStatus = () => {
  return (
    <div className="task-status-container">
      <div className="task-status-inside-div">
        <StatusCard
          icon="pending_actions"
          idName="pending"
          content="Pending tasks"
        />
        <StatusCard
          icon="verified"
          idName="completed"
          content="Completed Tasks"
        />
        <StatusCard
          icon="receipt_long"
          idName="yet-to-finish-today"
          content="This week tasks"
        />
      </div>
    </div>
  );
};
export { TaskStatus };
