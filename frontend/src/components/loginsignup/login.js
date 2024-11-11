// Login.js
import React from "react";
import "./login.css";
import Common from "./common";
import { useNavigate } from 'react-router-dom';

// import { FaEnvelope, FaLock } from 'react-icons/fa';
// import logo from '../assets/brand.png';
import facebook from '../assets/facebookicon.svg';
import google from '../assets/googleicon.svg';


//-----MAKE THIS PAGE LEFT SECTION  WITH THE RIGHT SECTION AS A COMMON BACKGROUND AND MAKE TWO COMPONENTS AS SIGNUP AND LOGIN AND JUST ONCLIK THE BUTTON NAVIGATE THE 
//---TO THE RIGHT COMPONENT OF THIS SECTION TO THAT LOGIN AND SIGNUP SECTION''
//----AND ALSO MANAGE THE ONCLICK OF THE SIGNUP AND LOGIN OF THE BUTTON OF THE HEADER....
//--THERE ALSO ONLY THAT PARTICULAR SECTION SHOULD CHANGE AND NOT THE WHOLE PAGE.8IZXaSDFK/  
const Login = () => {

    const navigate = useNavigate();


    return (
        <div className="login-container">
            <div className="left">
                <Common />
            </div>
            <div className="right">

                <div className="form-box">
                    <div className="close" onClick={() => navigate('/sig')}>
                        <i class='bx bx-x'></i>
                    </div>
                    <h2 className="login-title">Log in</h2>
                    <div className="signupbutton">
                        <p>don't have account ?</p>
                        <button>signup</button>
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

                        <button className="login-button">Log in</button>
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

export default Login;
