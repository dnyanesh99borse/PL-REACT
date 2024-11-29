import React from "react";
import "./common.css";

// import { FaEnvelope, FaLock } from 'react-icons/fa';
import logo from '../assets/brand.png';


const Common = () => {
    return (
            <div className="left-box">

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
       
    );
};

export default Common;
