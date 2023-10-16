import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

interface ErrorPageProps {
  errorMessage: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorMessage }) => {
  return (
    <div>
      <h1>Oops! An error occurred.</h1>
      <p>{errorMessage}</p>
      <Link to="/">Back to Home</Link>
      
    </div>
  );
};

export default ErrorPage;
