import React from "react";
import "./ShowOutput.css";

const ShowOutput = (props) => {

  const renderTasks = props.tasks.map((task) => {
    // return <li>{task.task}</li>;
    return (
      <div className="taskList">
        <li>{task.task}</li>
      </div>
    );
  });

  return <div>{renderTasks}</div>;
};

export default ShowOutput;
