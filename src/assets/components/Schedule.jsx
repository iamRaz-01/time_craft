const Schedule = () => {
  return (
    <div className="schedule-task-div-container">
      <div className="schedule-task-inside-div">
        {/* schedule filter options */}
        <div className="schedule-filter-options-div-container">
          <div className="schedule-fileter-options-inside-div">
            <button>List</button>
            <button>Week</button>
            <button>Day</button>
            <select id="taskStatus">
              <option value="incompleted">Incompleted</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        <div className="task-showing-div-container">
          <div className="task-showing-inside-div-container">
            {/* task div */}
            <div className="task-div">
              <div className="task-inside-div"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Schedule };
