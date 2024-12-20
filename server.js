const express = require('express');
const HTTP = process.env.PORT || 8080;
const app = express();
const path = require('path');

// Serve static files from the "public" directory for css
app.use(express.static(path.join(__dirname)));
//app.use(express.static('public'));

app.listen(HTTP, () => {
    console.log(`Server is running on port ${HTTP}`);
});

// Route to serve the index.html file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 404 Page Not Found route
app.use((req, res) => {
    res.status(404).send('404 Page Not Found');
});