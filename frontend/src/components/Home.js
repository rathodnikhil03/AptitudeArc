import React from "react";
import { Container, Grid, Paper, Typography, Toolbar, Box } from "@mui/material";
import { Calculate, Work, School, Code } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const categories = [
  { title: "General Aptitude", icon: <Calculate sx={{ color: "orange", fontSize: 40 }} />, items: ["Arithmetic", "Data Interpretation", "Online Tests"] },
  { title: "Interview", icon: <Work sx={{ color: "orange", fontSize: 40 }} />, items: ["Placement Papers", "Group Discussion", "HR Interview"] },
  { title: "Engineering", icon: <School sx={{ color: "orange", fontSize: 40 }} />, items: ["Mechanical", "Civil", "CSE"] },
  { title: "Programming", icon: <Code sx={{ color: "orange", fontSize: 40 }} />, items: ["C", "C++", "Java"] },
];

const Home = () => {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    const formattedItem = item.toLowerCase().replace(/\s+/g, "-");
    console.log(`Navigating to: /topic/${formattedItem}`); // Debugging log
    navigate(`/topic/${formattedItem}`);
  };

  return (
    <Box>
      <Toolbar />
      <Container>
        <Typography variant="h4" sx={{ mb: 4, color: "#e65100", fontWeight: "bold", textAlign: "center" }}>
          Welcome to AptitudeArc!
        </Typography>

        <Grid container spacing={4} justifyContent="flex-start">
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Paper
                elevation={6}
                sx={{
                  padding: 3,
                  textAlign: "center",
                  backgroundColor: "#fff8e1",
                  borderRadius: 3,
                  transition: "0.3s",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "&:hover": { transform: "scale(1.05)", boxShadow: 6, backgroundColor: "#ffecb3" },
                }}
              >
                {category.icon}

                <Typography variant="h6" sx={{ mt: 1, color: "#e65100", fontWeight: "bold" }}>
                  {category.title}
                </Typography>

                <ul style={{ textAlign: "left", padding: "10px", listStyleType: "circle" }}>
                  {category.items.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "14px",
                        padding: "5px 0",
                        color: "#e65100",
                        cursor: "pointer",
                        transition: "color 0.2s",
                      }}
                      onClick={() => handleItemClick(item)}
                      onMouseOver={(e) => (e.target.style.color = "black")}
                      onMouseOut={(e) => (e.target.style.color = "#e65100")}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
