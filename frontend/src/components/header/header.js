import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Header() {
    /*the logic of the menutoggle button starts here */
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        // Check if the window width is <= 600
        if (window.innerWidth <= 600) {
            setMenuOpen((prevMenuOpen) => !prevMenuOpen);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 600) {
                setMenuOpen(false); // Close the menu on larger screens
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    // Declare state for dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Load theme from localStorage on initial mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        } else {
            localStorage.setItem('theme', 'light'); // Default to light mode
        }
    }, []);

    // Function to toggle theme
    const toggleTheme = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('theme', newMode ? 'dark' : 'light');

            // Apply styles based on the new mode
            if (newMode) {
                document.body.style.backgroundColor = 'black'; // Set background to black
                document.body.style.color = '#ffffff'; // Set text color to white
            } else {
                document.body.style.backgroundColor = 'white'; // Set background to white
                document.body.style.color = '#000000'; // Set text color to black
            }

            return newMode; // Return the new mode
        });
    };





    const navigate = useNavigate();


    return (
        <>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Passlog</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
                />
                <link
                    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Concert+One&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
                />
                <link rel="stylesheet" href="/stylesheets/styles.css" />
            </head>



            <div className="header">
                <div className="nav">
                    <a href="#home" className="logo">
                        PASSLOG
                    </a>

                    {/* Search bar section */}
                    <div
                        className="search-container"
                        title="Discover a comprehensive range of resources, from NEET, JEE, UPSC, MPSC,
              and academic courses to arts, dance, music, magazines, products, news,
              and library materials. Unlock your potential and dive into a world where
              your passion meets excellence with Passlog."
                    >
                        <input
                            type="text"
                            className="search-box"
                            id="search"
                            placeholder="Search Resources here..."
                        />
                        <i className="bx bx-search-alt-2"></i>
                    </div>

                    <nav className="navbar">
                        <a href="#home" title="home">
                            <i className="bx bx-home-smile"></i>Home
                        </a>
                        <a href="#about" title="About passlog">
                            <i className="bx bxs-down-arrow"></i>About
                        </a>
                        <a href="#keys" title="Keys">
                            <i className="bx bx-key bx-rotate-90"></i>Keys
                        </a>
                        <a href="#contact" title="Contact us">
                            <i className="bx bxs-contact"></i>Contact
                        </a>


                        <button onClick={toggleTheme} className="theme-toggle">
                            {isDarkMode ? <i className='bx bxs-bulb'></i> : <i className='bx bx-bulb'></i>}
                        </button>

                        {/* Menu section with clickable icon */}
                        <p className="menu" title="menulist" onClick={toggleMenu}>
                            <i className={`bx ${menuOpen ? 'bx bxs-objects-vertical-bottom' : 'bx bxs-objects-vertical-top'}`}></i>
                        </p>

                        <div className="signinbtn">
                            <button className="signup" title="Signup" onClick={() => navigate('/signup')}>
                                Signup
                            </button>
                            <button className="login" title="Login" onClick={() => navigate('/login')}>
                                Login
                            </button>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Conditionally rendered menulist based on state */}
            <div className="menulist" style={{ display: menuOpen && window.innerWidth <= 600 ? 'block' : 'none' }}>
                <ul>
                    <li>
                        <a href="#profile" title="profile">
                            profile<i className="bx bx-user-circle"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#home" title="home">
                            Home<i className="bx bx-home-smile"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#about" title="About passlog">
                            About<i className="bx bxs-down-arrow"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#keys" title="Keys">
                            Keys<i className="bx bxs-key"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#contact" title="Contact us">
                            Contact<i className="bx bxs-contact"></i>
                        </a>
                    </li>
                </ul>
            </div>

        </>
    );
}

export default Header;
