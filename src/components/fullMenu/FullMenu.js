import React from "react";

import {
  logoBookmark,
  iconTwitter,
  iconFacebook,
  iconClose,
} from "../../assets";
import "./FullMenu.css";

const FullMenu = () => {
  return (
    <div className="fullmenu-container">
      <div className="fullmenu-top">
        <div className="heading">
          <img src={logoBookmark} alt="Bookmark" />
          <img src={iconClose} alt="Close" />
        </div>
        <div className="menu">
          <ul>
            <li>FEATURES</li>
            <li>PRICING</li>
            <li>CONTACT</li>
            <button>LOGIN</button>
          </ul>
        </div>
      </div>
      <div className="fullmenu-bottom">
        <img src={iconFacebook} alt="facebook" />
        <img src={iconTwitter} alt="twitter" />
      </div>
    </div>
  );
};

export default FullMenu;
