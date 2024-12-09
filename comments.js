// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Create a variable to store comments
let comments = [];

// Middleware
app.use(bodyParser.json());

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

// Start server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});