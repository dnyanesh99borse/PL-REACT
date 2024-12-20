import React, { useState } from "react";
import "../IT1STSEM/IT1stsem.css"; // Import the Calculus component
import Physics from "../IT1STSEM/physics"; // Import the Physics component
import Programming from "./pps"; // Import the Programming component
import Biology from "./biology"; // Import the Biology component
import Ethics from "./pe"; // Import the Professional Ethics component
import CriticalThinking from "./ct"; // Import the Critical Thinking component
import Graphics from "./egd"; // Import the Engineering Graphics component
import Header from "../../../header/header";
import RollesTheorem from "../IT1STSEM/CALCULUS//rollesthm";

const TOPICDISPLAY = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("ROLLE'S THEOREM"); // Default subject

  const toggleSubbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Dynamically render the selected component
  const renderContent = () => {
    switch (selectedSubject) {
      case "rolle's theorem":
        return <RollesTheorem />;
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
    <>
      <div className="header">
        <Header />
      </div>
      <div className="maindisplay">
        <div className="top">
          <p>
             CALCULUS{" "}
            <i
              className={`bx bxs-down-arrow ${isCollapsed ? "rotate" : ""}`}
              onClick={toggleSubbar}
            />
          </p>
          <div className="subname">unit-01: {selectedSubject.toUpperCase()}</div>
        </div>

        <div className="subdisplay">
          <div className={`subbar ${isCollapsed ? "hide" : ""}`}>
            <ul>
              <li onClick={() => setSelectedSubject("rolle's theorem")}>ROLLE'S THEOREM</li>
              <li onClick={() => setSelectedSubject("LAGRANGE'S MEAN VALUE THEOREM")}>LAGRANGE'S MEAN VALUE THEOREM</li>
              <li onClick={() => setSelectedSubject("CAUCHY'S MEAN VALUE THEOREM")}>
                CAUCHY'S MEAN VALUE THEOREM
              </li>
              <li onClick={() => setSelectedSubject("CONVERGENCE OF SEQUENCES AND SERIES")}>
                CONVERGENCE OF SEQUENCES AND SERIES
              </li>
              <li onClick={() => setSelectedSubject("TAYLOR'S AND MACLAURIN'S SERIES EXPANSION")}>
                TAYLOR'S AND MACLAURIN'S SERIES EXPANSION
              </li>
              <li onClick={() => setSelectedSubject("INTERMEDIATE FORMS")}>
                INTERMEDIATE FORMS
              </li>
              <li onClick={() => setSelectedSubject("L'HOSTPITAL'S RULE")}>
                L'HOSTPITAL'S RULE
              </li>
            </ul>
          </div>

          <div className={`sidesec ${isCollapsed ? "expand" : ""}`}>
            <div className="content">{renderContent()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TOPICDISPLAY;
