import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { 
  Menu as MenuIcon, 
  Search, 
  AccountCircle, 
  Logout, 
  Bookmarks, 
  Person, 
  SmartToy, 
  Login,
  Dashboard 
} from "@mui/icons-material";

const Header = ({ toggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  // Function to fetch user role from storage
  const fetchUserRole = () => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    const role = localStorage.getItem("role") || sessionStorage.getItem("role");
    setUserRole(token ? role : null);
  };

  useEffect(() => {
    fetchUserRole();

    // Listen to custom event for immediate updates
    const handleUserLoggedIn = () => {
      fetchUserRole();
    };

    window.addEventListener("userLoggedIn", handleUserLoggedIn);
    // You can still keep the storage event for cross-tab updates if needed.
    window.addEventListener("storage", fetchUserRole);

    return () => {
      window.removeEventListener("userLoggedIn", handleUserLoggedIn);
      window.removeEventListener("storage", fetchUserRole);
    };
  }, []);

  const handleSearch = async (event) => {
    setSearchQuery(event.target.value);
    if (event.target.value.length > 2) {
      try {
        await axios.get(`http://localhost:8080/api/search?query=${event.target.value}`);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }
  };

  const handleProfileClick = (event) => {
    if (userRole) {
      setAnchorEl(event.currentTarget);
    } else {
      navigate("/login");
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    sessionStorage.clear();
    localStorage.clear();
    setUserRole(null);
    navigate("/login");
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#e65100", zIndex: 1201 }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          {userRole === "ADMIN" ? "Admin Dashboard" : "AptitudeArc"}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#ffffff33", borderRadius: 1, px: 2, py: 0.5 }}>
          <Search sx={{ color: "#fff" }} />
          <InputBase
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            sx={{ ml: 1, color: "#fff" }}
          />
        </Box>

        <IconButton color="inherit" sx={{ ml: 2 }} onClick={handleProfileClick}>
          {userRole ? <AccountCircle /> : <Login />}
        </IconButton>

        {userRole && (
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            {userRole === "ADMIN" ? (
              <MenuItem onClick={() => navigate("/admin/dashboard")}>
                <ListItemIcon>
                  <Dashboard fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Admin Dashboard" />
              </MenuItem>
            ) : (
              [
                <MenuItem key="profile" onClick={() => navigate("/user/profile")}>
                  <ListItemIcon>
                    <Person fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Profile Page" />
                </MenuItem>,
                <MenuItem key="ai" onClick={() => navigate("/ai")}>
                  <ListItemIcon>
                    <SmartToy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="AI" />
                </MenuItem>,
                <MenuItem key="bookmarks" onClick={() => navigate("/bookmarks")}>
                  <ListItemIcon>
                    <Bookmarks fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Bookmark Page" />
                </MenuItem>
              ]
            )}

            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </MenuItem>
          </Menu>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
