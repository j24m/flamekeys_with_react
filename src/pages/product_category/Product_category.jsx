import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import "./Product_category.css";
import product_category_keyboard from "../../assets/images/product-keyboard-image.webp";
import product_category_mouse from "../../assets/images/product-mouse.webp";
import product_category_keycap from "../../assets/images/product-keycap.webp";
import React from "react";
import { Link } from "react-router-dom";

const Product_category = (props) => {
  return (
    <div className="product-category-page">
      <Header />
      <div class="allproducts-container">
        <div class="title-container">
          <h1>OUR PRODUCTS</h1>
          <h2>
            Dive into a wide range of mechanical keyboards and other peripherals
          </h2>
        </div>

        <div class="product-img-container">
          <div class="img1-container">
            <Link to="/products">
              <img src={product_category_keyboard} alt="keyboard" />
            </Link>
            <div class="product-img-txt-overlay">
              <h1>Mech Keyboards</h1>
              <h2>Tap on image for more products</h2>
            </div>
          </div>
          <div class="img2and3-container">
            <div class="img2-container">
              <Link to="/products">
                <img src={product_category_mouse} alt="mouse" />
              </Link>
              <div class="product-img-txt-overlay">
                <h1>Mice</h1>
              </div>
            </div>
            <div class="img3-container">
              <Link to="/products">
                <img src={product_category_keycap} alt="keycap" />
              </Link>
              <div class="product-img-txt-overlay">
                <h1>KeyCaps</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Product_category;
