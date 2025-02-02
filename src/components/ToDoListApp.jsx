
import React, { useState } from "react";
import './ToDoListApp.css';



function ToDoListApp() {
  // State to store the tasks
  const [tasks, setTasks] = useState([]);
  // State to store the new task input
  const [newTask, setNewTask] = useState("");

  // Handle input change
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  // Add a new task
  function AddTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask(""); // Clear the input after adding the task
    }
  }

  // Delete a task
  function DeleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  // Move a task down in the list
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index + 1];
      updatedTasks[index + 1] = temp;
      setTasks(updatedTasks);
    }
  }

  // Move a task up in the list
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index - 1];
      updatedTasks[index - 1] = temp;
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="Add-Button" onClick={AddTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button
              className="deleteTask"
              onClick={() => DeleteTask(index)}
            >
              Delete
            </button>
            <button
              className="moveUpTask"
              onClick={() => moveTaskUp(index)}
            >
              ↑
            </button>
            <button
              className="moveDownTask"
              onClick={() => moveTaskDown(index)}
            >
              ↓
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoListApp;