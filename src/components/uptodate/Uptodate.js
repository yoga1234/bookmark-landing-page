import React from "react";

import "./Uptodate.css";

const Uptodate = () => {
  return (
    <div className="uptodate-container">
      <p>35.000+ ALREADY JOINED</p>
      <h3>Stay up-to-date with what we're doing</h3>
      <form action="">
        <div className="form-mail">
          <input type="text" placeholder="Enter your emal address" required />
          <button>Contact Us</button>
        </div>
      </form>
    </div>
  );
};

export default Uptodate;
