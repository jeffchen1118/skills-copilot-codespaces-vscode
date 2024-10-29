// Create web server
const express = require('express');
const app = express();
const path = require('path');

// Set up the server
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Listen on port 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});