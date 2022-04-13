import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import "./Landing.css";
import React from "react";
import { Link } from "react-router-dom";

const Landing = (props) => {
  return (
    <div className="flamekeys-landing-page">
      <Header />
      <div className="image-container"></div>
      <div className="caption-content1">
        <h1 className="homepage-img-title">DUCKY RGB TKL-WHITE KEYBOARD</h1>
        <h2>MORE PRODUCTS</h2>
        <Link className="caption-link" to="/productcategory">
          ORDER NOW
        </Link>
      </div>
      <div className="caption-content2">
        <h1>DUCKY FEATHER BLACK AND WHITE MOUSE</h1>
        <h2>MORE PRODUCTS</h2>
        <Link className="caption-link" to="/productcategory">
          ORDER NOW
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
