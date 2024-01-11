const TaskData = () => {
  return (
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
  );
};

export { TaskData };
