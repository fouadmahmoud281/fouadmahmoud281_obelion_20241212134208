import React, { useState } from 'react';
import './EditTask.css';

function EditTask({ task, onSave }) {
  const [taskDetails, setTaskDetails] = useState(task);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
  };

  const handleSave = () => {
    onSave(taskDetails);
  };

  return (
    <div className="edit-task">
      <header className="header">
        <img src="URL_TO_COMPANY_LOGO" alt="Company Logo" className="logo" />
        <nav className="navigation-tabs">
          <span className="tab active">Edit Task</span>
          <span className="tab">Other Tab</span>
        </nav>
      </header>
      <main className="main-content">
        <form>
          <div className="form-field">
            <label>Task Name</label>
            <input
              type="text"
              name="name"
              value={taskDetails.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-field">
            <label>Description</label>
            <textarea
              name="description"
              value={taskDetails.description}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="button"
            className="save-button"
            onClick={handleSave}
          >
            Save Changes
          </button>
        </form>
      </main>
      <footer className="footer">
        <a href="/some-link" className="footer-link">Important Link</a>
        <p className="copyright">© 2023 Company Name</p>
      </footer>
    </div>
  );
}

export default EditTask;
