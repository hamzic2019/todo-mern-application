const express = require('express');
const path = require('path');
const app = express();

// importing database
require('./database/mongoose');

// Imprting routes
const taskRoutes = require('./routes/task-route');

const PORT = process.env.PORT  || 3000;

app.use(express.json());

app.use(taskRoutes);



app.listen(PORT, () => {
    console.log(`Server is up and is running on port: ${PORT}`);
})