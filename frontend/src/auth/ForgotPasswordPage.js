import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/ForgotPasswordPage.css";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post("http://localhost:8080/api/auth/forgot-password", {
        email,
      });

      setMessage(response.data);
    } catch (err) {
      setError("Email not registered. Please try again.");
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <hr />
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleForgotPassword}>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="reset-btn">Send Reset Link</button>
      </form>
      <p className="back-to-login">
        <Link to="/login">Back to Login</Link>
      </p>
    </div>
  );
};

export default ForgotPasswordPage;
