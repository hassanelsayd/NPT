import React from "react";
import header from "../assets/header.svg";
import "./Header.css";
const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header-data">
          <h1>Develop your skills without diligence </h1>
          <p>
            But i must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and i will give you a complete
            account of the system.
          </p>

          <div className="buttons">
            <button>Get Started</button>
            <button>Discount</button>
          </div>
        </div>
        <div className="header-image">
          <img src={header} alt="header-image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
