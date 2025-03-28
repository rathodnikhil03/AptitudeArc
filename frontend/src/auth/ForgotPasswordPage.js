import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper, Alert, Box, CircularProgress } from "@mui/material";
import axios from "axios";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  // Send OTP
const handleSendOtp = async () => {
  setMessage("");
  setError("");
  setLoading(true);

  try {
    const response = await axios.post("http://localhost:8080/auth/forgot-password", { email });
    setMessage(response.data.message?.toString() || "OTP sent successfully!");
    setOtpSent(true);
  } catch (err) {
    setError(err.response?.data?.message?.toString() || "Email not registered. Please try again.");
  }
  setLoading(false);
};

// Verify OTP
const handleVerifyOtp = async () => {
  setMessage("");
  setError("");
  setLoading(true);

  try {
    const response = await axios.post("http://localhost:8080/auth/verify-otp", { email, otp });
    setMessage(response.data.message?.toString() || "OTP Verified. You can reset your password.");
    setOtpVerified(true);
  } catch (err) {
    setError(err.response?.data?.message?.toString() || "Error verifying OTP.");
  }
  setLoading(false);
};

// Reset Password
const handleResetPassword = async () => {
  setMessage("");
  setError("");
  setLoading(true);

  try {
    const response = await axios.post("http://localhost:8080/auth/reset-password", {
      email,
      otp,
      newPassword
    });
    setMessage(response.data.message?.toString() || "Password reset successful!");
    setOtpSent(false);
    setOtpVerified(false);
    setEmail("");
    setOtp("");
    setNewPassword("");
  } catch (err) {
    setError(err.response?.data?.message?.toString() || "Failed to reset password.");
  }
  setLoading(false);
};


  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 5, textAlign: "center" }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>Forgot Password</Typography>
        <Box sx={{ borderBottom: "2px solid #e65100", mb: 3, width: "50%", mx: "auto" }}></Box>

        {message && <Alert severity="success" sx={{ mb: 2 }}>{message}</Alert>}
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        {!otpSent ? (
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
        ) : otpSent && !otpVerified ? (
          <TextField
            fullWidth
            label="Enter OTP"
            type="text"
            variant="outlined"
            margin="normal"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        ) : (
          <TextField
            fullWidth
            label="New Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        )}

        {loading ? (
          <CircularProgress sx={{ mt: 2 }} />
        ) : !otpSent ? (
          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: "#e65100", color: "#fff", mt: 2, py: 1.2, fontSize: "1rem" }}
            onClick={handleSendOtp}
          >
            Send OTP
          </Button>
        ) : otpSent && !otpVerified ? (
          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: "#e65100", color: "#fff", mt: 2, py: 1.2, fontSize: "1rem" }}
            onClick={handleVerifyOtp}
          >
            Verify OTP
          </Button>
        ) : (
          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: "#e65100", color: "#fff", mt: 2, py: 1.2, fontSize: "1rem" }}
            onClick={handleResetPassword}
          >
            Reset Password
          </Button>
        )}
      </Paper>
    </Container>
  );
};

export default ForgotPasswordPage;
