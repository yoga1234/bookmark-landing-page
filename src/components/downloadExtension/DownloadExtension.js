import React from "react";

import "./DownloadExtension.css";
import { logoChrome, logoFirefox, logoOpera } from "../../assets";

const DownloadExtension = () => {
  return (
    <div className="extension-container">
      <div className="top-side">
        <h3>Download the extension</h3>
        <p>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div className="bottom-side">
        <div className="feature-card">
          <img src={logoChrome} alt="Browser Google Chrome" />
          <h3>Add to Chrome</h3>
          <p>Minimun version 62</p>
          <button>Add & Install Extension</button>
        </div>
        <div className="feature-card">
          <img src={logoFirefox} alt="Browser Firefox" />
          <h3>Add to Firefox</h3>
          <p>Minimun version 55</p>
          <button>Add & Install Extension</button>
        </div>
        <div className="feature-card">
          <img src={logoOpera} alt="Browser Opera" />
          <h3>Add to Opera</h3>
          <p>Minimun version 46</p>
          <button>Add & Install Extension</button>
        </div>
      </div>
    </div>
  );
};

export default DownloadExtension;
