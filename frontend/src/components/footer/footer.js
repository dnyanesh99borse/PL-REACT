import React from 'react';
import '../footer/footer.css';
import image2 from '../assets/footer image 2.png'
import backgroundImage from '../assets/wavefinal.png';
import arrow from '../assets/arrow.png';
import logo from '../assets/brand.png';


const Footer = () => {
    return (
        <div className="footer">
            <img src={backgroundImage} alt='image' />
            <div className="footercontainer">
                <div className="left">
                    <img src={image2} alt='image' />
                </div>
                <div className="center">
                    <div className='box1'>
                        <img src={arrow} alt='arrow' />
                    </div>
                    <div className='box2'>

                    </div>
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
    );
};

export default Footer;