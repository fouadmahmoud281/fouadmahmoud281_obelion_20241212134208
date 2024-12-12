const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await TaskController.getAllTasks();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});

router.post('/tasks', async (req, res) => {
    const { name, status } = req.body;
    if (!name || !status) {
        return res.status(400).json({ error: 'Name and status are required' });
    }
    try {
        const task = await TaskController.createTask({ name, status });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create task' });
    }
});

router.put('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const { name, status } = req.body;
    if (!name || !status) {
        return res.status(400).json({ error: 'Name and status are required' });
    }
    try {
        const updatedTask = await TaskController.updateTask(id, { name, status });
        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update task' });
    }
});

router.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await TaskController.deleteTask(id);
        if (!deleted) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json({ message: 'Task successfully deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete task' });
    }
});

module.exports = router;
