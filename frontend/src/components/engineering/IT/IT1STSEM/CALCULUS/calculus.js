import React, { useState } from "react";
import "./calculus.css";

const CALCULUS = () => {
  const units = [
    {
      id: 1,
      title: "Differential Calculus of functions of one variable",
      topics: [
        "Rolle’s theorem",
        "Lagrange’s Mean value theorem",
        "Cauchy’s Mean value theorem",
        "Convergence of Sequences and series",
        "Taylor’s and Maclaurin’s Series Expansion",
        "Indeterminate forms",
        "L'Hospital's rule",
      ],
    },
    {
      id: 2,
      title: "Partial Differentiation",
      topics: [
        "Functions of several variables: Limits and continuity",
        "Partial differentiation",
        "Taylor’s theorem of function of two variables",
        "Maxima, Minima",
        "Lagrange’s Method of Undetermined Multiplier",
      ],
    },
    {
      id: 3,
      title: "Integral Calculus of functions of one variable",
      topics: [
        "Volume of solid of revolution",
        "Area of the surface of a solid of revolution",
        "Improper Integrals",
        "Special functions: Beta and Gamma functions",
      ],
    },
    {
      id: 4,
      title: "Multiple Integrals",
      topics: [
        "Double Integral",
        "Change of order of Integration",
        "Jacobian",
        "Application of Double Integral to find area",
        "Triple Integral",
        "Change of variable to spherical and cylindrical co-ordinates",
        "Application of Triple Integral to find volume",
      ],
    },
  ];

  const [openUnit, setOpenUnit] = useState(null);

  const toggleUnit = (id) => {
    setOpenUnit(openUnit === id ? null : id);
  };

  return (
    <div className="calculuscontent">
      {units.map((unit) => (
        <div key={unit.id} className="unit">
          <div
            className="unit-title"
            onClick={() => toggleUnit(unit.id)}
          >
            <h2>{unit.id}. {unit.title}</h2>
          </div>
          <ul
            className={`topics ${openUnit === unit.id ? "open" : ""}`}
          >
            {unit.topics.map((topic, index) => (
              <li key={index}>
                <a href={`#${topic.toLowerCase().replace(/ /g, "-")}`}>
                  {topic}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CALCULUS;
