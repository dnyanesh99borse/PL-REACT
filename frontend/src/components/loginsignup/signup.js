// signup.js
import React, {useState} from "react";
import "./signup.css";
import Common from "./common";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import facebook from '../assets/facebookicon.svg';
import google from '../assets/googleicon.svg';



//-----MAKE THIS PAGE LEFT SECTION  WITH THE RIGHT SECTION AS A COMMON BACKGROUND AND MAKE TWO COMPONENTS AS SIGNUP AND LOGIN AND JUST ONCLIK THE BUTTON NAVIGATE THE 
//---TO THE RIGHT COMPONENT OF THIS SECTION TO THAT LOGIN AND SIGNUP SECTION''
//----AND ALSO MANAGE THE ONCLICK OF THE SIGNUP AND LOGIN OF THE BUTTON OF THE HEADER....
//--THERE ALSO ONLY THAT PARTICULAR SECTION SHOULD CHANGE AND NOT THE WHOLE PAGE.8IZXaSDFK/  
const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
            setMessage(response.data.message); // Success message
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error occurred');
        }
    };

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
                        <button onClick={() => navigate('/login')}>Login</button>
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
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="signup-input"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="signup-input"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="signup-input"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                        />
                        <button type="submit" className="signup-button">Sign up</button>
                    </form>
                    {message && <p className="message">{message}</p>}

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
