import React, { useEffect, useState } from "react";
import {
  Container, Typography, Breadcrumbs, Link, Paper, FormControl, FormControlLabel,
  RadioGroup, Radio, Button, Divider, CircularProgress
} from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

// Default questions for different topics (Expanded with more than 100 questions)
const defaultQuestionsData = {
  "problems-on-trains": Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    question: `Train problem question ${i + 1}?`,
    options: ["Option A", "Option B", "Option C", "Option D"],
  })),
  "simple-interest": Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    question: `Simple Interest question ${i + 1}?`,
    options: ["Option A", "Option B", "Option C", "Option D"],
  })),
  "percentage": Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    question: `Percentage question ${i + 1}?`,
    options: ["Option A", "Option B", "Option C", "Option D"],
  })),
  "numbers": Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    question: `Numbers question ${i + 1}?`,
    options: ["Option A", "Option B", "Option C", "Option D"],
  })),
  "average": Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    question: `Average question ${i + 1}?`,
    options: ["Option A", "Option B", "Option C", "Option D"],
  })),
};

const TopicDetail = () => {
  const { topic } = useParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8080/api/topics/${topic}`);
        if (response.data && response.data.questions.length > 0) {
          setQuestions(response.data.questions); // Load questions from DB
        } else {
          throw new Error("No data found"); // If DB response is empty, fallback
        }
      } catch (err) {
        console.error("Error fetching from DB:", err);
        setError("Backend not connected. Showing sample questions.");
        setQuestions(defaultQuestionsData[topic] || []);
      } finally {
        setLoading(false);
      }
    };
  
    fetchQuestions();
  }, [topic]);
  

  return (
    <Container sx={{ mt: 3 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">Home</Link>
        <Link underline="hover" color="inherit" href="/topic">Aptitude</Link>
        <Typography color="textPrimary">{topic.replace(/-/g, " ")}</Typography>
      </Breadcrumbs>

      {/* Topic Title */}
      <Typography variant="h4" sx={{ my: 2, fontWeight: "bold", textTransform: "capitalize" }}>
        {topic.replace(/-/g, " ")} - General Questions
      </Typography>

      {/* Loading & Error Handling */}
      {loading ? <CircularProgress sx={{ display: "block", mx: "auto", my: 3 }} /> : null}
      {error ? <Typography color="error">{error}</Typography> : null}

      {/* Questions List */}
      {!loading && questions.length > 0 ? (
        questions.map((q, index) => (
          <Paper key={q.id} sx={{ p: 3, mb: 2 }} elevation={3}>
            <Typography variant="h6">{index + 1}. {q.question}</Typography>
            <FormControl component="fieldset">
              <RadioGroup>
                {q.options.map((option, i) => (
                  <FormControlLabel key={i} value={option} control={<Radio />} label={option} />
                ))}
              </RadioGroup>
            </FormControl>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>Check Answer</Button>
          </Paper>
        ))
      ) : (
        !loading && <Typography>No questions available for this topic.</Typography>
      )}

      {/* Footer */}
      <Divider sx={{ my: 3 }} />
      <Typography variant="body2" sx={{ textAlign: "center", color: "gray" }}>
        © AptitudeArc Technologies |
        <Link href="#" sx={{ ml: 1 }}>Contact Us</Link> |
        <Link href="#" sx={{ ml: 1 }}>Privacy Policy</Link>
      </Typography>
    </Container>
  );
};

export default TopicDetail;