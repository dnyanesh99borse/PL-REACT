const jwt = require('jsonwebtoken');

const generateTokenAndSetCookie = (res, userId) => {
    // Generate a JWT token with a 7-day expiration
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    });

    // Set the token as an HTTP-only cookie
    res.cookie("token", token, {
        httpOnly: true, // Fix: Capitalized O
        secure: process.env.NODE_ENV === "production", // Only use secure cookies in production
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    });

    return token; // Return the token for additional use if needed
};

module.exports = generateTokenAndSetCookie;
