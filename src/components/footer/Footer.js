import React from "react";

import "./Footer.css";
import { logoBookmarkWhite, iconFacebook, iconTwitter } from "../../assets";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-width">
        <div className="footer-left">
          <img src={logoBookmarkWhite} alt="Bookmark" />
          <p>FEATURES</p>
          <p>PRICING</p>
          <p>CONTACT</p>
        </div>
        <div className="footer-right">
          <img src={iconFacebook} alt="Facebook" />
          <img src={iconTwitter} alt="Twitter" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
