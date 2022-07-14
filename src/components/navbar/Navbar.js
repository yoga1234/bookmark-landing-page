import React from "react";

import "./Navbar.css";
import { logoBookmark, iconHamburger, iconClose } from "../../assets";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="left-navbar">
        <img src={logoBookmark} alt="bookmark" />
      </div>
      <div className="right-navbar">
        <ul>
          <li className="navbar-btn">FEATURES</li>
          <li className="navbar-btn">PRICING</li>
          <li className="navbar-btn">CONTACT</li>
          <li className="navbar-btn">
            <button>LOGIN</button>
          </li>
          <li>
            <img
              className="hamburger-icon"
              src={iconHamburger}
              alt="hamburger"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
