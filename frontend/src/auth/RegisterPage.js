import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
  Box,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() }); // Trim values
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { username, email, password, confirmPassword } = formData;

    console.log("Form Data Before Sending:", formData); // Debugging log

    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8080/auth/register",
        { username, email, password }, // Ensure password is sent
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response);

      if (response.status >= 200 && response.status < 300) {
        setSuccess("Registration successful! Redirecting to login...");
        setFormData({ username: "", email: "", password: "", confirmPassword: "" });

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
      console.error("Registration Error:", err.response || err.message);
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 5, textAlign: "center" }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
          REGISTER
        </Typography>
        <Box
          sx={{ borderBottom: "2px solid #e65100", mb: 3, width: "50%", mx: "auto" }}
        ></Box>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

        <form onSubmit={handleRegister}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
            margin="normal"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            sx={{ backgroundColor: "#e65100", color: "#fff", mt: 2, py: 1.2, fontSize: "1rem" }}
          >
            {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Register"}
          </Button>
        </form>

        <Typography variant="body2" sx={{ mt: 3 }}>
          Already have an account?{" "}
          <Link to="/login" style={{ textDecoration: "none", color: "#e65100", fontWeight: "bold" }}>
            Login here
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default RegisterPage;
