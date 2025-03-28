import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Toolbar } from "@mui/material";
import { Home, Calculate, School, EventNote, People, Assessment, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from "../assets/AptitudeArc.jpg";

const Sidebar = ({ openSidebar }) => {
  // Get role from local storage or session storage
  const role = localStorage.getItem("role") || sessionStorage.getItem("role");

  return (
    <Drawer
      variant="persistent"
      open={openSidebar}
      sx={{
        width: openSidebar ? 240 : 0,
        flexShrink: 0,
        transition: "width 0.3s",
        "& .MuiDrawer-paper": {
          width: openSidebar ? 240 : 0,
          transition: "width 0.3s",
          backgroundColor: "#fff8e1", // Light orange background
        },
      }}
    >
      <Toolbar />
      {/* Logo Section */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 2 }}>
        <img src={logo} alt="AptitudeArc Logo" style={{ width: "80%", maxWidth: "150px", borderRadius: "8px" }} />
      </Box>

      {/* Sidebar Items */}
      <List>
        {role === "ADMIN" ? (
          // Admin Sidebar
          <>
            <ListItem button component={Link} to="/admin/users">
              <ListItemIcon><People sx={{ color: "orange" }} /></ListItemIcon>
              <ListItemText primary="User Management" />
            </ListItem>
            <ListItem button component={Link} to="/admin/tests">
              <ListItemIcon><Assessment sx={{ color: "orange" }} /></ListItemIcon>
              <ListItemText primary="Test Management" />
            </ListItem>
            <ListItem button component={Link} to="/admin/analytics">
              <ListItemIcon><Settings sx={{ color: "orange" }} /></ListItemIcon>
              <ListItemText primary="Analytics" />
            </ListItem>
          </>
        ) : (
          // Guest & Regular User Sidebar
          <>
            <ListItem button component={Link} to="/">
              <ListItemIcon><Home sx={{ color: "orange" }} /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/topic">
              <ListItemIcon><Calculate sx={{ color: "orange" }} /></ListItemIcon>
              <ListItemText primary="Arithmetic Aptitude" />
            </ListItem>
            <ListItem button component={Link} to="/topic">
              <ListItemIcon><EventNote sx={{ color: "orange" }} /></ListItemIcon>
              <ListItemText primary="Java" />
            </ListItem>
            <ListItem button component={Link} to="/topic">
              <ListItemIcon><School sx={{ color: "orange" }} /></ListItemIcon>
              <ListItemText primary="Mechanical" />
            </ListItem>
          </>
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
