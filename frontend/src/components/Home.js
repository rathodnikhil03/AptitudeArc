import React from "react";
import { FaBars, FaSearch, FaShareAlt, FaCog, FaSignOutAlt } from "react-icons/fa";
import "../styles/Home.css"; // Ensure you have the styles in Home.css

const Home = () => {
  // Define categories
  const categories = [
    { title: "General Aptitude", items: ["Arithmetic Aptitude", "Data Interpretation", "Online Aptitude Test", "Data Interpretation Test"] },
    { title: "Verbal and Reasoning", items: ["Verbal Ability", "Logical Reasoning", "Verbal Reasoning", "Non-Verbal Reasoning"] },
    { title: "Current Affairs & GK", items: ["Current Affairs", "Basic General Knowledge", "General Science", "Read more..."] },
    { title: "Interview", items: ["Placement Papers", "Group Discussion", "HR Interview", "Read more..."] },
    { title: "Engineering", items: ["Mechanical Engineering", "Civil Engineering", "ECE, EEE, CSE", "Chemical Engineering"] },
    { title: "Programming", items: ["C Programming", "C++ Programming", "C# Programming", "Java Programming"] },
    { title: "Online Tests", items: ["Aptitude Test", "Verbal Ability Test", "Logical Reasoning Test", "C Programming Test", "Read more..."] },
    { title: "Technical MCQs", items: ["Networking Questions", "Database Questions", "Basic Electronics", "Digital Electronics", "Read more..."] },
    { title: "Technical Short Answers", items: ["Software Testing", "The C Language Basics", "SQL Server", "Networking", "Read more..."] },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <FaBars className="icon menu-icon" />
          <h2 className="logo">AptitudeArc</h2>
        </div>

        <div className="navbar-center">
          <div className="search-box">
            <FaSearch className="icon search-icon" />
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className="navbar-right">
          <FaShareAlt className="icon" />
          <FaCog className="icon" />
          <FaSignOutAlt className="icon" />
        </div>
      </nav>

      {/* Welcome Section */}
      <div className="welcome-section">
        <h2>Welcome to <span className="highlight">IndiaBIX.Com!</span></h2>
        <p>Aptitude questions and answers for your placement interviews and competitive exams!</p>
      </div>

      {/* Grid Section */}
      <div className="grid-container">
        {categories.map((category, index) => (
          <div key={index} className="grid-card">
            <h3>{category.title}</h3>
            <ul>
              {category.items.map((item, i) => (
                <li key={i}>&gt; {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;