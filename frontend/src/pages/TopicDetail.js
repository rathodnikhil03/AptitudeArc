import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/TopicDetail.css";

const TopicDetail = () => {
  const { topicName } = useParams();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/questions?topic=${topicName}`) // Replace with your actual backend URL
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, [topicName]);

  return (
    <div className="topic-detail">
      <h1>{topicName.replace(/-/g, " ")}</h1>
      <p>Details about {topicName.replace(/-/g, " ")} will be displayed here.</p>
      <ul>
        {questions.map((q, index) => (
          <li key={index} className="question-item">
            <p>{q.question}</p>
            <ul>
              {q.options.map((option, i) => (
                <li key={i}>{option}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicDetail;