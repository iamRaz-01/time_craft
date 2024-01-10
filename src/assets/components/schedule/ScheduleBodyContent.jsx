import "../../css/schedule/scheduleBodyContent.css";
const ScheduleBodyContent = () => {
  return (
    <div className="schedule-task-div-container">
      <div className="schedule-task-inside-div">
        {/* schedule filter options */}
        <div className="schedule-filter-options-div-container">
          <div className="schedule-fileter-options-inside-div">
            <div className="list-day-month-filter-button-div">
              <button className="schedule-fillter-button">
                <i class="bi bi-list-ul"></i>
                <span className="filter-button-span">All Tasks</span>
              </button>
              <button className="schedule-fillter-button">
                <i class="bi bi-calendar2-minus"></i>
                <span className="filter-button-span">Today</span>
              </button>
              <button className="schedule-fillter-button">
                <i className="bi bi-calendar3"></i>
                <span className="filter-button-span">This week</span>
              </button>
            </div>
            <div className="complete-incomplete-filter-button-div">
              <button className="schedule-fillter-button">
                <i class="bi bi-card-list"></i>
                <span className="filter-button-span">Incomplete</span>
              </button>
              <button className="schedule-fillter-button">
                <i class="bi bi-card-checklist"></i>
                <span className="filter-button-span">Completed</span>
              </button>
            </div>
          </div>
        </div>

        <div className="task-showing-div-container">
          <div className="task-showing-inside-div-container">
            {/* task common div */}

            <div className="task-head-div-container task-data-common-div">
              <div className="task-head-inside-div task-data-common-inside-div">
                <div className="column-div">
                  <p className="task-head">Column</p>
                </div>
                <div className="column-div">
                  <p className="task-head">Task Name</p>
                </div>
                <div className="column-div">
                  <p className="task-head">Task Tag</p>
                </div>
                <div className="column-div">
                  <p className="task-head">Description</p>
                </div>
                <div className="column-div">
                  <p className="task-head">Priority</p>
                </div>
                <div className="column-div">
                  <p className="task-head">Status</p>
                </div>
                <div className="column-div">
                  <p className="task-head">Due Date</p>
                </div>
                <div className="column-div">
                  <p className="task-head">Add</p>
                </div>
              </div>
            </div>

            {/* task data div container */}

            <div className="task-data-showing-div-container">
              <div className="task-data-showing-inside-div">
                {/* task div */}
                <div className="task-data-div-container task-data-common-div">
                  <div className="task-data-inside-div">
                    <div className="column-div data-div">
                      <p className="task-data">Column</p>
                    </div>
                    <div className="column-div  data-div">
                      <p className="task-data">Task Name</p>
                    </div>
                    <div className="column-div data-div">
                      <p className="task-data">Task Tag</p>
                    </div>
                    <div className="column-div data-div">
                      <p className="task-data">Description</p>
                    </div>
                    <div className="column-div data-div">
                      <p className="task-data">Priority</p>
                    </div>
                    <div className="column-div data-div">
                      <p className="task-data">Status</p>
                    </div>
                    <div className="column-div data-div">
                      <p className="task-data">Due Date</p>
                    </div>
                    <div className="column-div data-div">
                      <p className="task-data">Add</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { ScheduleBodyContent };
