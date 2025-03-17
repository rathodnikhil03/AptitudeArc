import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, InputBase, Box } from "@mui/material";
import { Menu, Search, AccountCircle } from "@mui/icons-material";
import axios from "axios";

const Header = ({ toggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (event) => {
    setSearchQuery(event.target.value);
    if (event.target.value.length > 2) {
      try {
        const response = await axios.get(`http://localhost:8080/api/search?query=${event.target.value}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleProfileClick = () => {
    navigate("/login"); // Redirect to the Login Page
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#e65100", zIndex: 1201 }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar} sx={{ mr: 2 }}>
          <Menu />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          AptitudeArc
        </Typography>

        {/* Search Bar */}
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
          <AccountCircle />
        </IconButton>
      </Toolbar>

      {/* Display Search Results */}
      {searchResults.length > 0 && (
        <Box sx={{ position: "absolute", top: "56px", left: "50%", transform: "translateX(-50%)", width: "50%", backgroundColor: "#fff", borderRadius: 1, boxShadow: 3, p: 2 }}>
          {searchResults.map((result, index) => (
            <Typography key={index} variant="body1" sx={{ padding: "8px 0", cursor: "pointer" }}>
              {result.question}
            </Typography>
          ))}
        </Box>
      )}
    </AppBar>
  );
};

export default Header;
