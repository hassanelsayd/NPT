import React from "react";
import shareImg from "../assets/sharing.png";
import "./Share.css";
const Share = () => {
  return (
    <div className="share" id="sharing">
      <div className="container">
        <section>
          <div className="section-info">
            <h1>Each student can share their discount code for freinds</h1>
            <p>
              But i must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and i will give you a complete
              account of the system.
            </p>
            <button>I have a code</button>
          </div>
          <div className="section-img">
            <img src={shareImg} alt="share-img" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Share;
