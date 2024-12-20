import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./calculus.css";

const CALCULUS = () => {
  const units = [
    {
      id: 1,
      title: "Differential Calculus of functions of one variable",
      topics: [
        { name: "Rolle’s theorem", path: "/topic-display" },
        { name: "Lagrange’s Mean value theorem", path: "/lagrange-mean-value" },
        { name: "Cauchy’s Mean value theorem", path: "/cauchy-mean-value" },
        { name: "Convergence of Sequences and series", path: "/convergence" },
        { name: "Taylor’s and Maclaurin’s Series Expansion", path: "/taylor-maclaurin" },
        { name: "Indeterminate forms", path: "/indeterminate-forms" },
        { name: "L'Hospital's rule", path: "/l-hospital-rule" },
      ],
    },
    {
      id: 2,
      title: "Partial Differentiation",
      topics: [
        { name: "Functions of several variables: Limits and continuity", path: "/limits-continuity" },
        { name: "Partial differentiation", path: "/partial-differentiation" },
        { name: "Taylor’s theorem of function of two variables", path: "/taylor-two-variables" },
        { name: "Maxima, Minima", path: "/maxima-minima" },
        { name: "Lagrange’s Method of Undetermined Multiplier", path: "/lagrange-undetermined" },
      ],
    },
    {
      id: 3,
      title: "Integral Calculus of functions of one variable",
      topics: [
        { name: "Volume of solid of revolution", path: "/solid-revolution-volume" },
        { name: "Area of the surface of a solid of revolution", path: "/surface-area-revolution" },
        { name: "Improper Integrals", path: "/improper-integrals" },
        { name: "Special functions: Beta and Gamma functions", path: "/beta-gamma-functions" },
      ],
    },
    {
      id: 4,
      title: "Multiple Integrals",
      topics: [
        { name: "Double Integral", path: "/double-integral" },
        { name: "Change of order of Integration", path: "/change-order-integration" },
        { name: "Jacobian", path: "/jacobian" },
        { name: "Application of Double Integral to find area", path: "/double-integral-area" },
        { name: "Triple Integral", path: "/triple-integral" },
        { name: "Change of variable to spherical and cylindrical coordinates", path: "/spherical-cylindrical-coordinates" },
        { name: "Application of Triple Integral to find volume", path: "/triple-integral-volume" },
      ],
    },
  ];

  const [openUnit, setOpenUnit] = useState(null);
  const navigate = useNavigate();

  const toggleUnit = (id) => {
    setOpenUnit(openUnit === id ? null : id);
  };

  const handleTopicClick = (path) => {
    navigate(path);
  };

  return (
    <div className="calculuscontent">
      {units.map((unit) => (
        <div key={unit.id} className="unit">
          <div className="unit-title" onClick={() => toggleUnit(unit.id)}>
            <h2>
              {unit.id}. {unit.title}
            </h2>
          </div>
          <ul className={`topics ${openUnit === unit.id ? "open" : ""}`}>
            {unit.topics.map((topic, index) => (
              <li key={index}>
                <a onClick={() => handleTopicClick(topic.path)}>{topic.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CALCULUS;
