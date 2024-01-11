import "../../css/schedule/scheduleBodyContent.css";
const ScheduleBodyContent = () => {
  return (
    <div className="schedule-task-div-container">
      <div className="schedule-task-inside-div">
        {/* schedule filter options */}
        <div className="schedule-filter-options-div-container">
          <div className="schedule-fileter-options-inside-div">
            {/*  */}
            <div className="task-filter-type-div-container">
              <div className="task-filter-type-inside-div">
                {/* Task types */}
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

                {/* Complete and Incomplete */}
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

            <div className="search-bar-task-filter-div-container">
              <div className="search-bar-task-filter-inside-div">
                {/* Search bar */}

                <div className="task-search-div-container">
                  <div className="task-search-input-inside-div">
                    <svg
                      className="task-search-icon"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                    >
                      <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                      </g>
                    </svg>
                    <input
                      placeholder="Search"
                      type="search"
                      id="task-search-input"
                    />
                  </div>
                </div>

                {/* Filter option */}
                <div className="filter-div-container">
                  <div className="filter-inside-div">
                    {/* filter icons and cotent div */}

                    <div className="filter-icon-content-div-container">
                      <div className="filter-icon-content-inside-div">
                        <i className="bi bi-sort-down"></i>
                        <span className="fiter-span">Filter</span>
                      </div>
                    </div>

                    {/* filter down arrow function div */}

                    <div className="filter-arrow-div-container">
                      <div className="filter-arrow-inside-div">
                        <i className="bi bi-chevron-down"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
