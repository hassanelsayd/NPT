import React from "react";
import alert from "../assets/alert.png";
import teach from "../assets/teach.png";
import internet from "../assets/internet.png";

import "./WhyUs.css";
const WhyUs = () => {
  return (
    <div className="container" id="overview">
      <div className="why-us">
        <div className="text">
          <h1>Why we are better than other platforms</h1>
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="image">
              <img src={alert} alt="alert" />
            </div>
            <div className="desc">Convenient study schedule</div>
          </div>
          <div className="card">
            <div className="image">
              <img src={teach} alt="teach" />
            </div>
            <div className="desc">Checked homework by teachers</div>
          </div>
          <div className="card">
            <div className="image">
              <img src={internet} alt="internet" />
            </div>
            <div className="desc">Modern internet platform</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
