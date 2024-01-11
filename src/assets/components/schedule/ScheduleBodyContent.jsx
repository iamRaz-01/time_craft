import "../../css/schedule/scheduleBodyContent.css";
import { TaskSearchInput } from "./TaskSearchInput";
import { TaskFilterOption } from "./TaskFilterOption";
import { TaskData } from "./TaskData";
import { TaskTopFilterButton } from "./TaskTopFilterButton";
const ScheduleBodyContent = () => {
  return (
    <div className="schedule-task-div-container">
      <div className="schedule-task-inside-div">
        {/* schedule filter options */}
        <div className="schedule-filter-options-div-container">
          <div className="schedule-fileter-options-inside-div">
            <div className="task-filter-type-div-container">
              <div className="task-filter-type-inside-div">
                <TaskTopFilterButton />
              </div>
            </div>

            <div className="search-bar-task-filter-div-container">
              <div className="search-bar-task-filter-inside-div">
                {/* Search bar */}

                <TaskSearchInput />

                {/* Filter option */}
                <TaskFilterOption />
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
                <TaskData />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { ScheduleBodyContent };
