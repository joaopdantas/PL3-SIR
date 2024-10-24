const express = require('express');
const cors = require('cors');  // Import the cors middleware
const app = express();

// Enable CORS for your specific frontend domain
app.use(cors({
    origin: 'https://pl3-sir.onrender.com',  // Replace with your domain
    methods: 'GET,POST',  // You can specify allowed HTTP methods
    allowedHeaders: 'Content-Type'
}));

app.use(express.static('public'));

app.get('/hello', function (req, res) {
    return res.send('Hello');
});

app.get('/euro', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    return res.json(bet());
});

function generate(n, min, max) {
    let set = new Set();
    while (set.size < n) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        set.add(num);
    }
    return Array.from(set).sort((a, b) => a - b);
}

function bet() {
    const numbers = generate(5, 1, 50);
    const stars = generate(2, 1, 12);
    return {
        "numbers": numbers,
        "stars": stars
    };
}

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
