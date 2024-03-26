// script.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, images, etc.) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for the PC components page
app.get('/components', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'components.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});