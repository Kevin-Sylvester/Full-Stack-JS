import React from "react";
import { myContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import beatsLogo from "../Photos/beatsLogo.png";

export const Navbar = () => {
  const data = useContext(myContext);
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={beatsLogo} alt="logo" />
      </div>
      <div className="right-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
        
          </li>

          <li>
            <Link
              to="/Specs"
              onClick={() => {
                window.scrollTo({ behavior: "smooth", top: 700 });
              }}
            >
              <li>Specs</li>
            </Link>
          </li>
          <li>
            <Link
              to="/Case"
              onClick={() => {
                window.scrollTo({ behavior: "smooth", top: 700 });
              }}
            >
              <li>Case</li>
            </Link>
          </li>
          <li>
            <Link
              to="/Products"
              onClick={() => {
                window.scrollTo({ behavior: "smooth", top: 700 });
              }}
            >
              <li>Products</li>
            </Link>
          </li>
        </ul>
        <button className="nav-btn">Shop</button>
      </div>
    </nav>
  );
};
