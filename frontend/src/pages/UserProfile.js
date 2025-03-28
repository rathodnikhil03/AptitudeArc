import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  Avatar,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link,
} from "@mui/material";
import { green, grey } from "@mui/material/colors";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import QuizIcon from "@mui/icons-material/Quiz";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const UserProfile = () => {
  const [user] = useState({
    username: "nikhil13",
    name: "Nikhil",
    email: "nikhil@example.com",
    dob: "1900-01-01",
    mobile: "",
    gender: "",
    city: "",
    country: "",
    activities: [
      { type: "Logged in", time: "2025-03-26 20:05:50", ip: "103.81.93.51" },
      { type: "Logged in", time: "2025-03-20 14:00:12", ip: "103.161.99.176" },
      { type: "Logged out", time: "2025-03-20 14:00:02", ip: "103.161.99.176" },
      { type: "Security Answer updated", time: "2025-03-20 13:51:48", ip: "103.161.99.176" },
      { type: "Logged in", time: "2025-03-20 13:50:51", ip: "103.161.99.176" },
      { type: "Account Created", time: "2025-03-20 13:50:29", ip: "103.161.99.176" },
    ],
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 3 }}>
      <Typography variant="h5" sx={{ color: green[700], fontWeight: "bold" }}>
        🔓 Profile: <span style={{ color: "black" }}>{user.name}</span>
      </Typography>
      <Typography variant="body2" sx={{ color: grey[600] }}>Home &gt; Profile &gt; View</Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {/* Account Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Account</Typography>
            <Box sx={{ display: "flex", alignItems: "center", p: 1, bgcolor: "#e3f2fd", borderRadius: 1 }}>
              <Link href="#" underline="none">Click here</Link> to go to the page you were on before logging in.
            </Box>
            <Box textAlign="center" sx={{ mt: 2 }}>
              <Avatar sx={{ width: 80, height: 80, bgcolor: green[500], mx: "auto" }}>👨‍💼</Avatar>
              <Typography variant="h6">{user.username}</Typography>
              <Typography variant="body2" sx={{ bgcolor: grey[200], px: 1, borderRadius: 1 }}>Learner</Typography>
            </Box>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {[
                { label: "Bookmarks", icon: <BookmarkBorderIcon />, count: 0 },
                { label: "Answers", icon: <ChatBubbleOutlineIcon />, count: 0 },
                { label: "Tests", icon: <QuizIcon />, count: 0 },
                { label: "Reports", icon: <ReportProblemIcon />, count: 0 },
              ].map((item, index) => (
                <Grid item xs={3} key={index} textAlign="center">
                  {item.icon}
                  <Typography variant="body2">{item.label}</Typography>
                  <Typography variant="h6">{item.count}</Typography>
                </Grid>
              ))}
            </Grid>
          </Paper>
          <Paper sx={{ p: 2, mt: 2 }}>
            <Typography variant="h6">Password</Typography>
            <Link href="#" sx={{ display: "block", mt: 1 }}>Change password</Link>
            <Link href="#" sx={{ display: "block" }}>Change security answers</Link>
          </Paper>
        </Grid>

        {/* Personal Details Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">Personal Details</Typography>
              <Link href="#">✏️ Edit</Link>
            </Box>
            <Typography>Name: {user.name}</Typography>
            <Typography>Email: {user.email}</Typography>
            <Typography>Mobile: {user.mobile || "-"}</Typography>
            <Typography>Gender: {user.gender || "-"}</Typography>
            <Typography sx={{ color: green[700] }}>DOB: {user.dob}</Typography>
            <Typography>City: {user.city || "-"}</Typography>
            <Typography sx={{ color: green[700] }}>Country: {user.country || "-"}</Typography>
          </Paper>
          <Paper sx={{ p: 2, mt: 2 }}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">About Me</Typography>
              <Link href="#">✏️ Edit</Link>
            </Box>
            <Typography variant="body2">📈</Typography>
          </Paper>
        </Grid>
      </Grid>
      {/* Recent Activities */}
      <Paper sx={{ p: 2, mt: 3, borderTop: `4px solid ${green[500]}` }}>
        <Typography variant="h6" sx={{ color: green[700] }}>Recent Activities</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: green[100] }}>
                <TableCell>#</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>IP</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.activities.map((activity, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}.</TableCell>
                  <TableCell>{activity.type}</TableCell>
                  <TableCell>{activity.time}</TableCell>
                  <TableCell>{activity.ip}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default UserProfile;
