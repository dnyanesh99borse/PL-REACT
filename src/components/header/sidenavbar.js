import React from 'react';
import './sidenavbar.css';
const SideNavbar = () => {
    const navigateToPage = (page) => {
        // Implement navigation logic here
        console.log(`Navigating to ${page}`);
        // For example, you could use window.location.href or a React Router navigation here
    };

    return (
        <div className='sidenavbar'>
            <div className="container">
                <div className="option" id="profile" onClick={() => navigateToPage('profile.ejs')}>
                    <span className="icon" id="profile-text">
                        <i className='bx bx-user-circle'></i>
                    </span>
                    <p className="text" id="profile-text">profile</p>
                </div>

                <div className="option" id="order" onClick={() => navigateToPage('order.ejs')}>
                    <span className="icon">
                        <i className="bx bx-basket"></i>
                    </span>
                    <p className="text">order</p>
                </div>

                <div className="option" id="mybag" onClick={() => navigateToPage('mybag.ejs')}>
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
