import "../../css/dashboard/taskstatus.css";
function StatusCard(props) {
  return (
    <div className="status-card">
      <div>
        <span class="material-symbols-outlined">{props.icon}</span>
      </div>
      <div className="status-content">
        <h1>30</h1>
        <h3>Tasks Completed today </h3>
      </div>
    </div>
  );
}
export { StatusCard };
