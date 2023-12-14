import React, { useState } from "react";
import axios from "axios";

function Reviews({ onSubmitFeedback }) {
  const [feedbackText, setFeedbackText] = useState();

  const handleFeedbackChange = (event) => {
    setFeedbackText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();