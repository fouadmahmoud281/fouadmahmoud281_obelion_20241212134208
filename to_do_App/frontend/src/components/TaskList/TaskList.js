import React, { useState } from 'react';
import './TaskList.css';

function TaskList({ tasks, onUpdateTask }) {
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskDetails, setTaskDetails] = useState('');

  const handleTaskSelect = (task) => {
    setSelectedTask(task);
    setTaskDetails(task.details);
  };

  const handleTaskChange = (event) => {
    setTaskDetails(event.target.value);
  };

  const handleSaveChanges = () => {
    if (selectedTask) {
      onUpdateTask({ ...selectedTask, details: taskDetails });
      setSelectedTask(null);
      setTaskDetails('');
    }
  };

  return (
    <div className="task-list-container">
      <header className="header">
        <img src="company-logo-url" alt="Company Logo" className="company-logo" />
        <nav className="navigation-tabs">
          <div className="tab active-tab">Tasks</div>
          <div className="tab">Settings</div>
        </nav>
      </header>
      <main className="main-content">
        <div className="task-list">
          {tasks.map((task, index) => (
            <div
              key={index}
              className={`task-item ${selectedTask === task ? 'selected-task' : ''}`}
              onClick={() => handleTaskSelect(task)}
            >
              {task.name}
            </div>
          ))}
        </div>
        {selectedTask && (
          <div className="task-editor">
            <textarea
              value={taskDetails}
              onChange={handleTaskChange}
              className="task-textarea"
              placeholder="Edit task details"
            />
            <button onClick={handleSaveChanges} className="save-button">
              Save Changes
            </button>
          </div>
        )}
      </main>
      <footer className="footer">
        <div className="additional-links">
          <a href="/privacy" className="link">Privacy Policy</a>
          <a href="/terms" className="link">Terms of Service</a>
        </div>
        <div className="copyright">
          © 2023 Company Name
        </div>
      </footer>
    </div>
  );
}

export default TaskList;
