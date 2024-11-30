import React, { useState } from "react";
import "./login.css";
import Common from "./common";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import facebook from '../assets/facebookicon.svg';
import google from '../assets/googleicon.svg';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', formData);
            setMessage('Login successful!');
            setLoading(false);

            // Redirect to dashboard or home page
            navigate('/'); 
        } catch (error) {
            setMessage(error.response?.data?.message || 'An error occurred');
            setLoading(false);

            // Clear password field for security
            setFormData((prevState) => ({ ...prevState, password: '' }));
        }
    };

    return (
        <div className="login-container">
            <div className="left">
                <Common />
            </div>
            <div className="right">
                <div className="form-box">
                    <div className="close">
                        <i className="bx bx-x"></i>
                    </div>
                    <h2 className="login-title">Log in</h2>
                    <div className="signupbutton">
                        <p>Don't have an account?</p>
                        <button onClick={() => navigate('/signup')}>Sign Up</button>
                    </div>

                    <div className="social-login">
                        <button className="social-button google-button">
                            Google
                            <img src={google} alt="icon" className="button-icon" />
                        </button>
                        <button className="social-button facebook-button">
                            Facebook
                            <img src={facebook} alt="icon" className="button-icon" />
                        </button>
                    </div>

                    <div className="separator">
                        <span>OR</span>
                    </div>

                    <form className="login-form" onSubmit={handleLogin}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="login-input"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="login-input"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        <button className="forgot-button">Forgot password?</button>
                        <button type="submit" className="login-button" disabled={loading}>
                            {loading ? 'Logging in...' : 'Log in'}
                        </button>
                    </form>
                    {message && <p className="message">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default Login;
