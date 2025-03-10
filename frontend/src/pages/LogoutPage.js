import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions (clear session, token, etc.)
    alert("You have been logged out.");
    navigate("/"); // Redirect to homepage after logout
  };

  return (
    <div className="page-container">
      <h2>Logout Page</h2>
      <p>Click below to logout.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutPage;
