import React, { useState } from 'react';
import './AddTask.css';

function AddTask({ onAddTask }) {
    const [taskName, setTaskName] = useState('');
    const [taskDetails, setTaskDetails] = useState('');

    const handleSaveTask = () => {
        if (taskName.trim() && taskDetails.trim()) {
            onAddTask({ name: taskName, details: taskDetails });
            alert('Task created successfully!');
            setTaskName('');
            setTaskDetails('');
        } else {
            alert('Please enter task name and details.');
        }
    };

    return (
        <div className="add-task-container">
            <header className="header">
                <img src="your-logo-url" alt="Company Logo" className="logo" />
            </header>
            <aside className="navigation">
                <ul>
                    <li className="active-tab">Home</li>
                    <li>Tasks</li>
                    <li>About</li>
                </ul>
            </aside>
            <main className="main-content">
                <div className="form-group">
                    <label htmlFor="taskName">Task Name</label>
                    <input
                        type="text"
                        id="taskName"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="taskDetails">Task Details</label>
                    <textarea
                        id="taskDetails"
                        value={taskDetails}
                        onChange={(e) => setTaskDetails(e.target.value)}
                    />
                </div>
                <button onClick={handleSaveTask} className="save-task-button">Save Task</button>
            </main>
            <footer className="footer">
                <a href="#help" className="footer-link">Help</a>
                <a href="#settings" className="footer-link">Settings</a>
                <a href="#logout" className="footer-link">Logout</a>
            </footer>
        </div>
    );
}

export default AddTask;
