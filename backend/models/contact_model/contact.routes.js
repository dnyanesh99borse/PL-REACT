const express = require("express");
const Contact = require("../models/contact_model/contact.model.js");

const router = express.Router();

// POST route for contact form submission
router.post("/api/contact", async (req, res) => {
    try {
        const { name, email, number, course, message } = req.body;

        // Create a new contact document
        const newContact = new Contact({ name, email, number, course, message });
        await newContact.save();

        res.status(201).json({ message: "Contact form submitted successfully" });
    } catch (error) {
        console.error("Error saving contact form data:", error);
        res.status(500).json({ error: "Failed to submit contact form" });
    }
});

module.exports = router;
