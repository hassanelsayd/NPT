import React from "react";
import job from "../assets/job.svg";
import "./Features.css";

const Job = () => {
  return (
    <div className="container">
      <div className="features job">
        <div className="text">
          <h1>You can practice at any time convenient for you</h1>
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized
          </p>
          <button>Get Started</button>
        </div>
        <div className="image">
          <img src={job} alt="features" />
        </div>
      </div>
    </div>
  );
};
export default Job;
