import React from "react";
import '../whywe/whywe.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

import learningImage from '../assets/whywe.svg';


const Whywe = () => {
    return (
<section className="why-we-section">
                <div className="container">
                    <h2 className="section-title">Why With Passlog..?</h2>
                    <div className="content">
                        <div className="description">
                            <h3>Empower Your Journey</h3>
                            <p>
                                Welcome to the premier platform where knowledge, innovation, and passion intersect. Tailored to meet your specific interests, we provide access to world-class resources and an exceptional learning environment. Here, you are not only educated—you master the art of learning.
                            </p>
                            <p>
                                At Passlog, we are committed to empowering your journey, enabling you to explore, excel, and achieve your highest potential. Start your journey with us and make your mark on the world.
                            </p>
                            <div className="social">
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon x">
                                    <FontAwesomeIcon icon={faXTwitter} />
                                </a>
                            </div>
                        </div>
                        <div className="image">
                            <img src={learningImage} alt="Learning Experience" />
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Whywe;