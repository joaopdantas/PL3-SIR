const express = require('express');  // Use 'const' for proper declaration
const app = express();

app.use(express.static('public'));  // Serve static files from 'public' folder

// Route for '/hello'
app.get('/hello', function (req, res) {
    return res.send('Hello');
});

// Route for '/euro'
app.get('/euro', function (req, res) {
    res.setHeader('Content-Type', 'application/json');  // Set header to JSON type
    return res.json(bet());  // Respond with JSON data from bet()
});

// Function to generate unique numbers
function generate(n, min, max) {
    let set = new Set();
    while (set.size < n) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        set.add(num);
    }
    return Array.from(set).sort((a, b) => a - b);
}

// Function to generate a bet
function bet() {
    const numbers = generate(5, 1, 50);
    const stars = generate(2, 1, 12);

    // Return a new bet object
    return {
        "numbers": numbers,
        "stars": stars
    };
}

// Start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
