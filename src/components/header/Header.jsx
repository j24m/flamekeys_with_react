import "./Header.css";
import { RadixIconsKeyboard } from "../../assets/Icons";
import { PhShoppingCartSimpleBold } from "../../assets/Icons";
import { PhUserCircleLight } from "../../assets/Icons.jsx";
import { PhHeartBold } from "../../assets/Icons";
import pingu from "../../assets/images/pingu.jpg";
import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <div className="nav-bar-color home-page-container">
        <div className="nav-bar">
          <Link className="homepage-nav-links" to="/home">
            <div className="homepage-nav-logo">
              <div>FlameKeys</div>
              <RadixIconsKeyboard color="white" />
            </div>
          </Link>
          <div className="nav-bar-right-side">
            <div className="input-field-icon">
              <label>
                {/* <!-- icon container --> */}
                <span className="icon small">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  className="input-field"
                  placeholder="Search"
                  type="text"
                />
              </label>
            </div>
            <Link className="homepage-nav-links" to="/productcategory">
              <div>Our Products</div>
            </Link>

            <Link className="homepage-nav-links" to="/cart">
              Cart
            </Link>

            <Link className="homepage-nav-links" to="/wishlist">
              Wishlist
            </Link>

            <Link className="homepage-nav-links" to="/login_signup">
              <div>Login</div>
            </Link>

            {/* <!-- Avatar --> */}
            <Link to="/home">
              <div className="">
                <PhUserCircleLight></PhUserCircleLight>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
