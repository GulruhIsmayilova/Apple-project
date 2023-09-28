import React, { useContext } from "react";
import { AppContext } from "./App";
import "./Watch.css";

function NewiPadPro() {
  const { dispatch } = useContext(AppContext);

  const handleAddToCart = (productName) => {
    dispatch({ type: "increment", productName });
  };

  return (
    <div className="watch-page">
      <div className="watch-item">
        <img
          src="/src/image/ipad_hero__d0tgmaq6shm6_large.jpg"
          alt="Watch 1"
          className="watch-image"
        />
        <div className="overlay">
          <p>$799</p>
          <p>Available starting 9.22</p>
          <button onClick={() => handleAddToCart(" iPad")}>
            Order now
          </button>
          <a href="#">Learn more</a>
        </div>
      </div>
      <div className="watch-item">
        <img
          src="/src/image/ipad_pro_hero__bh3eq6sqfjw2_large.jpg"
          alt="Watch 2"
          className="watch-image"
        />
        <div className="overlay">
          <p>$799</p>
          <p>Available starting 9.22</p>
          <button onClick={() => handleAddToCart("iPad Pro")}>Order now</button>
          <a href="#">Learn more</a>
        </div>

        <div className="custom-watch-container">
          <h2 style={{ textAlign: "center", fontSize: "64px" }}>
            Which iPad is right for you?
          </h2>

          <div className="custom-watch-items">
            <div className="custom-watch-item">
              <img
                src="/src/image/ipad1.png"
                alt="Apple Watch SE"
                className="custom-watch-image"
              />
              <div className="custom-overlay">
                <h3>iPad Pro</h3>
                <p>
                  The ultimate iPad <br /> experience <br /> advanced
                  technology.
                </p>
                
                <p>From $249</p>
                <button onClick={() => handleAddToCart("iPad Pro")}>
                  Order now
                </button>
                <a href="#" className="custom-learn-more-link">
                  Learn more
                </a>
              </div>
            </div>
            <div className="custom-watch-item">
              <img
                src="/src/image/ipad2.png"
                alt="Apple Watch Series 7"
                className="custom-watch-image"
              />
              <div className="custom-overlay">
                <h3>iPad Air</h3>
                <p>Serious performance  <br />in a thin and light <br />  design.</p>
                <p>From $399</p>
                <button onClick={() => handleAddToCart("iPad Air")}>
                  Order now
                </button>
                <a href="#" className="custom-learn-more-link">
                  Learn more
                </a>
              </div>
            </div>
            <div className="custom-watch-item">
              <img
                src="/src/image/ipad3.png"
                alt="Apple Watch Series 6"
                className="custom-watch-image"
              />
              <div className="custom-overlay">
                <h3>iPad</h3>
                <p>
                  The all‑new colorful  <br /> iPad for the things <br /> you do every day.
                </p>
                <p>From $349</p>
                <button onClick={() => handleAddToCart("iPad")}>
                  Order now
                </button>
                <a href="#" className="custom-learn-more-link">
                  Learn more
                </a>
              </div>
            </div>
            <div className="custom-watch-item">
              <img
                src="/src/image/ipad4.png"
                alt="Apple Watch Series 6"
                className="custom-watch-image"
              />
              <div className="custom-overlay">
                <h3>iPad</h3>
                <p>All the essentials  <br />in the most <br /> affordable iPad.</p>
                <p>From $349</p>
                <button onClick={() => handleAddToCart("iPad")}>
                  Order now
                </button>
                <a href="#" className="custom-learn-more-link">
                  Learn more
                </a>
              </div>
            </div>
            <div className="custom-watch-item">
              <img
                src="/src/image/ipad mini.png"
                alt="Apple Watch Series 6"
                className="custom-watch-image"
              />
              <div className="custom-overlay">
                <h3>iPad mini</h3>
                <p>The full iPad  <br /> experience designed <br /> to fit in one hand</p>
                <p>From $349</p>
                <button onClick={() => handleAddToCart("iPad mini")}>
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
    </div>
  );
}

export default NewiPadPro;
