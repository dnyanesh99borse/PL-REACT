import React from 'react';
import './home.css';

const Home = () => {
    const filterSuggestions = (inputId) => {
        // Implement your suggestion filtering logic here
    };

    const checkAndRedirect = () => {
        // Implement your redirection logic here
    };

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
                        <span className="typing"></span>
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
                            onInput={() => filterSuggestions('school')}
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
                            onInput={() => filterSuggestions('course')}
                            autoComplete="off"
                        />
                        <label className="form-label">Course</label>
                        <div className="suggestions" id="course-suggestions"></div>
                    </div>

                    <div className="enter">
                        <button onClick={checkAndRedirect}>
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

