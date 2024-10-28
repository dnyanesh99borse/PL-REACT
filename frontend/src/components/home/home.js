import React, { useState, useEffect } from 'react';
import './home.css';

const Home = () => {
    const words = ["𝕿𝖍𝖊 𝕾𝖚𝖈𝖈𝖊𝖘𝖘.!", "Lectures", "Tutorials", "Notes", "Free Resources"];
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        /*logic for the typing texxt*/
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


    return (
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
                            // onInput={() => filterSuggestions('school')}
                            autoComplete="off"
                        />
                        <label className="form-label">University/College</label>
                        <div className="suggestions" id="school-suggestions"></div>
                    </div>

                    <h1 className="title two">Select Your Course</h1>
                    <div className="form-group">
                        <input
                            type="text"
                            id="course"
                            name="course"
                            placeholder="Enter Course"
                            // onInput={() => filterSuggestions('course')}
                            autoComplete="off"
                        />
                        <label className="form-label">Course</label>
                        <div className="suggestions" id="course-suggestions"></div>
                    </div>

                    <div className="enter">
                        {/* onClick={checkAndRedirect} */}
                        <button>
                            <i className="bx bx-right-arrow-alt"></i>
                            <span>Enter</span>
                        </button>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Home;

