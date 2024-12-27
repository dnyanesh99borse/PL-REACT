import React, { useState, useEffect } from "react";
import "../IT1STSEM/IT1stsem.css";
import Calculus from "./CALCULUS/calculus"; // Import the Calculus component
import Physics from "../IT1STSEM/physics"; // Import the Physics component
import Programming from "./pps"; // Import the Programming component
import Biology from "./biology"; // Import the Biology component
import Ethics from "./pe"; // Import the Professional Ethics component
import CriticalThinking from "./ct"; // Import the Critical Thinking component
import Graphics from "./egd"; // Import the Engineering Graphics component
import Header from "../../../header/header";
import { useLocation } from "react-router-dom";
import axiosInstance from "../../../api/axiosInstance";



const IT1STSEM = () => {

  const [getSubjects, setSubjects] = useState([])
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("CALCULUS"); // Default subject


  const location = useLocation();
  const { selectedCourseId, selectedSemesterId } = location.state || {};
  const { item, schema } = location.state || {};
  console.log("Item:", item);





  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axiosInstance.get(`Get/Subjects/${selectedCourseId}/${selectedSemesterId}`);
        setSubjects(response.data.subjects);
        console.log('Subjects:', response.data.subjects);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    }
    fetchSubjects();
  }, []);

  useEffect(() => {
    if (item) {
      setIsCollapsed(!isCollapsed);
      setSelectedSubject(item);
    }
  }, [item]); 


  const toggleSubbar = () => {
    setIsCollapsed(!isCollapsed);
  };


  

  // Dynamically render the selected component
  const renderContent = () => {
    console.log("slectedsubject:",selectedSubject);
    switch (selectedSubject) {
      case "CALCULUS":
        return <Calculus />;
      case "PHYSICS":
        return <Physics />;
      case "PROGRAMMING FOR PROBLEM SOLVING":
        return <Programming />;
      case "ELEMENTS OF BIOLOGY":
        return <Biology />;
      case "PROFESSIONAL ETHICS":
        return <Ethics />;
      case "CRITICAL THINKING":
        return <CriticalThinking />;
      case "ENGINEERING GRAPHICS AND DESIGNING":
        return <Graphics />;
      default:
        return <p>Select a subject to display content.</p>;
    }
  };

  return (
    <div className="sembody">
      <div className="header">
        <Header />
      </div>
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
                  // style={{
                  //   cursor: "pointer",
                  //   padding: "10px",
                  //   margin: "5px 0",
                  //   backgroundColor: "#f0f0f0",
                  //   border: "1px solid #ccc",
                  //   borderRadius: "4px",
                  // }}
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
