// signup.js
import React from "react";
import { useNavigate } from 'react-router-dom';

import "./signup.css";
import Common from "./common";
import facebook from '../assets/facebookicon.svg';
import google from '../assets/googleicon.svg';


const Signup = () => {

    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate('/login'); // Navigate to the login page
    };

    const handleHomeRedirect = () => {
        navigate('/');
    }

    return (
        <div className="signup-container">
            <div className="left">
                <Common />
            </div>
            <div className="right">

                <div className="form-box">
                    <div className="close">
                        <i class='bx bx-x'onClick={handleHomeRedirect}></i>
                    </div>
                    <h2 className="signup-title">Sign up</h2>
                    <div className="loginbutton">
                        <p>Already have an account ?</p>
                        <button onClick={handleLoginRedirect}>login</button>
                    </div>


                    <div className="social-login">
                        <button className="social-button google-button">Google<img src={google} alt="icon" className="button-icon" /></button>
                        <button className="social-button facebook-button">Facebook<img src={facebook} alt="icon" className="button-icon" /></button>
                    </div>


                    <div className="separator">
                        <span>OR</span>
                    </div>

                    <form className="signup-form">
                        <input
                            type="text"
                            placeholder="username"
                            className="signup-input"
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            className="signup-input"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="signup-input"
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="signup-input"
                        />

                        <button className="signup-button">Sign up</button>
                    </form>

                    <p className="terms-text">
                        By signing in to Passlog, you agree to our{" "}
                        <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Signup;
