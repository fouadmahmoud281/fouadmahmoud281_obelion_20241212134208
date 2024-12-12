import React, { useState } from 'react';
import './TaskList.css';

function TaskList() {
  const [taskName, setTaskName] = useState('');
  const [taskDetails, setTaskDetails] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSaveTask = () => {
    if (taskName.trim() && taskDetails.trim()) {
      const newTask = { name: taskName, details: taskDetails };
      setTasks([...tasks, newTask]);
      setTaskName('');
      setTaskDetails('');
      alert('Task Created Successfully!');
    }
  };

  return (
    <div className="task-list-container">
      <header className="header">
        <img src="YOUR_LOGO_URL" alt="Logo" className="logo" />
      </header>
      <div className="navigation">
        <ul>
          <li className="active-tab">Tasks</li>
          <li>Another Tab</li>
        </ul>
      </div>
      <main className="task-input-area">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="task-input"
        />
        <textarea
          placeholder="Task Details"
          value={taskDetails}
          onChange={(e) => setTaskDetails(e.target.value)}
          className="task-details-input"
        ></textarea>
        <button onClick={handleSaveTask} className="save-task-button">
          Save Task
        </button>
      </main>
      <footer className="footer">
        <a href="#help" className="footer-link">Help</a>
        <a href="#settings" className="footer-link">Settings</a>
        <a href="#logout" className="footer-link">Logout</a>
      </footer>
    </div>
  );
}

export default TaskList;
