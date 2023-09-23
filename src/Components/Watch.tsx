import React, { useContext } from "react";
import { AppContext } from "./App";
import "./Watch.css";

function Watch() {
  const { dispatch } = useContext(AppContext);

  const handleAddToCart = (productName) => {
    dispatch({ type: "increment", productName });
  };

  return (
    <div className="watch-page">
      <div className="watch-item">
        <img
          src="/src/image/watch2.jpg"
          alt="Watch 1"
          className="watch-image"
        />
        <div className="overlay">
          <p>$799</p>
          <p>Available starting 9.22</p>
          <button onClick={() => handleAddToCart("Watch 1")}>Order now</button>
          <a href="#">Learn more</a>
        </div>
      </div>
      <div className="watch-item">
        <img
          src="/src/image/watch1.jpg"
          alt="Watch 2"
          className="watch-image"
        />
        <div className="overlay">
          <p>$799</p>
          <p>Available starting 9.22</p>
          <button onClick={() => handleAddToCart("Watch 2")}>Order now</button>
          <a href="#">Learn more</a>
        </div>
      </div>
      <div className="watch-item">
        <img
          src="/src/image/lazim1.jpg"
          alt="Watch 3"
          className="watch-image"
        />
        <div className="overlay">
          <p>$799</p>
          <p>Available starting 9.22</p>
          <button onClick={() => handleAddToCart("Watch 3")}>Order now</button>
          <a href="#">Learn more</a>
        </div>
        <div className="custom-watch-container">
        <h2 style={{ textAlign: 'center', fontSize: '64px' }}>
  Which Apple Watch is right for you?
</h2>

  <div className="custom-watch-items">
    <div className="custom-watch-item">
      <img
        src="/src/image/saat.jpg"
        alt="Apple Watch SE"
        className="custom-watch-image"
      />
      <div className="custom-overlay">
        <h3>Apple Watch SE</h3>
        <p>All the essentials.</p>
        <p>Light on price.</p>
        <p>From $249</p>
        <button onClick={() => handleAddToCart("Watch 1")}>Order now</button>
        <a href="#" className="custom-learn-more-link">Learn more</a>
      </div>
    </div>
    <div className="custom-watch-item">
      <img
        src="/src/image/saat2.jpg"
        alt="Apple Watch Series 7"
        className="custom-watch-image"
      />
      <div className="custom-overlay">
        <h3>Apple Watch Series 7</h3>
        <p>Now faster and more durable.</p>
        <p>From $399</p>
        <button onClick={() => handleAddToCart("Watch 1")}>Order now</button>
        <a href="#" className="custom-learn-more-link">Learn more</a>
      </div>
    </div>
    <div className="custom-watch-item">
      <img
        src="/src/image/saat3.jpg"
        alt="Apple Watch Series 6"
        className="custom-watch-image"
      />
      <div className="custom-overlay">
        <h3>Apple Watch Series 6</h3>
        <p>The future of health.</p>
        <p>From $349</p>
        <button onClick={() => handleAddToCart("Watch 1")}>Order now</button>
        <a href="#" className="custom-learn-more-link">Learn more</a>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

export default Watch;
