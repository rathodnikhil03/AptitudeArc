import React, { useState } from "react";
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
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8080/auth/login", credentials);

      if (response.status === 200) {
        const token = response.data.token;
        if (rememberMe) {
          localStorage.setItem("token", token);
        } else {
          sessionStorage.setItem("token", token);
        }
        navigate("/home");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid username or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
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
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  color="primary"
                />
              }
              label="Remember me"
            />
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
            sx={{ backgroundColor: "#e65100", color: "#fff", mt: 2, py: 1.2, fontSize: "1rem" }}
          >
            {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Login"}
          </Button>
        </form>

        <Typography variant="body2" sx={{ mt: 3 }}>
          Not registered yet?{" "}
          <Link to="/register" style={{ textDecoration: "none", color: "#e65100", fontWeight: "bold" }}>
            Register here
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default LoginPage;
