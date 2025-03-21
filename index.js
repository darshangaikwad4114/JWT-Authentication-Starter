const express = require('express');
const authRouter = require('./routes/auth');
const mongoose = require("mongoose");
const verifyJWT = require("./middleware")

require("dotenv").config(); // Load environment variables from .env file

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("MongoDB is connected!");
});

// Middleware for parsing JSON data
app.use(express.json());

// Authentication route
app.use('/auth', authRouter);

// Protected route to decode user details
app.get('/decodeDetails', verifyJWT, (req, res) => {
    const { username } = req.user;
    res.json({ username });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});