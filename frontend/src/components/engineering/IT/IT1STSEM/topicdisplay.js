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
      case "lagrange's mean value theorem":
        return <Physics />;
      case "cauchy's mean value theorem":
        return <Programming />;
      case "convergence of sequences and series":
        return <Biology />;
      case "taylor's and maclaurin's series expansion":
        return <Ethics />;
      case "intermediate forms":
        return <CriticalThinking />;
      case "l's hospital rule":
        return <Graphics />;
      default:
        return <RollesTheorem/>;
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
              <li onClick={() => setSelectedSubject("lagrange's mean value theorem")}>LAGRANGE'S MEAN VALUE THEOREM</li>
              <li onClick={() => setSelectedSubject("cauchy's mean value theorem")}>
                CAUCHY'S MEAN VALUE THEOREM
              </li>
              <li onClick={() => setSelectedSubject("convergence of sequences and series")}>
                CONVERGENCE OF SEQUENCES AND SERIES
              </li>
              <li onClick={() => setSelectedSubject("taylor's and maclaurin's series expansion")}>
                TAYLOR'S AND MACLAURIN'S SERIES EXPANSION
              </li>
              <li onClick={() => setSelectedSubject("intermediate forms")}>
                INTERMEDIATE FORMS
              </li>
              <li onClick={() => setSelectedSubject("l's hospital rule")}>
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
