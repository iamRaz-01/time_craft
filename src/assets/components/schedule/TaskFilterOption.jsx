const TaskFilterOption = () => {
  return (
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
  );
};

export { TaskFilterOption };
