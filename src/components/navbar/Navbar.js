import React from "react";

import "./Navbar.css";
import bookmarkLogo from "../../assets/logo-bookmark.svg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="left-navbar">
        <img src={bookmarkLogo} alt="bookmark" />
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
