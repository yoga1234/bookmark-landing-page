import React from "react";

import "./Navbar.css";
import { logoBookmark, iconHamburger } from "../../assets";

const Navbar = () => {
  const handleMenu = () => {
    const fullMenuUI = document.querySelector(".fullmenu-container");

    fullMenuUI.style.bottom = "0";
  };
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
              onClick={handleMenu}
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
