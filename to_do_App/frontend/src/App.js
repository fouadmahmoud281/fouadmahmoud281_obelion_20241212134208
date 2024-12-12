import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddTask from './components/AddTask/AddTask.js';
import EditTask from './components/EditTask/EditTask.js';
import TaskList from './components/TaskList/TaskList.js';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Task List</Link></li>
            <li><Link to="/add-task">Add Task</Link></li>
          </ul>
        </nav>
        
        <main>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/edit-task/:id" element={<EditTask />} />
          </Routes>
        </main>
        
        <footer>&copy; 2024 to_do_ App. All rights reserved</footer>
      </div>
    </Router>
  );
}

export default App;
