import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Arithmetic.css"; // Import the CSS file
import { FaFolder } from "react-icons/fa"; // Importing folder icon

const arithmeticTopics = [
  "Problems on Trains",
  "Simple Interest",
  "Percentage",
  "Average",
  "Numbers",
  "Simplification",
  "Chain Rule",
  "Logarithm",
  "True Discount",
  "Time and Distance",
  "Compound Interest",
  "Problems on Ages",
  "Problems on Numbers",
  "Square Root and Cube Root",
  "Pipes and Cistern",
  "Races and Games",
  "Banker’s Discount"
];

const Arithmetic = () => {
  const navigate = useNavigate();

  const handleTopicClick = (topic) => {
    // Navigate to a route based on the topic name
    const formattedTopic = topic.toLowerCase().replace(/\s+/g, "-"); // Convert spaces to dashes
    navigate(`/topics/${formattedTopic}`);
  };

  return (
    <div className="container">
      <h1 className="heading">Arithmetic Topics</h1>
      <div className="grid-container">
        {arithmeticTopics.map((topic, index) => (
          <div key={index} className="topic-card" onClick={() => handleTopicClick(topic)}>
            <FaFolder className="folder-icon" />
            <span>{topic}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Arithmetic;
