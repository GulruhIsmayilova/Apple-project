import React, { useContext } from "react";
import { AppContext } from "./App";
import "./iPhone14Pro.css";
import { Link, useNavigate } from "react-router-dom";

function iPhone14Pro() {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const handleAddToCart = (productName) => {
    dispatch({ type: "increment", productName });
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
          <p>Available starting 9.22</p>
          <button onClick={() => handleAddToCart(" iPhone 14 Pro ")}>
            Order now
          </button>
          <a href="#">Learn more</a>
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
          <p>Available starting 9.22</p>
          <button onClick={() => handleAddToCart("iPhone 14 Pro")}>
            Order now
          </button>
          <a href="#">Learn more</a>
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
          <p>Available starting 9.22</p>
          <button onClick={() => handleAddToCart("iPhone 14 Pro Series 9")}>
            Order now
          </button>
          <a href="#">Learn more</a>
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
              <button onClick={() => handleAddToCart("iPhone SE")}>
                Order now
              </button>
              <a href="#" className="custom-learn-more-link">
                Learn more
              </a>
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
              <p>A total powerhouse..</p>
              <p>From $399</p>
              <button onClick={() => handleAddToCart("iPhone 13 Pro")}>
                Order now
              </button>
              <a href="#" className="custom-learn-more-link">
                Learn more
              </a>
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
              <button onClick={() => handleAddToCart("iPhone 13")}>
                Order now
              </button>
              <a href="#" className="custom-learn-more-link">
                Learn more
              </a>
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
              <button onClick={() => handleAddToCart("iPhone 14 Pro ")}>
                Order now
              </button>
              <a href="#" className="custom-learn-more-link">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default iPhone14Pro;
