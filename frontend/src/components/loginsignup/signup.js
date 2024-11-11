// signup.js
import React from "react";
import "./signup.css";
import Common from "./common";
import facebook from '../assets/facebookicon.svg';
import google from '../assets/googleicon.svg';



//-----MAKE THIS PAGE LEFT SECTION  WITH THE RIGHT SECTION AS A COMMON BACKGROUND AND MAKE TWO COMPONENTS AS SIGNUP AND LOGIN AND JUST ONCLIK THE BUTTON NAVIGATE THE 
//---TO THE RIGHT COMPONENT OF THIS SECTION TO THAT LOGIN AND SIGNUP SECTION''
//----AND ALSO MANAGE THE ONCLICK OF THE SIGNUP AND LOGIN OF THE BUTTON OF THE HEADER....
//--THERE ALSO ONLY THAT PARTICULAR SECTION SHOULD CHANGE AND NOT THE WHOLE PAGE.8IZXaSDFK/  
const Signup = () => {
    return (
        <div className="signup-container">
            <div className="left">
                <Common />
            </div>
            <div className="right">

                <div className="form-box">
                    <div className="close">
                        <i class='bx bx-x'></i>
                    </div>
                    <h2 className="login-title">Sign up</h2>
                    <div className="signupbutton">
                        <p>Already have an account ?</p>
                        <button>login</button>
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
