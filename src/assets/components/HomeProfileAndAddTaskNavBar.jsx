import "bootstrap-icons/font/bootstrap-icons.css";

const HomeProfileAndAddTaskNavBar = () => {
  return (
    <div id="Home-page-profile-and-add-task-navbar">
      <div className="home-page-profile-and-add-task-inside-div">
        {/* Add task */}

        <div className="add-task-div-container">
          <div className="add-task-inside-div">
            <button id="add-task-button">
              <span>+</span> <span>Add Task</span>
            </button>
          </div>
        </div>

        {/* Time, Notificaiton and Profile div */}
        <div className="time-notification-and-profile-div-container">
          <div className="time-notification-and-profile-inside-div">
            {/* Timer div */}

            <div className="timer-div-container">
              <div className="timer-inside-div">
                <button id="timer-button">
                  <span>
                    <i class="bi bi-hourglass-split"></i>
                  </span>
                  <span>10.11 AM</span>
                </button>
              </div>
            </div>

            {/* Notification Div */}

            <div className="notification-div-container">
              <div className="notification-inside-div">
                <button id="notification-button">
                  <span>
                    <i class="bi bi-bell"></i>
                  </span>
                  <span>Notification</span>
                </button>
              </div>
            </div>

            {/* Profile div */}

            <div className="user-profile-div">
              <div className="user-profile-inside-div">
                {/* <img src="" alt="user-profile-image" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomeProfileAndAddTaskNavBar };
