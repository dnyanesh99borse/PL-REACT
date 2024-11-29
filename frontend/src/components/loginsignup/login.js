// Login.js
import React from "react";
import { useNavigate } from "react-router-dom";

import "./login.css";
import Common from "./common";
import facebook from '../assets/facebookicon.svg';
import google from '../assets/googleicon.svg';

const Login = () => {

    const navigate = useNavigate();

    const handleSignupRedirect = () => {
        navigate('/signup');
    };

    const handleHomeRedirect = () => {
        navigate('/home');
    }


    return (
        <div className="login-container">
            <div className="left">
                <Common />
            </div>
            <div className="right">

                <div className="form-box">
                    <div className="close">
                        <i class='bx bx-x'onClick={handleHomeRedirect}></i>
                    </div>
                    <h2 className="login-title">Log in</h2>
                    <div className="signupbutton">
                        <p>don't have account ?</p>
                        <button onClick={handleSignupRedirect}>signup</button>
                    </div>

                    <div className="social-login">
                        <button className="social-button google-button">Google<img src={google} alt="icon" className="button-icon" /></button>
                        <button className="social-button facebook-button">Facebook<img src={facebook} alt="icon" className="button-icon" /></button>
                    </div>

                    <div className="separator">
                        <span>OR</span>
                    </div>

                    <form className="login-form">
                        <input
                            type="text"
                            placeholder="Email or username"
                            className="login-input"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="login-input"
                        />
                        <button className="forgot-button">Forgot password ?</button>

                        <button className="login-button" onClick={() => navigate('/form')}>Log in</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;
