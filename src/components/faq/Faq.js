import React, { useEffect } from "react";

import "./Faq.css";
import { iconArrow } from "../../assets";

const Faq = () => {
  const toggleHiden = (e) => {
    if (e.target.tagName === "H3" || e.target.tagName === "IMG") {
      e.target.parentElement.nextSibling.firstChild.classList.toggle("hidden");
    } else {
      e.target.nextSibling.firstChild.classList.toggle("hidden");
    }
  };

  useEffect(() => {
    const faqContent = document.querySelectorAll(".faq-item-content p");

    faqContent.forEach((item) => {
      item.classList.add("hidden");
    });
  }, []);
  return (
    <div className="faq-container">
      <div className="faq-heading-container">
        <h3>Frequently Asked Questions</h3>
        <p>
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>
      <div className="faq-content-dropdown">
        <div className="faq-item">
          <div onClick={toggleHiden} className="faq-item-header">
            <h3>What is Bookmark?</h3>
            <img src={iconArrow} alt="arrow" />
          </div>
          <div className="faq-item-content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Mollitia, enim qui aperiam error tempora, porro quis consequuntur
              esse corrupti nulla at officiis, inventore reprehenderit officia
              alias aliquid harum nemo. Aliquam officiis dolores quis quasi in
              ipsa totam soluta repellendus explicabo.
            </p>
          </div>
        </div>
        <div className="faq-item">
          <div onClick={toggleHiden} className="faq-item-header">
            <h3>How can I request a new browser?</h3>
            <img src={iconArrow} alt="arrow" />
          </div>
          <div className="faq-item-content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Mollitia, enim qui aperiam error tempora, porro quis consequuntur
              esse corrupti nulla at officiis, inventore reprehenderit officia
              alias aliquid harum nemo. Aliquam officiis dolores quis quasi in
              ipsa totam soluta repellendus explicabo.
            </p>
          </div>
        </div>
        <div className="faq-item">
          <div onClick={toggleHiden} className="faq-item-header">
            <h3>Is there a mobile app?</h3>
            <img src={iconArrow} alt="arrow" />
          </div>
          <div className="faq-item-content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Mollitia, enim qui aperiam error tempora, porro quis consequuntur
              esse corrupti nulla at officiis, inventore reprehenderit officia
              alias aliquid harum nemo. Aliquam officiis dolores quis quasi in
              ipsa totam soluta repellendus explicabo.
            </p>
          </div>
        </div>
        <div className="faq-item">
          <div onClick={toggleHiden} className="faq-item-header">
            <h3>What about other Chromium Browser?</h3>
            <img src={iconArrow} alt="arrow" />
          </div>
          <div className="faq-item-content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Mollitia, enim qui aperiam error tempora, porro quis consequuntur
              esse corrupti nulla at officiis, inventore reprehenderit officia
              alias aliquid harum nemo. Aliquam officiis dolores quis quasi in
              ipsa totam soluta repellendus explicabo.
            </p>
          </div>
        </div>
        <button className="faq-more-btn">More Info</button>
      </div>
    </div>
  );
};

export default Faq;
