import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "How does the free matchmaking service work?",
    answer:
      "Our free matchmaking service allows users to search and connect with potential matches independently. You can use our website and social media groups to find proposals.",
  },
  {
    question: "What is the difference between free and paid services?",
    answer:
      "Free services are self-service, whereas paid services offer personalized assistance, verified proposals, and time-saving solutions tailored to your requirements.",
  },
  {
    question: "Are the paid proposals verified?",
    answer:
      "Yes, all paid proposals are thoroughly verified to ensure authenticity and compatibility with your preferences.",
  },
  {
    question: "How can I ensure safety during matchmaking?",
    answer:
      "Always follow the guidelines shared on our platform. Avoid sharing personal details prematurely and involve your family in the decision-making process.",
  },
  {
    question: "What payment methods are accepted for paid services?",
    answer:
      "We accept online transfers, bank deposits, and other commonly used methods. Details will be provided during the registration process.",
  },
];

const FAQPage = () => {
  const [expanded, setExpanded] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");

  const handleToggle = (index) => {
    setExpanded((prev) => (prev === index ? false : index));
  };

  const handleQuestionSubmit = () => {
    if (userQuestion.trim()) {
      alert(`Your question has been submitted: "${userQuestion}"`);
      setUserQuestion("");
    } else {
      alert("Please enter a valid question before submitting.");
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "maroon",
          marginBottom: 3,
        }}
      >
        FAQs - Frequently Asked Questions
      </Typography>
      <Box
        sx={{
          maxWidth: "700px", // Width for FAQ section
          margin: "auto",
          borderRadius: 8, // Center horizontally
        }}
      >
        {faqData.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={() => handleToggle(index)}
            sx={{
              marginBottom: 2,
              boxShadow: 3,
              borderRadius: 2, 
              "&:hover": {
                backgroundColor: "#f9f9f9",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: "maroon",
                color: "white",
                borderRadius: "4px", 
                "&:hover": {
                  backgroundColor: "#a83232",
                },
                
                backgroundColor: "maroon",
                borderRadius: "4px",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Box
        sx={{
          maxWidth: "700px",
          margin: "40px auto 0 auto",
          padding: 3,
          boxShadow: 3,
          borderRadius: "10px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "maroon", marginBottom: 2 }}
        >
          Have More Questions?
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          If you have additional questions, feel free to ask below, and our team
          will respond promptly.
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          placeholder="Type your question here..."
          value={userQuestion}
          onChange={(e) => setUserQuestion(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleQuestionSubmit}
          sx={{
            backgroundColor: "maroon",
            "&:hover": { backgroundColor: "#a83232" },
          }}
        >
          Submit Question
        </Button>
      </Box>
    </Box>
  );
};

export default FAQPage;
