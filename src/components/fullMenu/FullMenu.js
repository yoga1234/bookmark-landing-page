import React from "react";

import {
  logoBookmarkWhite,
  iconTwitter,
  iconFacebook,
  iconClose,
} from "../../assets";
import "./FullMenu.css";

const FullMenu = () => {
  const closeMenu = () => {
    const menuUI = document.querySelector(".fullmenu-container");

    menuUI.style.bottom = "100vh";
  };
  return (
    <div className="fullmenu-container">
      <div className="fullmenu-top">
        <div className="heading">
          <img src={logoBookmarkWhite} alt="Bookmark" />
          <img onClick={closeMenu} src={iconClose} alt="Close" />
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
