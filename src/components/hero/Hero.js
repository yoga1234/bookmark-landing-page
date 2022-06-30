import React from "react";

import "./Hero.css";
import { illustrationHero } from "../../assets";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left-side">
        <h2>A Simple Bookmark Manager</h2>
        <p>
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="hero-button-container">
          <button className="hero-button hero-chrome-btn">
            Get it on Chrome
          </button>
          <button className="hero-button hero-firefox-btn">
            Get it on Firefox
          </button>
        </div>
      </div>
      <div className="hero-right-side">
        <img src={illustrationHero} alt="Browser Tab" />
        <div className="blue-hero-block"></div>
      </div>
    </div>
  );
};

export default Hero;
