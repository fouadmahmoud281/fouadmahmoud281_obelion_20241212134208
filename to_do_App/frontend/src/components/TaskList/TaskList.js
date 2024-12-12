import React, { useState } from 'react';
import './TaskList.css';

function TaskList({ tasks, onDelete }) {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleDelete = (taskId) => {
    onDelete(taskId);
    alert('Task successfully deleted');
  };

  return (
    <div className="task-list">
      <header className="task-list-header">
        <img src="[COMPANY_LOGO_URL]" alt="Company Logo" className="logo" />
        <nav className="navigation-tabs">
          <a href="#home">Home</a>
          <a href="#tasks">Tasks</a>
          <a href="#profile">Profile</a>
        </nav>
      </header>
      <ul className="tasks">
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            <span className="task-name">{task.name}</span>
            <button
              className="delete-button"
              style={{ backgroundColor: '#F5A623' }}
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <footer className="task-list-footer">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </footer>
    </div>
  );
}

export default TaskList;
