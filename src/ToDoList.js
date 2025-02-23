import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"; // Custom Styles

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low");

  const addTask = () => {
    if (newTask.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    const newTaskObj = {
      text: newTask,
      dueDate,
      priority,
      done: false,
    };

    setTasks([...tasks, newTaskObj]);
    setNewTask("");
    setDueDate("");
    setPriority("Low");
  };

  const toggleTaskDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const sortTasksByPriority = () => {
    const sortedTasks = [...tasks].sort((a, b) => {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    setTasks(sortedTasks);
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow-lg p-4" style={{ width: "500px" }}>
        <h2 className="text-center">To-Do List</h2>

        {/* Input Group for New Task */}
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>

        {/* Due Date and Priority */}
        <div className="d-flex mb-2">
          <input
            type="date"
            className="form-control me-2"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <select
            className="form-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Add Task Button */}
        <button className="btn btn-primary w-100 mb-3" onClick={addTask}>
          Add Task
        </button>

        {/* Sort and Clear All Buttons */}
        <div className="d-flex justify-content-between">
          <button className="btn btn-secondary btn-sm" onClick={sortTasksByPriority}>
            Sort by Priority
          </button>
          <button className="btn btn-danger btn-sm" onClick={clearAllTasks}>
            Clear All
          </button>
        </div>

        {/* Task List */}
        <ul className="list-group mt-3" id="taskList">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                task.done ? "list-group-item-success" : ""
              } priority-${task.priority.toLowerCase()}`}
            >
              <div>
                <span className={task.done ? "task-done" : ""}>
                  {task.text}
                </span>
                <small className="text-muted ms-2">
                  {task.dueDate ? `Due: ${task.dueDate}` : ""}
                </small>
              </div>
              <div>
                <button
                  className={`btn btn-sm ${task.done ? "btn-warning" : "btn-success"}`}
                  onClick={() => toggleTaskDone(index)}
                >
                  {task.done ? "Undo" : "Done"}
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
