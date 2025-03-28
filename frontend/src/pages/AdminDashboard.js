import React from "react";
import {
  Box,
  Toolbar,
  Container,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BarChartIcon from "@mui/icons-material/BarChart";

const categories = [
  {
    title: "User Management",
    icon: <PeopleIcon sx={{ color: "orange", fontSize: 40 }} />,
    items: ["Manage user accounts", "Permissions", "Roles"],
  },
  {
    title: "Test Management",
    icon: <AssignmentIcon sx={{ color: "orange", fontSize: 40 }} />,
    items: ["Oversee and manage tests", "Assessments", "Evaluations"],
  },
  {
    title: "Analytics",
    icon: <BarChartIcon sx={{ color: "orange", fontSize: 40 }} />,
    items: ["View detailed analytics", "Insights for better decision making"],
  },
];

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Handle click event for individual items
  const handleItemClick = (item) => {
    const formattedItem = item.toLowerCase().replace(/\s+/g, "-");
    console.log(`Navigating to: /topic/${formattedItem}`);
    navigate(`/topic/${formattedItem}`);
  };

  return (
    <Box>
      <Toolbar />
      <Container>
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            color: "#e65100",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Welcome to Admin Dashboard in AptitudeArc!
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
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                    backgroundColor: "#ffecb3",
                  },
                }}
              >
                {category.icon}
                <Typography
                  variant="h6"
                  sx={{ mt: 1, color: "#e65100", fontWeight: "bold" }}
                >
                  {category.title}
                </Typography>

                <ul
                  style={{
                    textAlign: "left",
                    padding: "10px",
                    listStyleType: "circle",
                  }}
                >
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

export default AdminDashboard;
