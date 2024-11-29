import React, { useState } from "react";

const Timer = () => {
  const [tasks, setTasks] = useState(""); // Current input value
  const [taskArray, setTaskArray] = useState([]); // Array of tasks

  const handleAddTask = () => {
    //this statement is used to not enter empty
    if (tasks.trim() !== "") {
      const newTask = { id: Date.now(), text: tasks }; // Create a task object with a unique ID
      setTaskArray([...taskArray, newTask]); // Add the new task to the array
      setTasks(""); // Clear the input field
    }
  };

  const handleDeleteTask = (id) => {
    // Filter out the task with the matching ID
    // here filter is used to create new array values
       const updatedTasks = taskArray.filter((task) => task.id !== id);
    setTaskArray(updatedTasks);
  };

  return (
    <div className="container">
      
      <div className="row d-flex flex-column  ">
      <h3>To Do Task List</h3>
        <div className="col">
          <input
            type="text"
            value={tasks}
            onChange={(e) => setTasks(e.target.value)}
          />
          <button onClick={handleAddTask} disabled={!tasks.trim()}>Add Task</button>
        </div>
        <div className="col">
          <>
            {taskArray.map((task) => (
              <div className="row" key={task.id}>
                <div className="col">
                  <span>{task.text}</span>
                </div>  
                <div className="col">
                {/* arrow fuction is used when we have paramerter
                to pass other wise wrap it in {functionName} */}
                  <button onClick={()=>handleDeleteTask(task.id)}>Delete</button>
                </div>
              </div>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default Timer;
