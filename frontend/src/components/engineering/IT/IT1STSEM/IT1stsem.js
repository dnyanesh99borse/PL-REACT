import React, { useState, useEffect } from "react";
import "../IT1STSEM/IT1stsem.css";
import Calculus from "./CALCULUS/calculus"; // Import the Calculus component
import Header from "../../../header/header";
import { useLocation } from "react-router-dom";
import axiosInstance from "../../../api/axiosInstance";



const IT1STSEM = () => {

  const [getSubjects, setSubjects] = useState([])
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("CALCULUS"); // Default subject

  // Get the location state
  const location = useLocation();
  const { selectedCourseId, selectedSemesterId } = location.state || {};
  const { item, schema } = location.state || {};





// Fetch the subjects
  useEffect(() => {
    const fetchSubjects = async () => {
      if(selectedCourseId && selectedSemesterId) {
        try {
          const response = await axiosInstance.get(`Get/Subjects/${selectedCourseId}/${selectedSemesterId}`);
          setSubjects(response.data.subjects);
          console.log('Subjects:', response.data.subjects);
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      }
    }
    fetchSubjects();
  }, []);

  // Set the selected subject
  useEffect(() => {
    if (item) {
      setIsCollapsed(!isCollapsed);
      setSelectedSubject(item);
    }
  }, [item]); 


  // Toggle the subbar
  const toggleSubbar = () => {
    setIsCollapsed(!isCollapsed);
  };


  

  // Dynamically render the selected component
  const renderContent = () => {
    return <Calculus subject={selectedSubject} />;
  };

  // Return the JSX
  return (
    <div className="sembody">

    {/* Add Header */}
      <div className="header">
        <Header />
      </div>
      {/* side subject bar */}
      <div className="maindisplay">
        <div className="top">
          <p>
            I.T. 1ST SEM{" "}
            <i
              className={`bx bxs-down-arrow ${isCollapsed ? "rotate" : ""}`}
              onClick={toggleSubbar}
            />
          </p>
          <div className="subname">{selectedSubject.toUpperCase()}</div>
        </div>

        <div className="subdisplay">
          <div className={`subbar ${isCollapsed ? "hide" : ""}`}>
            <ul>
              {getSubjects.map((subject, index) => (
                <li
                  key={index} // Add a unique key
                  onClick={() => setSelectedSubject(subject)} // Pass the subject to the setter
                  
                >
                  {subject} {/* Dynamically display subject name */}
                </li>
              ))}


            </ul>
          </div>

          <div className={`sidesec ${isCollapsed ? "expand" : ""}`}>
            <div className="content">{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IT1STSEM;
