import React from 'react';
import '../footer/footer.css';
import image2 from '../assets/footer_image_2-transformed.png'
import backgroundImage from '../assets/wavefinal.png';
import arrow from '../assets/arrow.png';
import logo from '../assets/brand.png';


const Footer = () => {
    return (
        <div className="mainfooter">
            <div className="footer">
                <img src={backgroundImage} alt='image' />
                <div className="footercontainer">
                    <div className="left">
                        <img src={image2} alt='image' className='boy' />
                        <img src={arrow} alt='arrow' className='arrow' />
                    </div>

                    <div className="right">
                        <div className='box1'>
                            <img src={logo} alt='arrow' />
                        </div>
                        <div className='box2'>

                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-container">
      <div className="footer-section lastbox1">
        <h3>Company</h3>
        <p>About Us</p>
        <p>Careers</p>
        <p>Press</p>
      </div>
      <div className="footer-section lastbox2">
        <h3>Quick Links</h3>
        <p>FAQs</p>
        <p>Support</p>
        <p>Privacy Policy</p>
      </div>
      <div className="footer-section lastbox3">
        <h3>Contact Us</h3>
        <p>Email: contact@company.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Street, City</p>
      </div>
      <div className="footer-section lastbox4">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin-in"></i>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
    </div>

        </div>
    );
};

export default Footer;