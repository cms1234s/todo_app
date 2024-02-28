import React, { useState } from "react";

const AddToDo = (props) => {

//on data change in input field
  const [enteredTask, setEnteredTask] = useState("");

  const taskChangeHandler = (e) => {
    setEnteredTask(e.target.value);
  };

  //on Form Submit
  const submitHandler = (event) => {
    event.preventDefault();

    //storing enteredTask value in a variable******

    const taskData = {
        id: Math.random(),
        task: enteredTask
    };
    // const taskData = enteredTask;

    ///function call in App.jsx******
    props.onSaveTaskData(taskData);
    
    // resetting input field value to null******
    setEnteredTask('');
  } 

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter task"
          value={enteredTask}
          onChange={taskChangeHandler}
        />
        <br></br>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddToDo;
