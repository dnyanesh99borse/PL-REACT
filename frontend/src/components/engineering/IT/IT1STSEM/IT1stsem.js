import React, { useState } from "react";
import "../IT1STSEM/IT1stsem.css";
import Calculus from "../IT1STSEM/calculus"; // Import the Calculus component
import Physics from "../IT1STSEM/physics"; // Import the Physics component
import Programming from "./pps"; // Import the Programming component
import Biology from "./biology"; // Import the Biology component
import Ethics from "./pe"; // Import the Professional Ethics component
import CriticalThinking from "./ct"; // Import the Critical Thinking component
import Graphics from "./egd"; // Import the Engineering Graphics component

const IT1STSEM = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("Calculus"); // Default subject

  const toggleSubbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Dynamically render the selected component
  const renderContent = () => {
    switch (selectedSubject) {
      case "Calculus":
        return <Calculus />;
      case "Physics":
        return <Physics />;
      case "Programming for Problem Solving":
        return <Programming />;
      case "Elements of Biology":
        return <Biology />;
      case "Professional Ethics":
        return <Ethics />;
      case "Critical Thinking":
        return <CriticalThinking />;
      case "Engineering Graphics and Designing":
        return <Graphics />;
      default:
        return <p>Select a subject to display content.</p>;
    }
  };

  return (
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
            <li onClick={() => setSelectedSubject("Calculus")}>CALCULUS</li>
            <li onClick={() => setSelectedSubject("Physics")}>PHYSICS</li>
            <li onClick={() => setSelectedSubject("Programming for Problem Solving")}>
              PROGRAMMING FOR PROBLEM SOLVING
            </li>
            <li onClick={() => setSelectedSubject("Elements of Biology")}>
              ELEMENTS OF BIOLOGY
            </li>
            <li onClick={() => setSelectedSubject("Professional Ethics")}>
              PROFESSIONAL ETHICS
            </li>
            <li onClick={() => setSelectedSubject("Critical Thinking")}>
              CRITICAL THINKING
            </li>
            <li onClick={() => setSelectedSubject("Engineering Graphics and Designing")}>
              ENGINEERING GRAPHICS AND DESIGNING
            </li>
          </ul>
        </div>

        <div className={`sidesec ${isCollapsed ? "expand" : ""}`}>
          <div className="content">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default IT1STSEM;
