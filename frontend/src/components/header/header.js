import React, { useState, useEffect } from 'react';
import './style.css';

function Header() {
    {/*the logic of the menutoggle button starts here */}
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

            <body>
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
                                placeholder="Search Resources here.!"
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

                            <div className="signinbtn">
                                <button className="signup" title="signup">
                                    Signup
                                </button>
                                <button className="login" title="Login">
                                    Login
                                </button>
                            </div>

                            {/* Menu section with clickable icon */}
                            <p className="menu" title="menulist" onClick={toggleMenu}>
                                Menu <i className={`bx ${menuOpen ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
                            </p>
                        </nav>
                    </div>
                </div>

                {/* Conditionally rendered menulist based on state */}
                <div className="menulist" style={{ display: menuOpen && window.innerWidth <= 600 ? 'block' : 'none' }}>
                    <ul>
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
            </body>
        </>
    );
}

export default Header;
