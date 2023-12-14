import React, { useState } from "react";
import axios from "axios";

function Reviews({ onSubmitFeedback }) {
  const [feedbackText, setFeedbackText] = useState();

  const handleFeedbackChange = (event) => {
    setFeedbackText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Make a POST request to the server to save the feedback
    axios
      .post("http://localhost:3000/feedbacks", { text: feedbackText })
      .then((response) => {
        console.log("Feedback successfully posted:", response.data);
        setFeedbackText("");
        // Call the parent component's function to handle the feedback submission
        onSubmitFeedback(response.data);
        // Display thank-you message as an alert
        alert("Thank you for submitting your feedback!");
      })
      .catch((error) => {
        console.error("Error posting feedback:", error);
      });
  };