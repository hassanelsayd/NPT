import React from "react";
import logo from "../assets/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-desc">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h2>NPT</h2>
            </div>
            <p>
              But i must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and i will give you
            </p>
            <div className="sub">
              <input type="email" placeholder="enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
          <ul className="footer-list">
            <h3>Platforms</h3>
            <li>Overview</li>
            <li>Featuers</li>
            <li>About</li>
            <li>Pricing</li>
          </ul>
          <ul className="footer-list">
            <h3>Help</h3>
            <li>How does it work?</li>
            <li>Where to ask questions?</li>
            <li>How to pay?</li>
            <li>What is needed for this</li>
          </ul>
          <ul className="footer-list">
            <h3>Contact</h3>
            <li>+201033704442</li>
            <li>
              Egypt, Cairo
              <br /> Ismailia, port said street
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>NPT 2021 -- 2022. All rights reserved.</span>
          <ul className="social">
            <li>
              <i class="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i class="fa-brands fa-twitter"></i>
            </li>
            <li>
              <i class="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i class="fa-brands fa-linkedin"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
