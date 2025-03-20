const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); // Add bcrypt for password hashing
const User = require("../models/user");
const router = express.Router();

// Signup route
router.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;
        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: "New user registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

// Login route
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        // Find the user by username
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: "Invalid username or password" });
        }
        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.SECRET_KEY
        );
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;