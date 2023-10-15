import React, { useContext } from "react";
import { AppContext } from "./App";
import "./iPhone14Pro.css";
import "./NewiPadPro.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
function iPhone14Pro() {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const handleAddToCart = (productName) => {
    navigate("/buy");
  };

  return (
    <div className="iphone14pro-page">
      <div className="iphone14pro-item">
        <img
          src="/src/image/iphoneesas.jpg"
          alt="iPhone 14 Pro 1"
          className="iphone14pro-image"
        />
        <div className="overlay">
          <p>$799</p>
          <div className="button-container">
            <Button
              variant="outlined"
              className="order-button"
              onClick={() => handleAddToCart(" iPhone 14 Pro ")}
            >
              Order Now
            </Button>
            <div className="centered-link">
              <Link to="/learn-more">Learn more</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="iphone14pro-item">
        <img
          src="/src/image/hero iphonw2.jpg"
          alt="iPhone 14 Pro 2"
          className="iphone14pro-image"
        />
        <div className="overlay">
          <p>$799</p>
          <div className="button-container">
            <Button
              variant="outlined"
              className="order-button"
              onClick={() => handleAddToCart("iPhone 14 Pro")}
            >
              Order Now
            </Button>
            <div className="centered-link">
              <Link to="/learn-more">Learn more</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="iphone14pro-item">
        <img
          src="/src/image/hero iphone5.jpg"
          alt="iPhone 14 Pro 3"
          className="iphone14pro-image"
        />
        <div className="overlay">
          <p>$799</p>
          <div className="button-container">
            <Button
              variant="outlined"
              className="order-button"
              onClick={() => handleAddToCart("iPhone 14 Pro Series 9")}
            >
              Order Now
            </Button>
            <div className="centered-link">
              <Link to="/learn-more">Learn more</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-watch-container">
        <h2 style={{ textAlign: "center", fontSize: "64px" }}>
          Which iPhone is right for you?
        </h2>
        <div className="custom-watch-items">
          <div className="custom-watch-item">
            <img
              src="/src/image/large.jpg"
              alt="Apple Watch SE"
              className="custom-watch-image"
            />
            <div className="custom-overlay">
              <h3>Apple Watch SE</h3>
              <p>The ultimate iPhone.</p>
              <p>From $249</p>
              <div className="button-container">
                <Button
                  variant="outlined"
                  className="order-button"
                  onClick={() => handleAddToCart("iPhone SE")}
                >
                  Order Now
                </Button>
                <div className="centered-link">
                  <Link to="/learn-more">Learn more</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-watch-item">
            <img
              src="/src/image/lage2.jpg"
              alt="Apple Watch Series 7"
              className="custom-iphone-image"
            />
            <div className="custom-overlay">
              <h3>Apple Watch Series 7</h3>
              <p>A total powerhouse.</p>
              <p>From $399</p>
              <div className="button-container">
                <Button
                  variant="outlined"
                  className="order-button"
                  onClick={() => handleAddToCart("iPhone 13 Pro")}
                >
                  Order Now
                </Button>
                <div className="centered-link">
                  <Link to="/learn-more">Learn more</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-iphone-item">
            <img
              src="/src/image/large3.jpg"
              alt="Apple Watch Series 6"
              className="custom-watch-image"
            />
            <div className="custom-overlay">
              <h3>Apple Watch Series 6</h3>
              <p>As amazing as ever.</p>
              <p>From $349</p>
              <div className="button-container">
                <Button
                  variant="outlined"
                  className="order-button"
                  onClick={() => handleAddToCart("iPhone 13")}
                >
                  Order Now
                </Button>
                <div className="centered-link">
                  <Link to="/learn-more">Learn more</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-iphone-item">
            <img
              src="/src/image/large.4.jpg"
              alt="Apple Watch Series 6"
              className="custom-watch-image"
            />
            <div className="custom-overlay">
              <h3>Apple Watch Series 6</h3>
              <p>Serious power. Serious value.</p>
              <p>From $349</p>
              <div className="button-container">
                <Button
                  variant="outlined"
                  className="order-button"
                  onClick={() => handleAddToCart("iPhone 14 Pro ")}
                >
                  Order Now
                </Button>
                <div className="centered-link">
                  <Link to="/learn-more">Learn more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default iPhone14Pro;
