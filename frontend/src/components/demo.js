import React, { useState, useEffect } from "react";
import axios from "axios";

const CollegeCourseSelector = () => {
    const [colleges, setColleges] = useState([]);
    const [selectedCollege, setSelectedCollege] = useState("");
    const [courses, setCourses] = useState([]);
    const [loadingCourses, setLoadingCourses] = useState(false);

    // Fetch colleges on component mount
    useEffect(() => {
        const fetchColleges = async () => {
            try {
                const response = await axios.get("/api/colleges"); // Replace with your API endpoint
                setColleges(response.data);
            } catch (error) {
                console.error("Error fetching colleges:", error);
            }
        };
        fetchColleges();
    }, []);

    // Fetch courses when a college is selected
    const fetchCourses = async (collegeId) => {
        setLoadingCourses(true);
        try {
            const response = await axios.get(`/api/colleges/${collegeId}/courses`); // Replace with your API endpoint
            setCourses(response.data);
        } catch (error) {
            console.error("Error fetching courses:", error);
        } finally {
            setLoadingCourses(false);
        }
    };

    const handleCollegeChange = (event) => {
        const collegeId = event.target.value;
        setSelectedCollege(collegeId);
        if (collegeId) {
            fetchCourses(collegeId);
        } else {
            setCourses([]);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>College and Courses Selector</h1>
            
            {/* College Dropdown */}
            <div className="form-group">
                <label htmlFor="college">Select College:</label>
                <select
                    id="college"
                    value={selectedCollege}
                    onChange={handleCollegeChange}
                    style={{ display: "block", margin: "10px 0", padding: "8px", width: "100%" }}
                >
                    <option value="">-- Select a College --</option>
                    {colleges.map((college) => (
                        <option key={college.id} value={college.id}>
                            {college.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Courses List */}
            <div className="courses-section" style={{ marginTop: "20px" }}>
                {loadingCourses ? (
                    <p>Loading courses...</p>
                ) : (
                    <>
                        <h2>Courses</h2>
                        {courses.length > 0 ? (
                            <ul>
                                {courses.map((course) => (
                                    <li key={course.id}>{course.name}</li>
                                ))}
                            </ul>
                        ) : (
                            selectedCollege && <p>No courses available for this college.</p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default CollegeCourseSelector;
