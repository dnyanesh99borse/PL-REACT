import React, { useEffect, useState } from "react";
import '../engineering/courseandsem.css';
import Header from "../header/header";

const CourseAndSem = () => {
    const [courses, setCourses] = useState([]);

    // Simulate fetching data from a REST API
    useEffect(() => {
        // Mock data (replace this with actual API call)
        const fetchData = async () => {
            const response = [
                {
                    id: 1,
                    image:require("../assets/cs.jpg"),
                    shortName: "C.S.",
                    fullName: "Computer Science"
                },
                {
                    id: 2,
                    image: require("../assets/ce.jpg"),
                    shortName: "C.E.",
                    fullName: "Computer Engineering"
                },
                {
                    id:3,
                    image:require("../assets/IT.jpg"),
                    shortName: "I.T.",
                    fullName: "Information Technology"
                },
                {
                    id:5,
                    image:require("../assets/ds.jpg"),
                    shortName: "D.S.",
                    fullName: "Data Science"
                },
                {
                    id: 2,
                    image: require("../assets/AI.jpg"),
                    shortName: "A.I.",
                    fullName: "Artificial Intelligence"
                },
                {
                    id:6,
                    image:require("../assets/mbatech.jpg"),
                    shortName: "MBA Tech",
                    fullName: "Management & Technology / Integrated"
                },
                {
                    id:7,
                    image:require("../assets/m.jpg"),
                    shortName: "M.",
                    fullName: "Mechantronics"
                },
                {
                    id:8,
                    image:require("../assets/cse.jpg"),
                    shortName: "C.S.E.",
                    fullName: "Cyber Security"
                }
            ];
            setCourses(response);
        };
        fetchData();
    }, []);

    return (
        <div className="select">
            <div className="header">
                <Header />
            </div>

            <div className="container">
                <p id="title">Empowering Minds, Shaping Futures.</p>

                <div className="mainbox">
                    <div className="cleft">
                        <p id="line" >Your Course</p>
                        <div className="course-container">
                            {courses.map((course) => (
                                <div className="coursebox" key={course.id}>
                                    <div className="img">
                                        <img src={course.image} alt={`${course.shortName}`} />
                                    </div>
                                    <div className="name">
                                        <p className="short-name">{course.shortName}</p>
                                        <p className="full-name">{course.fullName}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="cright">
                        <p id="line">Your Semester</p>
                        <div className="semester-grid">
                            {Array.from({ length: 10 }, (_, i) => (
                                <div key={i} className="semester-box">
                                    Semester {i + 1}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseAndSem;
