const bcryptjs = require("bcryptjs");
const crypto = require("crypto");

const generateTokenAndSetCookie = require("../utils/generateTokenAndSetCookie.js");
const {
	sendPasswordResetEmail,
	sendResetSuccessEmail,
	sendVerificationEmail,
	sendWelcomeEmail,
} = require("../mailtrap/emails.js");
const User = require("../models/user_model/user.model.js");



const dashboard = async (req, res) => {
	res.status(200).json({ success: true, message: "Dashboard" });
}


// <============ Sign Up =============>
const signup = async (req, res) => {
	
	try {
		const { username, email, password, confirmPassword } = req.body;
		if ( !username || !email || !password || !confirmPassword) {
			throw new Error("All fields are required");
		}
		if (password !== confirmPassword) {
			throw new Error("Passwords do not match");
		}

		const userAlreadyExists = await User.findOne({ email, username });
		console.log("userAlreadyExists", userAlreadyExists);

		if (userAlreadyExists) {
			return res.status(400).json({ success: false, message: "User already exists" });
		}

		const hashedPassword = await bcryptjs.hash(password, 10);
		const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

		const user = new User({
			email,
			password: hashedPassword,
			username,
			verificationToken,
			verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
		});

		await user.save();

		// jwt
		const token = generateTokenAndSetCookie(res, user._id);
		console.log("Token:",token)

		await sendVerificationEmail(user.email, verificationToken);

		res.status(201).json({
			success: true,
			message: "User created successfully",
			_id: user._id,
			email: user.email,
			username: user.username,
			token: token,
		});
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
};




// <============ Verify Email =============>
const verifyEmail = async (req, res) => {
	const { code } = req.body;
	try {
		const user = await User.findOne({
			verificationToken: code,
			verificationTokenExpiresAt: { $gt: Date.now() },
		});

		if (!user) {
			return res.status(400).json({ success: false, message: "Invalid or expired verification code" });
		}

		user.isVerified = true;
		user.verificationToken = undefined;
		user.verificationTokenExpiresAt = undefined;
		await user.save();

	


		await sendWelcomeEmail(user.email, user.name);

		res.status(200).json({
			success: true,
			message: "Email verified successfully",
			user: {
				...user._doc,
				password: undefined,
			},
		});
	} catch (error) {
		console.log("error in verifyEmail ", error);
		res.status(500).json({ success: false, message: "Server error" });
	}
};



// <============ Login =============>
	const login = async (req, res) => {
		const { email, password } = req.body;
		console.log("email", email);
		console.log("password", password);
	
		try {
			// Find user by email
			const user = await User.findOne({ email });
			console.log("user", user);
			if (!user) {
				return res.status(400).json({ 
					success: false, 
					message: "Invalid email or password" 
				});
			}
	
			// Validate password
			const isPasswordValid = await bcryptjs.compare(password, user.password);
			console.log("isPasswordValid", isPasswordValid);
			if (!isPasswordValid) {
				return res.status(400).json({ 
					success: false, 
					message: "Invalid email or password" 
				});
			}
	
			// Generate token and set it in cookies
			const token = generateTokenAndSetCookie(res, user._id);
	
			// Update last login timestamp
			user.lastLogin = new Date();
			await user.save();
	
			
			res.status(200).json({
				id: user._id,
				email: user.email,
				username: user.username,
				token: token,
			});
		} catch (error) {
			// Log the error for debugging
			console.error("Error in login:", error);
	
			// Send generic error response to client
			res.status(500).json({ 
				success: false, 
				message: "An error occurred while logging in. Please try again later." 
			});
		}
	};
	


// <============ Logout =============>
const logout = async (req, res) => {
	res.clearCookie("token");
	res.status(200).json({ success: true, message: "Logged out successfully" });
};



// <============ Forgot Password =============>
const forgotPassword = async (req, res) => {
	const { email } = req.body;
	try {
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(400).json({ success: false, message: "User not found" });
		}

		// Generate reset token
		const resetToken = crypto.randomBytes(20).toString("hex");
		const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000; // 1 hour

		user.resetPasswordToken = resetToken;
		user.resetPasswordExpiresAt = resetTokenExpiresAt;

		await user.save();

		// send email
		await sendPasswordResetEmail(user.email, `${process.env.CLIENT_URL}/reset-password/${resetToken}`);

		res.status(200).json({ success: true, message: "Password reset link sent to your email" });
	} catch (error) {
		console.log("Error in forgotPassword ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};



// <============ Reset Password =============>
const resetPassword = async (req, res) => {
	try {
		const { token } = req.params;
		const { password } = req.body;

		const user = await User.findOne({
			resetPasswordToken: token,
			resetPasswordExpiresAt: { $gt: Date.now() },
		});

		if (!user) {
			return res.status(400).json({ success: false, message: "Invalid or expired reset token" });
		}

		// update password
		const hashedPassword = await bcryptjs.hash(password, 10);

		user.password = hashedPassword;
		user.resetPasswordToken = undefined;
		user.resetPasswordExpiresAt = undefined;
		await user.save();

		await sendResetSuccessEmail(user.email);

		res.status(200).json({ success: true, message: "Password reset successful" });
	} catch (error) {
		console.log("Error in resetPassword ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};



// <============ Check Auth =============>
const checkAuth = async (req, res) => {
	try {
		const user = await User.findById(req.userId).select("-password");
		if (!user) {
			return res.status(400).json({ success: false, message: "User not found" });
		}

		res.status(200).json({ success: true, user });
	} catch (error) {
		console.log("Error in checkAuth ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};




module.exports = {
	dashboard,
	login,
	logout,
	signup,
	verifyEmail,
	forgotPassword,
	resetPassword,
	checkAuth,
};
