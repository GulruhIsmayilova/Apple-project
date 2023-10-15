import React from "react";
import { Link } from "react-router-dom";
import "./Error.css"; // Import the custom style file for the Footer component

// Functional component for displaying an error message
const ErrorPage = ({ errorMessage }) => {
  return (
    <div>
      <h1>Oops! An error occurred.</h1>
      <p>{errorMessage}</p>
      <Link to="/">Return to Home Page</Link>
    </div>
  );
};

export default ErrorPage;
