import React from "react";
import beatsLogo from "../Photos/beatsLogo.png";
import facebook from "../Icons/facebook.png";
import instagram from "../Icons/instagram.png";
import linkedin from "../Icons/linkedin.png";
import twitter from "../Icons/twitter.png";
import rightArrow from "../Icons/rightArrow.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={beatsLogo} alt="logo" />
      </div>
      <div className="list">
        <h3>Proucts</h3>
        <ul>
          <li>
            {" "}
            <a href>Headphones</a>{" "}
          </li>
          <li>
            {" "}
            <a href>Earphones</a>{" "}
          </li>
          <li>
            {" "}
            <a href>Earbuds</a>{" "}
          </li>
          <li>
            {" "}
            <a href>Accessories</a>{" "}
          </li>
        </ul>
      </div>
      <div className="list support">
        <h3>Support</h3>
        <ul>
          <li>
            {" "}
            <a href>Product help</a>{" "}
          </li>
          <li>
            {" "}
            <a href>Register</a>{" "}
          </li>
          <li>
            {" "}
            <a href>Updates</a>{" "}
          </li>
          <li>
            {" "}
            <a href>Provides</a>{" "}
          </li>
        </ul>
      </div>
      <div className="right-last-footer">
        <div className="user-input">
          <input type="email" name="email" placeholder="Email" />
          <a href>
            <img src={rightArrow} alt="bag-image" />
            Subscribe
          </a>
        </div>
        <div className="social-icon">
          <img src={facebook} alt="fb-icon" />
          <img src={twitter} alt="twitter-icon" />
          <img src={instagram} alt="intsagram-img" />
          <img src={linkedin} alt="linkdin-img" />
        </div>
      </div>
    </footer>
  );
};
