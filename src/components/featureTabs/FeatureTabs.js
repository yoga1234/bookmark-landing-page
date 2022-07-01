import React from "react";

import "./FeatureTabs.css";
import {
  illustrationFeatureTab1,
  illustrationFeatureTab2,
  illustrationFeatureTab3,
} from "../../assets";

const FeatureTabs = () => {
  return (
    <div className="feature-tabs-container">
      {/* Tabs Button */}
      <div className="tab-container">
        <button>Simple Bookmarking</button>
        <button>Speedy Searching</button>
        <button>Easy Sharing</button>
      </div>
      {/* Tabs content */}
      <div className="tabcontent">
        <div className="featurestab-image">
          <img src={illustrationFeatureTab1} alt="Browser Tabs" />
          <div className="features-blue-block"></div>
        </div>
        <div className="tabcontent-right">
          <h3>Bookmark in one click</h3>
          <p>
            Organize your bookmark however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </p>
          <button>More Info</button>
        </div>
      </div>
      <div className="tabcontent">
        <div className="featurestab-image">
          <img src={illustrationFeatureTab2} alt="Browser Search" />
          <div className="features-blue-block"></div>
        </div>
        <div className="tabcontent-right">
          <h3>Intelligent search</h3>
          <p>
            Our powerful feature will help you find saved sites in no time at
            all. No need to trawl through all of your bookmarks
          </p>
          <button>More Info</button>
        </div>
      </div>
      <div className="tabcontent">
        <div className="featurestab-image">
          <img src={illustrationFeatureTab3} alt="Browser User Find" />
          <div className="features-blue-block"></div>
        </div>
        <div className="tabcontent-right">
          <h3>Share you bookmarks</h3>
          <p>
            Easily share your bookmarks and collections with others. Create a
            shareable link that you can send at the click of a button.
          </p>
          <button>More Info</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureTabs;
