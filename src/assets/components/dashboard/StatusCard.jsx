import "../../css/dashboard/taskstatus.css";
function StatusCard({ icon, idName, content }) {
  return (
    <div className="status-card">
      <div className="task-card-icons-div">
        <span class="material-symbols-outlined" id={idName}>
          {icon}
        </span>
      </div>
      <div className="status-content">
        <h1>30</h1>
        <h3>{content} </h3>
      </div>
    </div>
  );
}
export { StatusCard };
