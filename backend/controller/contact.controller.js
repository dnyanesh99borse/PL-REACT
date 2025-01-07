const handleContactForm = (req, res) => {
    const { name, email, number, course, message } = req.body;

    // Log the received data
    console.log("Received Contact Form Data:", { name, email, number, course, message });

    // Send a success response
    res.status(200).json({ message: "Form submitted successfully!" });
};

module.exports = { handleContactForm };
