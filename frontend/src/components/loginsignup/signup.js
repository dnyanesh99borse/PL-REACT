import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";
import Common from "./common";
import facebook from "../assets/facebookicon.svg";
import google from "../assets/googleicon.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Import Eye Icons

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");

    // Handle input field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    /* ---- Password Field with Show/Hide Toggle ---- */
    const PasswordField = ({ name, placeholder }) => {
        const [showPassword, setShowPassword] = useState(false);

        return (
            <div className="password-container">
                <input
                    type={showPassword ? "text" : "password"}
                    name={name}
                    placeholder={placeholder}
                    className="signup-input"
                    value={formData[name]}  // ✅ Control input with formData
                    onChange={handleInputChange} // ✅ Update state
                    required
                />
                <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </span>
            </div>
        );
    };

    /* ---- Signup Function ---- */
    const handleSignup = async (e) => {
        e.preventDefault();

        const { username, email, password, confirmPassword } = formData;

        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);

        // Validate password length
        if (!password || password.length < 8) {
            setMessage("❌ Password must be at least 8 characters long.");
            return;
        }

        // Ensure passwords match
        if (password !== confirmPassword) {
            setMessage("❌ Passwords do not match.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/users/signup", {
                username,
                email,
                password,
            });

            setMessage("✅ Signup Successful! 🎉");
            setShowPopup(true);

            // Clear form fields after successful signup
            setFormData({ username: "", email: "", password: "", confirmPassword: "" });

            setTimeout(() => {
                setShowPopup(false);
                navigate("/");
            }, 2000);
        } catch (error) {
            setMessage(error.response?.data?.message || "❌ Error occurred while signing up.");
        }
    };

    const handleLoginRedirect = () => {
        navigate("/login");
    };

    const handleHomeRedirect = () => {
        navigate("/");
    };

    return (
        <div className="signup-container">
            {showPopup && (
                <div className="signup-popup">
                    ✅ Signup Successful! 🎉 Redirecting...
                </div>
            )}
            <div className="left">
                <Common />
            </div>
            <div className="right">
                <div className="form-box">
                    <div className="close">
                        <i className="bx bx-x" onClick={handleHomeRedirect}></i>
                    </div>
                    <h2 className="signup-title">Sign up</h2>
                    <div className="loginbutton">
                        <p>Already have an account?</p>
                        <button onClick={handleLoginRedirect}>Login</button>
                    </div>
                    <div className="social-login">
                        <button className="social-button google-button">Google<img src={google} alt="icon" className="button-icon" /></button>
                        <button className="social-button facebook-button">Facebook<img src={facebook} alt="icon" className="button-icon" /></button>
                    </div>
                    <div className="separator">
                        <span>OR</span>
                    </div>
                    <form className="signup-form" onSubmit={handleSignup}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="signup-input"
                            value={formData.username}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="signup-input"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />

                        <PasswordField name="password" placeholder="Password" />
                        <PasswordField name="confirmPassword" placeholder="Confirm Password" />

                        <button type="submit" className="signup-button">Sign up</button>
                    </form>
                    {message && <p className="message">{message}</p>}
                    <p className="terms-text">
                        By signing up for Passlog, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;



/*------------------ISSUE TO SOLVE ... THAT PASSWORD INPUT FIELDS ARE NOT TAKING THE INPUT CONTINUOSLY-------------*/