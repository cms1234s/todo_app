import React, { useState } from "react";
import AddToDo from "./components/AddToDo";
import ShowOutput from "./components/ShowOutput";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const onSaveTaskData = (taskList) => {
    setTasks((prevState) => [...prevState, taskList]);
  };
  console.log(tasks);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <hr></hr>
      <AddToDo
        onSaveTaskData={onSaveTaskData}
      />
      <hr></hr>
      <div className="taskListWrapper">

      <ShowOutput tasks = {tasks}/>
      </div>
      {/* <div>{tasks.map((task)=><li>{task}</li>)}</div> */}
      {/* test */}
    </div>
  );
};

export default App;
