import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";
import Common from "./common";
import facebook from "../assets/facebookicon.svg";
import google from "../assets/googleicon.svg";

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [message, setMessage] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/users/signup", {
                username: formData.username,
                email: formData.email,
                password: formData.password,
            });
            setMessage(response.data.message);
            setFormData({ username: "", email: "", password: "", confirmPassword: "" });
            navigate("/"); // Redirect to login after successful signup
        } catch (error) {
            setMessage(error.response?.data?.message || "Error occurred while signing up");
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
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="signup-input"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="signup-input"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                        />
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
