const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user"); // Ensure correct path to User model
const router = express.Router();

// JWT Secret Key (Use environment variables for security)
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key"; 

// Signup Route
router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if user already exists
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists. Please login." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        // Save user to database
        await newUser.save();

        // Generate JWT Token (Optional)
        const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({ 
            message: "Great! You registered successfully.", 
            token, 
            user: { id: newUser._id, username: newUser.username, email: newUser.email } 
        });

    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ message: "Internal Server Error. Please try again later." });
    }
});

module.exports = router;
