import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../engineering/courseandsem.css";
import Header from "../header/header";
import axiosInstance from "../api/axiosInstance"; // Import the instance


const CourseAndSem = () => {
    const [courses, setCourses] = useState([]);
    const [getbranches, setBranches] = useState([]);
    const [selectedCourseId, setSelectedCourseId] = useState(null);
    const [selectedSemesterId, setSelectedSemesterId] = useState(null);
    const navigate = useNavigate(); // Hook for navigation

    const location = useLocation();
    const { school, course } = location.state || {};

    useEffect(() => {
        const fetchBranches = async () => {
            try {
                const response = await axiosInstance.get(`/Get/Branch/${school}/${course}`);
                setBranches(response.data.branches);
                console.log('Branches:', response.data);
            } catch (error) {
                console.error('Error fetching suggestions:', error);
            }
        }
        fetchBranches();
    }, []);





    // Handle course click
    const handleCourseClick = (name) => {
        setSelectedCourseId(name);
    };

    // Handle semester click
    const handleSemesterClick = (semester) => {
        setSelectedSemesterId(semester);
    };

    // Redirect to IT1STSEM page
    const nextRedirect = () => {
        if (selectedCourseId === "Information Technology" && selectedSemesterId === 1) {
            navigate("/IT1stsem"); // Update the route as per your routing configuration
        }
    };

    // Simulate fetching data (replace with API call if needed)
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = [
    //             { id: "CS", image: require("../assets/cs.jpg"), shortName: "C.S.", fullName: "Computer Science" },
    //             { id: "CE", image: require("../assets/ce.jpg"), shortName: "C.E.", fullName: "Computer Engineering" },
    //             { id: "IT", image: require("../assets/IT.jpg"), shortName: "I.T.", fullName: "Information Technology" },
    //             { id: "DS", image: require("../assets/ds.jpg"), shortName: "D.S.", fullName: "Data Science" },
    //             { id: "AI", image: require("../assets/AI.jpg"), shortName: "A.I.", fullName: "Artificial Intelligence" },
    //             { id: "MBATECH", image: require("../assets/mbatech.jpg"), shortName: "MBA Tech", fullName: "Management & Technology" },
    //             { id: "M", image: require("../assets/m.jpg"), shortName: "M.", fullName: "Mechatronics" },
    //             { id: "CSE", image: require("../assets/cse.jpg"), shortName: "C.S.E.", fullName: "Cyber Security" },
    //         ];
    //         setCourses(response);
    //     };
    //     fetchData();
    // }, []);

    return (
        <div className="select">
            <div className="header">
                <Header />
            </div>

            <div className="container">
                <p id="title">Empowering Minds, Shaping Futures.</p>

                <div className="mainbox">
                    <div className="cleft">
                        <p id="line">Your Branch</p>

                        <div className="courses">
                            <div className="course-container">
                                {getbranches.map((branch, index) => (
                                    
                                    <div
                                        className="coursebox"
                                        key={index} // Use the index or branch.id as the key
                                        onClick={() => handleCourseClick(branch)} // Pass the branch to handleCourseClick
                                        style={{
                                            boxShadow: "0px 4px 8px rgba(200, 198, 198, 0.1)",
                                            backgroundColor: selectedCourseId === branch ? "rgb(202, 241, 202)" : "rgba(113, 147, 128, 0.44)",
                                            color: selectedCourseId === branch ? "black" : "rgba(33, 32, 32, 0.964)",
                                            cursor: "pointer",
                                            transition: "0.3s ease",
                                            transform: selectedCourseId === branch ? "scale(1.01)" : "scale(1)",
                                            border: "1px solid rgba(103, 103, 103, 0.95)",
                                        }}
                                    >
                                        <div className="img">
                                            <img src={branch.image} alt={branch.shortName} />
                                        </div>
                                        <div className="name">
                                            {/* <p className="short-name">{branch.shortName}</p> */}
                                            {/* Optionally, you can display more details */}
                                            <p className="full-name">{branch}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>

                    <div className="cright">
                        <p id="line">Your Semester</p>
                        <div className="semester">
                            <div className="semester-grid">
                                {Array.from({ length: 10 }, (_, i) => (
                                    <div
                                        key={i}
                                        className="semester-box"
                                        onClick={() => handleSemesterClick(i + 1)}
                                        style={{
                                            boxShadow: "0px 4px 8px rgba(200, 198, 198, 0.1)",
                                            backgroundColor: selectedSemesterId === i + 1 ? "rgb(202, 241, 202)" : "rgba(113, 147, 128, 0.44)",
                                            color: selectedSemesterId === i + 1 ? "black" : "rgba(33, 32, 32, 0.964)",
                                            cursor: "pointer",
                                            transition: "0.3s ease",
                                            transform: selectedSemesterId === i + 1 ? "scale(1.03)" : "scale(1)",
                                            border: "1px solid rgba(103, 103, 103, 0.95)",
                                        }}
                                    >
                                        Semester {i + 1}
                                    </div>
                                ))}
                            </div>

                            {/* Next Button */}
                            <button
                                className="nextbtn"
                                onClick={nextRedirect}
                                style={{
                                    backgroundColor: selectedCourseId && selectedSemesterId ? "rgb(34, 139, 34)" : "gray",
                                    color: "white",
                                    cursor: selectedCourseId && selectedSemesterId ? "pointer" : "not-allowed",
                                    transition: "0.3s ease",
                                    transform: selectedCourseId && selectedSemesterId ? "scale(1.05)" : "scale(1)",
                                }}
                                disabled={!selectedCourseId || !selectedSemesterId}
                            >
                                Next
                            </button>
                        </div>
                    </div>

                    <button className="nextbtn600px"
                        onClick={nextRedirect}
                        style={{
                            backgroundColor: selectedCourseId && selectedSemesterId ? "rgb(34, 139, 34)" : "gray",
                            color: "white",
                            cursor: selectedCourseId && selectedSemesterId ? "pointer" : "not-allowed",
                            transition: "0.3s ease",
                            transform: selectedCourseId && selectedSemesterId ? "scale(1.05)" : "scale(1)",
                        }}
                        disabled={!selectedCourseId || !selectedSemesterId}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseAndSem;



