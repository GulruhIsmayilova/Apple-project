import React from "react";
import { Link } from "react-router-dom";
import "./Error.css"; // Footer bileşenine özel stil dosyasını içe aktarın


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
