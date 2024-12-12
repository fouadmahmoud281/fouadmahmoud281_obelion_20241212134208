const Task = require('../models/TaskModel');

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const { name, details } = req.body;
        if (!name || !details) {
            return res.status(400).json({ error: 'Task name and details are required.' });
        }
        const task = await Task.create({ name, details });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the task.' });
    }
};

// Get all tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving tasks.' });
    }
};

// Get a single task by ID
exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found.' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving the task.' });
    }
};

// Update a task
exports.updateTask = async (req, res) => {
    try {
        const { name, details } = req.body;
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found.' });
        }
        task.name = name || task.name;
        task.details = details || task.details;
        await task.save();
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the task.' });
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found.' });
        }
        await task.destroy();
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the task.' });
    }
};
