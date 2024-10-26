const express = require("express");
const authController = require("../controller/auth.controller.js");
const router = express.Router();
const { verifyToken } = require("../middleware/verifyToken.js");

router.get("/check-auth", verifyToken, authController.checkAuth );

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/logout", authController.logout);

router.post("/verify-email", authController.verifyEmail);
router.post("/forgot-password", authController.forgotPassword);

router.post("/reset-password/:token", authController.resetPassword);

module.exports = router;