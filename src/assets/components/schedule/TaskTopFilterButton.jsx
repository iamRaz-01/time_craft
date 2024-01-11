const TaskTopFilterButton = () => {
  return (
    <>
    
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
      <div className="list-day-month-filter-button-div">
        <button className="schedule-fillter-button">
          <i class="bi bi-card-list"></i>
          <span className="filter-button-span">Incomplete</span>
        </button>
        <button className="schedule-fillter-button">
          <i class="bi bi-card-checklist"></i>
          <span className="filter-button-span">Completed</span>
        </button>
      </div>
    </>
  );
};

export {TaskTopFilterButton}
