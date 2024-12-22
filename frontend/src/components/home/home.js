import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from "../api/axiosInstance"; // Import the instance

import './home.css';

const Home = () => {
    const [schools, setSchools] = useState([]);
    const [courses, setCourses] = useState([]);
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);

    const [school, setSchool] = useState('');
    const [course, setCourse] = useState('');
    const [filteredSchools, setFilteredSchools] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);

    const fetchSuggestions = async (input) => {
        if (!input.trim()) {
            setSuggestions([]);
            return;
        }
        setLoading(true);
        try {
            const response = await axiosInstance.get('/Get/suggestions', { params: { query: input } });
            setSuggestions(response.data.suggestions);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchCourses = async (collegeId) => {
        try {
            console.log("collegeId:", collegeId); // Debug
            const response = await axiosInstance.get(`/colleges/${collegeId}/courses`);
            if (response.data && Array.isArray(response.data)) {
                setFilteredCourses(response.data);
                console.log("Courses:", response.data); // Debug
            } else {
                console.error("Unexpected response structure:", response);
            }
        } catch (error) {
            console.error("Error fetching courses:", error.message);
        }
    };
    
    


    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    };

    const debouncedFetchSuggestions = useCallback(debounce(fetchSuggestions, 300), []);
    const debouncedFetchCourses = useCallback(debounce(fetchCourses, 300), []);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        console.log(`Input ID: ${id}, Value: ${value}`); // Debug log
    
        if (id === "school") {
            setSchool(value);
            debouncedFetchSuggestions(value);
        } else if (id === "course") {
            setCourse(value);
            debouncedFetchCourses(value);
        }
    };

    useEffect(() => {
        // Fetch courses when the school is selected
        if (schools.includes(school.trim())) {
            setFilteredSchools([]);
            
        }
    }, [school, schools]);

    const navigate = useNavigate();

    const handleSchoolSelect = (selectedSchool) => {
        setSchool(selectedSchool.name); // Set the selected school
        setSuggestions([]); // Clear the suggestions to hide the suggestion box
        fetchCourses(selectedSchool._id); // Trigger fetching courses based on selected school
       
    };

    const handleCourseSelect = (selectedCourse) => {
        setCourse(selectedCourse);
        setFilteredCourses([]);
    };

    const words = ["𝕿𝖍𝖊 𝕾𝖚𝖈𝖈𝖊𝖘𝖘.!", "Lectures", "Tutorials", "Notes", "Free Resources"];
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const currentWord = words[wordIndex];
        const typingInterval = setInterval(() => {
            if (!isDeleting) {
                setText((prev) => currentWord.slice(0, prev.length + 1));
                if (text === currentWord) {
                    setIsDeleting(true);
                    setTypingSpeed(310);
                }
            } else {
                setText((prev) => currentWord.slice(0, prev.length - 1));
                if (text === '') {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                    setTypingSpeed(0);
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

    const CounterBox = ({ icon, number, label }) => (
        <div className="box">
            <i className={icon}></i>
            <div className="content">
                <h3>{number}</h3>
                <p>{label}</p>
            </div>
        </div>
    );

    return (
        <section className='main'>
            {/* Same structure */}
            <section className="home" id="home">
                <div className='left'>
                    <div className="homebgimage">
                        <a href="#contact" className="btn" style={{ textDecoration: 'none' }} title="Reach out to us—we're always here for you.">
                            Contact us
                        </a>
                        <img src={require('../assets/main.svg').default} alt="Reading illustration" />
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
                        <input className="searchInput" type="text" placeholder="search Academics, passion, courses, tech" />
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
                                onChange={handleInputChange}
                                autoComplete="off"
                            />
                            <label className="form-label">University/College</label>
                            <div className="suggestions">
                                {suggestions.length > 0 ? (
                                    suggestions.map((suggestion) => (
                                        <div
                                            key={suggestion.id}
                                            className="suggestion-item"
                                            onClick={() => handleSchoolSelect(suggestion)}
                                            style={{ padding: "8px", cursor: "pointer", borderBottom: "1px solid #ccc" }}
                                        >
                                            {suggestion.name}
                                        </div>
                                    ))
                                ) : (
                                    !loading && query.length > 2 && (
                                        <div className="no-suggestions" style={{ padding: "8px", color: "#666" }}>
                                            No suggestions available
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        <h1 className="title two">Select Your Course</h1>
                        <div className="form-group">
                            <input
                                type="text"
                                id="course"
                                name="course"
                                placeholder="Enter Course"
                                value={course} // Course input bound to course state
                                onChange={handleInputChange}
                                autoComplete="off"
                            />
                            <label className="form-label">Course</label>
                            <div className="suggestions">
                                {filteredCourses.length > 0 ? (
                                    filteredCourses.map((filteredCourse) => (
                                        <div
                                            key={filteredCourse.id}
                                            className="suggestion-item"
                                            onClick={() => handleCourseSelect(filteredCourse.name)}
                                            style={{ padding: "8px", cursor: "pointer", borderBottom: "1px solid #ccc" }}
                                        >
                                            {filteredCourse.name}
                                        </div>
                                    ))
                                ) : (
                                    !loading && (
                                        <div className="no-suggestions" style={{ padding: "8px", color: "#666" }}>
                                            No suggestions available
                                        </div>
                                    )
                                )}

                            </div>
                        </div>
                        <div className="enter" onClick={() => navigate('/courseandsem', { state: { school, course } })}>
                            <button type="submit">
                                <i className="bx bx-right-arrow-alt"></i>
                                <span>Enter</span>
                            </button>
                        </div>
                    </section>
                </div>
            </section>

            <section className="count">
                <div className="box-container">
                    {counterData.map((item, index) => (
                        <CounterBox key={index} icon={item.icon} number={item.number} label={item.label} />
                    ))}
                </div>
            </section>
        </section>
    );
};

export default Home;
