const express = require("express");
const authController = require("../controller/auth.controller.js");
const documentController = require("../controller/document.controller.js");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken.js"); // Ensure this path is correct

/** ===========================
 * Authentication
 * ============================*/



router.get("api/auth/check-auth", verifyToken, authController.checkAuth );

router.post("/api/auth/signup", authController.signup);
router.post("/api/auth/login", authController.login);
router.post("/api/auth/logout", authController.logout);

router.post("/api/auth/verify-email", authController.verifyEmail);
router.post("/api/auth/forgot-password", authController.forgotPassword);

router.post("/api/auth/reset-password/:token", authController.resetPassword);

/** ===========================
 * Learning Resourses
 * ============================*/

router.route("/Add/college").post(documentController.insertColleges)
router.route("/Get/suggestions").get(documentController.getSuggestions)
router.route("/colleges/:collegeId/courses").get(documentController.getCourses);
router.route("/Add/course").post(documentController.addCourse);
router.route("/Add/Branch").post(documentController.addBranch);
router.route("/Get/Branch/:college/:course").get(documentController.getBranches);





module.exports = router;