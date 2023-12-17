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

  return (
    <>
    <div className="feedback-form">
      <h2>Customer Review:</h2>
      <p>
        Please assist the E-Recipe team to include more recipes by giving us
        recipe suggestions and where we can improve on the site design. Any
        feedback is welcome.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            id="feedback"
            value={feedbackText}
            onChange={handleFeedbackChange}
            placeholder="Kindly type your feedback here..."
            rows={4}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
}

export default Reviews;