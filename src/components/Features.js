import React from "react";
import features from "../assets/features.svg";
import "./Features.css";

const Features = () => {
  return (
    <div className="container" id="features">
      <div className="features">
        <div className="image">
          <img src={features} alt="features" />
        </div>
        <div className="text">
          <h1>
            We have been improving Our product
            <span> for many years</span>
          </h1>
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};
export default Features;
