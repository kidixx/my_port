// src/server/index.js
const express = require('express');
const apiRoutes = require('./routes/api');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5500;

// Use express.static to serve static files
app.use(express.static(path.join(__dirname, '../'))); // this should serve the static files from the `src` directory

app.use('api', apiRoutes);

// Catch-all route for any other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../index.html'));
  });
  

app.listen(PORT, () => {
    console.log(`Kidixx Server is Listening on Port:${PORT}`);
});