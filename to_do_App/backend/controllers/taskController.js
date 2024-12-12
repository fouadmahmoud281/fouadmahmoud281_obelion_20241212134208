const Task = require('../models/TaskModel');

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching tasks.' });
  }
};

// Get task by ID
exports.getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ error: 'Task not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the task.' });
  }
};

// Create a new task
exports.createTask = async (req, res) => {
  const { name, description, details } = req.body;
  try {
    const newTask = await Task.create({ name, description, details });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ error: 'An error occurred while creating the task.' });
  }
};

// Update an existing task
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, description, details } = req.body;
  try {
    const task = await Task.findByPk(id);
    if (task) {
      await task.update({ name, description, details });
      res.status(200).json(task);
    } else {
      res.status(404).json({ error: 'Task not found.' });
    }
  } catch (error) {
    res.status(400).json({ error: 'An error occurred while updating the task.' });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (task) {
      await task.destroy();
      res.status(200).json({ message: 'Task successfully deleted.' });
    } else {
      res.status(404).json({ error: 'Task not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the task.' });
  }
};
