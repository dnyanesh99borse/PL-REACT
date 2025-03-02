const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
/*const User = require("../models/User");*/
const User = require("../models/user") //HERE PROVIDE THE Route OF THAT PARTICULAR FILE WHERE YOUR DATABASES AND THEIR PATHS ARE LOCATED
const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ username, email, password: hashedPassword });

    await user.save();
    res.status(201).json({ message: "Great, You registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
