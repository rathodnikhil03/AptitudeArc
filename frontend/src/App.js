import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import TopicPage from "./pages/TopicPage";
import TopicDetail from "./pages/TopicDetail";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import ForgotPasswordPage from "./auth/ForgotPasswordPage";
import UserProfile from "./pages/UserProfile";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./auth/ProtectedRoute";

const App = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const handleSidebarToggle = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        {/* Header */}
        <Header toggleSidebar={handleSidebarToggle} />

        {/* Sidebar */}
        <Sidebar openSidebar={openSidebar} />

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            ml: openSidebar ? "10px" : "0px", // Push content when sidebar is open
            mt: "64px", // Prevent overlap with Header (same height as AppBar)
            transition: "margin 0.3s",
          }}
        >
          <Routes>
            {/* Public Routes (Guest Users) */}
            <Route path="/" element={<Home openSidebar={openSidebar} />} />
            <Route path="/topic" element={<TopicPage />} />
            <Route path="/topic/:category" element={<TopicPage />} />
            <Route path="/topic/:category/:topic" element={<TopicDetail />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />

            {/* Protected Routes */}
            <Route
              path="/user/profile"
              element={
                <ProtectedRoute allowedRoles={["USER"]}>
                  <UserProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute allowedRoles={["ADMIN"]}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
