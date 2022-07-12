import React from "react";

import "./Footer.css";
import {
  logoBookmarkWhite,
  iconFacebook,
  iconTwitter,
  iconFacebookRed,
  iconTwitterRed,
} from "../../assets";

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
          <img
            src={iconFacebook}
            alt="Facebook"
            onMouseOver={(e) => (e.currentTarget.src = iconFacebookRed)}
            onMouseLeave={(e) => (e.currentTarget.src = iconFacebook)}
          />
          <img
            src={iconTwitter}
            alt="Twitter"
            onMouseOver={(e) => (e.currentTarget.src = iconTwitterRed)}
            onMouseLeave={(e) => (e.currentTarget.src = iconTwitter)}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
