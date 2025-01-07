import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./calculus.css";
import axiosInstance from "../../../../api/axiosInstance";

const CALCULUS = ({ subject }) => {
  const [getUnits, setUnits] = useState([]); // Holds fetched units
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [openUnit, setOpenUnit] = useState(null); // Track which unit is open
  const navigate = useNavigate();

  // Fetch units from API
  const fetchUnits = async () => {
    setLoading(true); // Set loading to true before fetching
    setError(null); // Reset error state
    try {
      const response = await axiosInstance.get(`Get/Units/${subject}`);
      setUnits(response.data.data);
      console.log("Units:", response.data.data);
    } catch (err) {
      console.error("Error fetching units");
      setError("Failed to fetch units.");
    } finally {
      setLoading(false); // Set loading to false once done
    }
  };

  // Trigger fetchUnits when the component mounts or `subject` changes
  useEffect(() => {
    if (subject) fetchUnits();
  }, [subject]);

  // Toggle unit expansion
  const toggleUnit = (id) => {
    setOpenUnit(openUnit === id ? null : id);
  };

  // Navigate to topic path
  const handleTopicClick = (path) => {
    navigate(path);
  };

  if (loading) {
    return <div className="loading">Loading units...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="calculuscontent">
      {getUnits.map((unit, index) => (
        <div key={index} className="unit">
          <div className="unit-title" onClick={() => toggleUnit(index)}>
            <h2>
              {index + 1}. {unit.title || unit} {/* Handle different structures */}
            </h2>
          </div>
          {unit.topics && (
            <ul className={`topics ${openUnit === index ? "open" : ""}`}>
              {unit.topics.map((topic, idx) => (
                <li key={idx}>
                  <a onClick={() => handleTopicClick(topic.path)}>{topic.name}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default CALCULUS;
