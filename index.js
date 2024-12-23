const express = require('express');
const app = express();
const connect = require('./connection/db');

// Connect to the database
connect();

// Middleware to parse JSON requests
app.use(express.json());

// Import and use the router
const urlRouter = require('./routes/route');
app.use('/', urlRouter);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});