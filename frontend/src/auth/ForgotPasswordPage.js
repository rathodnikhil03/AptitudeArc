import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper, Alert, Box } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post("http://localhost:8080/auth/forgot-password", {
        email,
      });
      setMessage(response.data.message);
    } catch (err) {
      setError("Email not registered. Please try again.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 5, textAlign: "center" }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
          Forgot Password
        </Typography>
        <Box sx={{ borderBottom: "2px solid #e65100", mb: 3, width: "50%", mx: "auto" }}></Box>

        {message && <Alert severity="success" sx={{ mb: 2 }}>{message}</Alert>}
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <form onSubmit={handleForgotPassword}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ backgroundColor: "#e65100", color: "#fff", mt: 2, py: 1.2, fontSize: "1rem" }}
          >
            Send Reset Link
          </Button>
        </form>

        <Typography variant="body2" sx={{ mt: 3 }}>
          <Link to="/login" style={{ textDecoration: "none", color: "#e65100", fontWeight: "bold" }}>
            Back to Login
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default ForgotPasswordPage;