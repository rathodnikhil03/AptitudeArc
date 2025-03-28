import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  FormControlLabel,
  Checkbox,
  Alert,
  Box,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false); // ✅ Prevents multiple redirects

  // ✅ Redirect if already logged in
  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    const storedRole = sessionStorage.getItem("role");

    if (storedToken && storedRole && !isRedirecting) {
      setIsRedirecting(true); // ✅ Prevents multiple redirects
      navigate(storedRole === "ADMIN" ? "/admin/dashboard" : "/user/profile", { replace: true });
    }
  }, [isRedirecting, navigate]);

  // ✅ Handle input changes
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ✅ Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8080/auth/login", credentials);

      if (!response || !response.data) {
        throw new Error("Invalid response from server");
      }

      const { token, role } = response.data;
      const normalizedRole = role.toUpperCase();
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("role", role);

      console.log("Login successful! Redirecting...");
      navigate(normalizedRole === "ADMIN" ? "/admin/dashboard" : "/user/profile", { replace: true });
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Invalid username or password.");
    } finally {
      setLoading(false);
    }
  };

  const isAuthenticated = sessionStorage.getItem("token") && sessionStorage.getItem("role");

  return (
    <Container maxWidth="sm">
      {isAuthenticated ? (
      <Typography variant="h5" align="center" sx={{ mt: 5 }}>
        You are already logged in.
      </Typography>
    ) : (
      <Paper elevation={3} sx={{ p: 4, mt: 5, textAlign: "center" }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
          LOGIN
        </Typography>
        <Box sx={{ borderBottom: "2px solid #e65100", mb: 3, width: "50%", mx: "auto" }}></Box>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
            name="username"
            value={credentials.username}
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
            value={credentials.password}
            onChange={handleChange}
            required
          />

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", my: 2 }}>
            <FormControlLabel control={<Checkbox disabled />} label="Session-based login" />
            <Typography variant="body2">
              <Link to="/forgot-password" style={{ textDecoration: "none", color: "#e65100" }}>
                Forgot password?
              </Link>
            </Typography>
          </Box>

          <Button
  type="submit"
  variant="contained"
  fullWidth
  disabled={loading}
  sx={{
    backgroundColor: "#e65100",
    color: "#fff",
    mt: 2,
    py: 1.2,
    fontSize: "1rem",
    "&:hover": { backgroundColor: "#bf360c" }, // Darker hover effect
  }}
>
  {loading ? (
    <CircularProgress size={24} sx={{ color: "#fff", mx: "auto" }} />
  ) : (
    "Login"
  )}
</Button>

        </form>

        <Typography variant="body2" sx={{ mt: 3 }}>
          Not registered yet?{" "}
          <Link to="/register" style={{ textDecoration: "none", color: "#e65100", fontWeight: "bold" }}>
            Register here
          </Link>
        </Typography>
      </Paper>
    )}
    </Container>
  );
};

export default LoginPage;
