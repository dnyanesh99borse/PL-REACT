import React, { useRef, useState, useEffect } from 'react';
import './home.css';
import '../sliderkeys/keys.css';
import '../passkeys/passkey.css';
import '../whywe/whywe.css';
import '../contactus/contactus.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

import studymaterial from '../assets/studymaterial.png'
import schemesImage from '../assets/schemes.jpg';

import learningImage from '../assets/whywe.svg';
const Home = () => {

    /*----------LOGIC FOR SHOWING SUGGESTIONS IN FORM------------*/
    const schools = [
        "NMIMS, Mumbai",
        "NMIMS, Shirpur",
        "RC Patel, Shirpur",
        "D.Y. Patil, Pune",
        "Sandeep University, Nashik",
        "Fergusson College, Pune"
    ];

    const courses = [
        "Engineering",
        "Pharmacy",
        "BCA",
        "Pharmatech",
        "BSc"
    ];


    const [school, setSchool] = useState('');
    const [course, setCourse] = useState('');
    const [filteredSchools, setFilteredSchools] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [formSection, setFormSection] = useState(null); {/* i think this is that enter button logic of form filling--- */ }


    const filterSuggestions = (type, value) => {
        if (type === 'school') {
            setFilteredSchools(
                schools.filter(item => item.toLowerCase().includes(value.toLowerCase()))
            );
        } else if (type === 'course') {
            setFilteredCourses(
                courses.filter(item => item.toLowerCase().includes(value.toLowerCase()))
            );
        }
    };

    // Hide suggestions when the input loses focus
    const handleBlur = (type) => {
        if (type === 'school') {
            setFilteredSchools([]);  // Clear the suggestions for schools when input loses focus
        } else if (type === 'course') {
            setFilteredCourses([]);  // Clear the suggestions for courses when input loses focus
        }
    };

    const handleSchoolSelect = (selectedSchool) => {
        setSchool(selectedSchool);
        setFilteredSchools([]);
    };

    const handleCourseSelect = (selectedCourse) => {
        setCourse(selectedCourse);
        setFilteredCourses([]);
    };



    /*---------logic for the typing texxt------------*/
    const words = ["𝕿𝖍𝖊 𝕾𝖚𝖈𝖈𝖊𝖘𝖘.!", "Lectures", "Tutorials", "Notes", "Free Resources"];
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {

        let typingInterval = setInterval(() => {
            const currentWord = words[wordIndex];

            if (!isDeleting) {
                setText((prev) => currentWord.slice(0, prev.length + 1));
                if (text === currentWord) {
                    setIsDeleting(true);
                    setTypingSpeed(310); // Delay before starting deletion
                }
            } else {
                setText((prev) => currentWord.slice(0, prev.length - 1));
                if (text === '') {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                    setTypingSpeed(0); // Speed for typing
                }
            }
        }, typingSpeed);

        return () => clearInterval(typingInterval);
    }, [text, isDeleting, typingSpeed, wordIndex, words]);
    /*----------------------------------------------------------------------- */

    // ---------------------that features displaying squares section starts--------------------
    // Data for each counter box
    const counterData = [
        { icon: "fas fa-server", number: "150+", label: "Resources" },
        { icon: "fas fa-user-graduate", number: "1300+", label: "Students" },
        { icon: "fas fa-chalkboard-user", number: "100%[PL]", label: "Pass Data" },
        { icon: "fas fa-face-smile", number: "100%", label: "Satisfaction" }
    ];

    // Reusable Counter Box component
    const CounterBox = ({ icon, number, label }) => (
        <div className="box">
            <i className={icon}></i>
            <div className="content">
                <h3>{number}</h3>
                <p>{label}</p>
            </div>
        </div>
    );


    {/*------logic for the cards of sliderkeys sections------------*/ }
    const cardData = [
        { imgSrc: require('../assets/notes.svg').default, title: "NOTES", subtitle: "All Subjects" },
        { imgSrc: require('../assets/assignments.svg').default, title: "TUTORIALS", subtitle: "Calculus, LADE, DM.." },
        { imgSrc: require('../assets/tutorials.svg').default, title: "ASSIGNMENTS", subtitle: "All Subjects" },
        { imgSrc: require('../assets/lectures2.svg').default, title: "LECTURES", subtitle: "Lectures (audio, visuals)" },
        { imgSrc: require('../assets/que paper.svg').default, title: "QUESTION PAPERS", subtitle: "SE, MTT, ET, PYQ's" },
        { imgSrc: require('../assets/passlog.svg').default, title: "PASSLOG", subtitle: "100% Guaranteed Data to Pass" }
    ];



    /*----------------logic for the keys sliding effect starts here-----------------*/
    const wrapperRef = useRef(null);
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startScrollLeft, setStartScrollLeft] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    let timeoutId;

    useEffect(() => {
        const carousel = carouselRef.current;
        const firstCardWidth = carousel.querySelector('.card').offsetWidth;
        const cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

        // Duplicate cards for infinite scroll effect
        const carouselChildren = [...carousel.children];
        carouselChildren.slice(-cardPerView).reverse().forEach((card) => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });
        carouselChildren.slice(0, cardPerView).forEach((card) => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        // Set initial scroll position to avoid showing duplicated items on first view
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");

        // Event Listeners
        const handleMouseDown = (e) => {
            setIsDragging(true);
            carousel.classList.add("dragging");
            setStartX(e.pageX);
            setStartScrollLeft(carousel.scrollLeft);
        };

        const handleMouseMove = (e) => {
            if (!isDragging) return;
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            carousel.classList.remove("dragging");
        };

        const handleScroll = () => {
            if (carousel.scrollLeft === 0) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
                carousel.classList.remove("no-transition");
            } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove("no-transition");
            }
            clearTimeout(timeoutId);
            if (!wrapperRef.current.matches(":hover")) autoPlay();
        };

        const autoPlay = () => {
            if (window.innerWidth < 800 || !isAutoPlay) return;
            timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
        };

        autoPlay();

        // Event Listeners for dragging
        carousel.addEventListener("mousedown", handleMouseDown);
        carousel.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        carousel.addEventListener("scroll", handleScroll);
        wrapperRef.current.addEventListener("mouseenter", () => clearTimeout(timeoutId));
        wrapperRef.current.addEventListener("mouseleave", autoPlay);

        return () => {
            // Cleanup event listeners
            carousel.removeEventListener("mousedown", handleMouseDown);
            carousel.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
            carousel.removeEventListener("scroll", handleScroll);
        };
    }, [isDragging, isAutoPlay, startX, startScrollLeft]);

    const scrollCarousel = (direction) => {
        const firstCardWidth = carouselRef.current.querySelector('.card').offsetWidth;
        carouselRef.current.scrollLeft += direction === "left" ? -firstCardWidth : firstCardWidth;
    };



    /*------------------PASSKEYS SECTION LOGIC STARTS HERE----------------------*/
    const PassItem = ({ imgSrc, imgId, title, buttonId }) => (
        <div className="pass">
            <div className="img" id={imgId}>
                <img src={imgSrc} alt="" />
            </div>
            <button className='tag' id={buttonId}>
                <p>{title} </p>
            </button>
        </div>
    );


    const passItems = [
        { imgSrc: require('../assets/to do.svg').default, imgId: 'todoButton1', title: 'To Do list', buttonId: 'todoButton' },
        { imgSrc: require('../assets/cgpacalci.svg').default, imgId: 'cgpacalci1', title: 'C.G.P.A', subtitle: 'calculator', buttonId: 'cgpacalci' },
        { imgSrc: require('../assets/dailynotes.svg').default, imgId: 'notesbutton1', title: 'NOTES', buttonId: 'notesbutton' },
        { imgSrc: require('../assets/scicalci.svg').default, imgId: 'sci calci1', title: 'scientific calci', buttonId: 'sci calci' },
        { imgSrc: studymaterial, title: 'study material', storeImg: 'assets/offer 1.png' },
        { imgSrc: schemesImage, imgId: 'students-schemes1', title: 'student Schemes', buttonId: 'students-schemes' },
        { imgSrc: require('../assets/refer.svg').default, title: 'refer and Earn' },
        { imgSrc: require('../assets/library.svg').default, title: 'Library' },
    ];

    /*------------------CONTACT FORM SECTION LOGIC STARTS HERE----------------------*/
    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement form submission logic here
        console.log("Form submitted!");
    };







    /*-----------------------structuring starts here---------------------------- */
    return (
        <section className='main'>
            <section className="home" id="home">
                <div className='left'>
                    <div className="homebgimage">
                        {/*contact us button*/}
                        <a
                            href="#contact"
                            className="btn"
                            style={{ textDecoration: 'none' }}
                            title="Reach out to us—we're always here for you."
                        >
                            Contact us
                        </a>

                        <img
                            src={require('../assets/main.svg').default}
                            alt="Reading illustration"
                        />
                    </div>
                </div>

                <div className="right">
                    <div className="content">
                        <h3>LEARN TO LEARN</h3>
                        <div className="container">
                            <span className="typing">{text}</span>
                        </div>
                    </div>

                    <div className="searchbox">
                        <input
                            className="searchInput"
                            type="text"
                            placeholder="search Academics, passion, courses, tech"
                        />
                        <span className="icon">
                            <i className="bx bx-search-alt bx-tada"></i>
                        </span>
                    </div>

                    <section className="info" id="info">
                        <h1 className="title">Select Your University/College</h1>
                        <div className="form-group">
                            <input
                                type="text"
                                id="school"
                                name="school"
                                placeholder="Enter University/College"
                                value={school}
                                onChange={(e) => {
                                    setSchool(e.target.value);
                                    filterSuggestions('school', e.target.value);
                                }}
                                onBlur={() => handleBlur('school')}  // OnBlur function applied here
                                autoComplete="off"
                            />
                            <label className="form-label">University/College</label>
                            {filteredSchools.length > 0 && (
                                <div className="suggestions">
                                    {filteredSchools.map((s, index) => (
                                        <div key={index} onClick={() => handleSchoolSelect(s)}>
                                            {s}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <h1 className="title two">Select Your Course</h1>
                        <div className="form-group">
                            <input
                                type="text"
                                id="course"
                                name="course"
                                placeholder="Enter Course"
                                value={course}
                                onChange={(e) => {
                                    setCourse(e.target.value);
                                    filterSuggestions('course', e.target.value);
                                }}
                                onBlur={() => handleBlur('course')}  // OnBlur function applied here
                                autoComplete="off"
                            />
                            <label className="form-label">Course</label>
                            {filteredCourses.length > 0 && (
                                <div className="suggestions">
                                    {filteredCourses.map((c, index) => (
                                        <div key={index} onClick={() => handleCourseSelect(c)}>
                                            {c}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="enter">
                            {/* onClick={checkAndRedirect} */}
                            <button >
                                <i className="bx bx-right-arrow-alt"></i>
                                <span>Enter</span>
                            </button>
                        </div>
                    </section>
                </div>
            </section>

            {/* ------------------------Counter Section------------ */}
            <section className="count">
                <div className="box-container">
                    {counterData.map((item, index) => (
                        <CounterBox
                            key={index}
                            icon={item.icon}
                            number={item.number}
                            label={item.label}
                        />
                    ))}
                </div>
            </section>


            {/*---------------------sliderkeys section starts here----------------*/}
            <section className="keys">
                <div className="title">
                    <h1>All The Keys <span>of your Success are here.</span></h1>
                </div>
                <div className="slider" id="keys" ref={wrapperRef}>
                    <i id="left" className="fa-solid fa-angle-left" onClick={() => scrollCarousel("left")}></i>
                    <ul className="carousel" ref={carouselRef}>
                        {cardData.map((card, index) => (
                            <li className="card" key={index}>
                                <div className="img">
                                    <img src={card.imgSrc} alt={card.title} draggable="false" />
                                </div>
                                <h2>{card.title}</h2>
                                <span>{card.subtitle}</span>
                            </li>
                        ))}
                    </ul>
                    <i id="right" className="fa-solid fa-angle-right" onClick={() => scrollCarousel("right")}></i>
                </div>
                <div className="explore">
                    <button><span>Explore All</span></button>
                </div>
            </section>

            {/*---------passkey section starts-----------*/}
            <section className="passkey" id="passkey">
                <h1>Passkey: <span>The Keys of the Success.!</span></h1>
                <div className="passkey-content">
                    {passItems.map((item, index) => (
                        <PassItem
                            key={index}
                            imgSrc={item.imgSrc}
                            imgId={item.imgId}
                            title={item.title}
                            buttonId={item.buttonId}
                            subtitle={item.subtitle}
                            storeImg={item.storeImg}
                        />
                    ))}
                </div>
            </section>


            {/*!--why we section starts--*/}
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

            {/*!--------------CONTACT FORM SECTION STARTS---------------*/}
            <section className="contact" id="contact">
                <div className="container">
                    <h2 className="common-heading">contact <span>us</span></h2>
                </div>

                <div className="row">
                    <div className="image">
                        <img src={require('../assets/contact 3.svg').default} alt="Contact Illustration" />
                    </div>

                    <form onSubmit={handleSubmit}>
                        <span>your name</span>
                        <input
                            type="text"
                            required
                            placeholder="enter your full name"
                            maxLength="50"
                            name="name"
                            className="box"
                        />

                        <span>your email</span>
                        <input
                            type="email"
                            required
                            placeholder="enter your valid email"
                            maxLength="50"
                            name="email"
                            className="box"
                        />

                        <span>your contact</span>
                        <input
                            type="number"
                            required
                            placeholder="enter your contact number"
                            maxLength="10"
                            min="0"
                            name="number"
                            className="box"
                            onKeyPress={(e) => {
                                if (e.target.value.length === 10) e.preventDefault();
                            }}
                        />

                        <span>select course</span>
                        <select name="course" className="box">
                            <option value="" disabled selected>select the course --</option>
                            <option value="computer engineering">computer engineering</option>
                            <option value="computer science">computer science</option>
                            <option value="Information technology">Information technology</option>
                            <option value="artificial intelligence">artificial intelligence</option>
                            <option value="data science">data science</option>
                            <option value="agriculture">agriculture</option>
                            <option value="aviation">aviation</option>
                        </select>

                        <span>your message</span>
                        <textarea
                            name="message"
                            required
                            placeholder="enter your message or question"
                            maxLength="500"
                            className="box"
                            style={{ resize: 'none' }}
                        />

                        <input type="submit" value="send message" className="btn" name="send" />
                    </form>
                </div>
            </section>
            {/*!--------------CONTACT FORM SECTION ENDS---------------*/}
        </section >
        /*-----main section endss------*/
    );
};



export default Home;






