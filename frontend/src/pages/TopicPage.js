import React, { useEffect, useState } from "react";
import { 
  Container, Grid, Paper, Typography, Breadcrumbs, Link, TextField, Box, Divider 
} from "@mui/material";
import { Folder } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";

// Define topics for each category
const topicsByCategory = {
  "Arithmetic": ["Problems on Trains", "Simple Interest", "Percentage", "Average", "Numbers"],
  "Java": ["Language Fundamentals", "Objects and Collections", "Operators and Assignments", "Threads", "Inner Classes"],
  "Mechanical": ["Engineering Mechanics", "Strength of Materials", "Hydraulics and Fluid Mechanics", "Thermodynamics"],
  "Data Interpretation": ["Table Charts", "Bar Charts", "Pie Charts", "Line Charts"],
};

// Quick Links
const quickLinks = {
  "General Aptitude": ["Arithmetic", "Data Interpretation"],
  "Programming": ["Python Programming", "C Programming", "C++, C#", "Java"],
  "Interview": ["GD", "HR", "Technical Interview"],
  "Engineering": ["Mechanical", "Civil", "CSE", "EEE"]
};

const TopicPage = () => {
  const { category } = useParams();  
  const navigate = useNavigate();
  const [filteredTopics, setFilteredTopics] = useState([]);
  const [formattedCategory, setFormattedCategory] = useState("");

  useEffect(() => {
    if (category) {
      // Convert URL param into a properly formatted category name
      const matchedCategory = Object.keys(topicsByCategory).find(
        (key) => key.toLowerCase().replace(/\s+/g, "-") === category
      );

      if (matchedCategory) {
        setFormattedCategory(matchedCategory);
        setFilteredTopics(topicsByCategory[matchedCategory]);
      } else {
        setFormattedCategory("Unknown Category");
        setFilteredTopics([]);
      }
    }
  }, [category]);

  const handleTopicClick = (topic) => {
    const formattedTopic = topic.toLowerCase().replace(/\s+/g, "-");
    const formattedCategory = category.toLowerCase().replace(/\s+/g, "-"); // Ensure category is formatted correctly
    navigate(`/topic/${formattedCategory}/${formattedTopic}`); 
  };
  

  return (
    <Container sx={{ mt: 3, mb: 2 }}>
      {/* Breadcrumb Navigation */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/topic">
          Aptitude
        </Link>
        <Typography color="textPrimary">{formattedCategory}</Typography>
      </Breadcrumbs>

      {/* Title */}
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold", color: "#e65100" }}>
        {formattedCategory} Questions and Answers
      </Typography>

      <Grid container spacing={3}>
        {/* Left Section (Topics List) */}
        <Grid item xs={12} md={9}>
          <Paper sx={{ p: 3 }} elevation={3}>
            {/* Search Filter */}
            <TextField
              fullWidth
              variant="outlined"
              placeholder="🔍 Search topics..."
              sx={{ mb: 3 }}
            />

            {/* Topics Grid */}
            <Grid container spacing={2}>
              {filteredTopics.length > 0 ? (
                filteredTopics.map((topic, index) => (
                  <Grid
                    item xs={12} sm={6} md={4} key={index}
                    onClick={() => handleTopicClick(topic)}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        p: 1,
                        transition: "0.3s",
                        borderRadius: 1,
                        '&:hover': { color: "blue", backgroundColor: "#f5f5f5" }
                      }}
                    >
                      <Folder sx={{ color: "#e65100", mr: 1 }} />
                      <Typography>{topic}</Typography>
                    </Box>
                  </Grid>
                ))
              ) : (
                <Typography variant="h6" sx={{ textAlign: "center", color: "gray" }}>
                  No topics available for {formattedCategory}.
                </Typography>
              )}
            </Grid>
          </Paper>
        </Grid>

        {/* Right Section (Quick Links) */}
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2 }} elevation={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>Quick Links</Typography>
            <Divider sx={{ my: 1 }} />
            {Object.entries(quickLinks).map(([category, links], index) => (
              <Box key={index} sx={{ mt: 2 }}>
                <Typography sx={{ fontWeight: "bold", color: "#e65100" }}>{category}</Typography>
                {links.map((link, i) => (
                  <Typography
                    key={i}
                    sx={{ fontSize: "14px", cursor: "pointer", mt: 0.5, '&:hover': { color: "blue" } }}
                    onClick={() => navigate(`/topic/${link.toLowerCase().replace(/\s+/g, "-")}`)}
                  >
                    › {link}
                  </Typography>
                ))}
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>

      {/* Footer */}
      <Typography variant="body2" sx={{ textAlign: "center", mt: 4, color: "gray" }}>
        © AptitudeArc Technologies | 
        <Link href="#" sx={{ ml: 1 }}>Contact Us</Link> | 
        <Link href="#" sx={{ ml: 1 }}>Copyright</Link> | 
        <Link href="#" sx={{ ml: 1 }}>Privacy Policy</Link>
      </Typography>
    </Container>
  );
};

export default TopicPage;
