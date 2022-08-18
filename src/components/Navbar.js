import React, { useRef, useState } from "react";
import logo from "../assets/logo.png";

import "./Navbar.css";
const Navbar = () => {
  const menu = useRef(null);
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-left">
          <div className="logo">
            <img src={logo} altt="logo" />
            <h3>NPT</h3>
          </div>
          <ul className={`${expanded ? "active" : ""} menu`} ref={menu}>
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#plans">Pricing</a>
            </li>
            <li>
              <a href="#sharing">Sharing</a>
            </li>
          </ul>
        </div>
        <div className={`${expanded ? "active" : ""} nav-right`}>
          <div className="lang-select">
            <i className="fa-solid fa-earth-asia"></i> English
          </div>
          <div className="auth">Sign up</div>
        </div>

        <div
          className={`expand-menu ${expanded ? "active" : ""} `}
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          <i className="fa-solid fa-square-caret-down"></i>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
