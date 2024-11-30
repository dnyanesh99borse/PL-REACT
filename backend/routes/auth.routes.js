const express = require("express");
const authController = require("../controller/auth.controller.js");
const mainController = require("../controller/main.controller.js");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken.js"); // Ensure this path is correct

console.log(authController); // Check if all functions are defined


router.get('/',  authController.main);

router.get("api/auth/check-auth", verifyToken, authController.checkAuth );

router.post("/api/auth/signup", authController.signup);
router.post("/api/auth/login", authController.login);
router.post("/api/auth/logout", authController.logout);

router.post("/api/auth/verify-email", authController.verifyEmail);
router.post("/api/auth/forgot-password", authController.forgotPassword);

router.post("/api/auth/reset-password/:token", authController.resetPassword);

module.exports = router;