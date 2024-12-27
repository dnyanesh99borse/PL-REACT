import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import './sidenavbar.css';

const SideNavbar = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const navigateToPage = (page) => {
        navigate(page); // Use React Router's navigate function
    };

    return (
        <div className='sidenavbar'>
            <div className="container">
                <div className="option" id="profile" onClick={() => navigateToPage('/profile')}>
                    <span className="icon" id="profile-text">
                        <i className='bx bx-user-circle'></i>
                    </span>
                    <p className="text" id="profile-text">profile</p>
                </div>

                <div className="option" id="order" onClick={() => navigateToPage('/order')}>
                    <span className="icon">
                        <i className="bx bx-basket"></i>
                    </span>
                    <p className="text">order</p>
                </div>

                <div className="option" id="mybag" onClick={() => navigateToPage('/mybag')}>
                    <span className="icon">
                        <i className="bx bxs-backpack"></i>
                    </span>
                    <p className="text">mybag</p>
                </div>
            </div>
        </div>
    );
};

export default SideNavbar;
