const express = require('express');
const router = express.Router();
const { handleContactForm } = require('../controller/contact.controller.js');

// Route to handle the contact form submission
router.post('/contact', handleContactForm);

module.exports = router;
