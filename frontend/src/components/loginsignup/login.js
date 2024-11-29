import React, { useState } from "react";
import "./login.css";

// import { FaEnvelope, FaLock } from 'react-icons/fa';
import logo from '../assets/brand.png';
import facebook from '../assets/facebookicon.svg';
import google from '../assets/googleicon.svg';

const Login = () => {
    return (
        <div className="login-container">
            <div className="left">

                <img rel="logo" src={logo} />
                <h1>Be with Passlog & Never Compromise in Learning</h1>
                <ol>
                    <li>Explore Boundless Knowledge.</li>
                    <li>Pursue Your Passions Freely.</li>
                    <li>Instant Access to Resource.</li>
                    <li>Learn at Your Own Pace.</li>
                    <li>Your Gateway to Excellence.</li>
                    <li>The Ultimate Learning Experience.</li>
                </ol>

                <p><span>" </span>I think your friend is exploring their interest, what's about you <span>"</span></p>

                <div className="foot">
                    <p>
                        Passlog is your gateway to limitless learning, empowering you to explore topics that fuel your passion - be it academic, career-focused, or personal growth. We believe that learning should never be compromised, and we’re here to make it accessible to everyone.
                    </p>

                </div>
            </div>
            <div className="right">

                <div className="form-box">
                    <div className="close">
                        <i class='bx bx-x'></i>
                    </div>
                    <h2 className="login-title">Log in</h2>
                    <form className="login-form">
                        <input
                            type="text"
                            placeholder="Email or username"
                            className="login-input"

                        />
                        <div className="password-container">
                            <input
                                type="password"
                                placeholder="Password"
                                className="login-input"
                            />
                            <button className="forgot-button">Forgot password ?</button>
                        </div>
                        <button className="login-button">Log in</button>
                    </form>
                    <div className="separator">
                        <span>OR</span>
                    </div>
                    <div className="social-login">
                        <button className="social-button facebook-button">Facebook<img src={facebook} alt="icon" className="button-icon" /></button>
                        <button className="social-button google-button">Google<img src={google} alt="icon" className="button-icon" /></button>
                    </div>
                    <p className="terms-text">
                        By signing in to Passlog, you agree to our{" "}
                        <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Login;
