import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './home.css';


const Home = () => {

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
const suggestionRef = useRef(null);
const navigate = useNavigate();

// Close suggestions on full match
useEffect(() => {
    if (schools.includes(school.trim())) {
        setFilteredSchools([]); // Clear school suggestions
    }
    if (courses.includes(course.trim())) {
        setFilteredCourses([]); // Clear course suggestions
    }
}, [school, course]);

// Normalize input for case-insensitive and flexible matching
const normalizeInput = (input) => {
    return input
        .toLowerCase()
        .replace(/[\.,]/g, "") // Remove commas, periods, etc.
        .replace(/\s+/g, " ") // Replace multiple spaces with a single space
        .trim(); // Remove leading/trailing spaces
};

const filterSuggestions = (type, value) => {
    const normalizedValue = normalizeInput(value);

    if (type === "school") {
        setFilteredSchools(
            schools.filter((item) =>
                normalizeInput(item).includes(normalizedValue)
            )
        );
    } else if (type === "course") {
        setFilteredCourses(
            courses.filter((item) =>
                normalizeInput(item).includes(normalizedValue)
            )
        );
    }
};

// Hide suggestions when clicking outside
useEffect(() => {
    const handleClickOutside = (event) => {
        if (
            suggestionRef.current &&
            !suggestionRef.current.contains(event.target)
        ) {
            setFilteredSchools([]); // Clear school suggestions
            setFilteredCourses([]); // Clear course suggestions
        }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);


// Logic for selecting a suggestion value inside the input field
const handleSchoolSelect = (selectedSchool) => {
    setSchool(selectedSchool); // Update the input value
    setFilteredSchools([]); // Clear the suggestions
};

const handleCourseSelect = (selectedCourse) => {
    setCourse(selectedCourse); // Update the input value
    setFilteredCourses([]); // Clear the suggestions
};



// Redirect logic with flexible matching
const handleEnter = () => {
    const normalizedSchool = normalizeInput(school);
    const normalizedCourse = normalizeInput(course);

    if (
        (normalizedSchool === "nmims shirpur" ||
            normalizedSchool === "nmims, shirpur") &&
        normalizedCourse === "engineering"
    ) {
        navigate("/courseandsem");
    } else {
        alert("Please enter valid school and course values!");
    }
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

                    {/*-------------------home university and course form section starts------------------ */}

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
                                autoComplete="off"
                            />
                            <label className="form-label">University/College</label>
                            {filteredSchools.length > 0 && (
                                <div className="suggestions" ref={suggestionRef}>
                                    {filteredSchools.map((s, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleSchoolSelect(s)} // Update the input value on selection
                                            style={{
                                                padding: '8px',
                                                cursor: 'pointer',
                                                borderBottom: '1px solid #ccc',
                                            }}
                                        >
                                            {s}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <h1 className="title two">Select Your Course</h1>
                        <div className="form-group" ref={suggestionRef}>
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
                            <button type="submit" onClick={handleEnter}>
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
        </section >
    );
};



export default Home;






