import React, { useRef, useState } from "react";
import Header from "../../header/header";
import "../IT/IT1stsem.css";

const IT1STSEM = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // State for toggling

  const toggleSubbar = () => {
    setIsCollapsed(!isCollapsed); // Toggle the state
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
        <div className="subname">CALCULUS</div>
      </div>

      <div className="subdisplay">
        {/* Conditionally apply styles for subbar */}
        <div className={`subbar ${isCollapsed ? "hide" : ""}`}>
          <ul>
            <li>CALCULUS</li>
            <li>PHYSICS</li>
            <li>PROGRAMMING FOR PROBLEM SOLVING</li>
            <li>ELEMENTS OF BIOLOGY</li>
            <li>PROFESSIONAL ETHICS</li>
            <li>CRITICAL THINKING</li>
            <li>ENGINEERING GRAPHICS AND DESIGNING</li>
          </ul>
        </div>

        {/* Sidesec adjusts its width dynamically */}
        <div className={`sidesec ${isCollapsed ? "expand" : ""}`}>
          <div className="content">
            <p>
              Calculus is the branch of mathematics dealing with the study of
              continuous change, particularly...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IT1STSEM;
