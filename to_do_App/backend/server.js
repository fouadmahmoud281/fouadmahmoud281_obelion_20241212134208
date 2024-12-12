const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'db',
    user: 'agent',
    password: 'agentpass',
    database: 'Obelien AI'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.use('/api', taskRoutes);

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
