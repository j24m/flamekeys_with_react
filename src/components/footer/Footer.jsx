import "./Footer.css";
import React from "react";

const Footer = (props) => {
  return (
    <div>
      <div className="footer">
        <h1>
          Made with <span className="heart-icon">❤</span> by Jyotsna Mehta.
        </h1>
        <h1>Follow Me.</h1>
        <div className="social-media-handles">
          <a
            className="footer-links"
            href="https://twitter.com/JyotsnaMehta24"
            target="_blank"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            className="footer-links"
            href="https://www.linkedin.com/in/jyotsna-mehta-795846215/"
            target="_blank"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            className="footer-links"
            href="https://github.com/j24m"
            target="_blank"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
