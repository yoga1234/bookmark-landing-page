import React from "react";

import "./Navbar.css";
import { logoBookmark } from "../../assets";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="left-navbar">
        <img src={logoBookmark} alt="bookmark" />
      </div>
      <div className="right-navbar">
        <ul>
          <li>FEATURES</li>
          <li>PRICING</li>
          <li>CONTACT</li>
          <li>
            <button>LOGIN</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
