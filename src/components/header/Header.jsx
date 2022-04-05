import "./Header.css";
import { RadixIconsKeyboard } from "../../assets/Icons";
import { PhShoppingCartSimpleBold } from "../../assets/Icons";
import { PhHeartBold } from "../../assets/Icons";
import pingu from "../../assets/images/pingu.jpg";
import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <div className="nav-bar-color home-page-container">
        <div className="nav-bar">
          <Link className="homepage-nav-links" to="/">
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
              <div>OUR PRODUCTS</div>
            </Link>

            <Link className="homepage-nav-links" to="/cart">
              <PhShoppingCartSimpleBold transform="scale(1.1)" color="white" />
            </Link>

            <Link className="homepage-nav-links" to="/wishlist">
              <PhHeartBold color="white" />
            </Link>

            <Link className="homepage-nav-links" to="/login_signup">
              <div>LOGIN</div>
            </Link>

            {/* <!-- Avatar --> */}
            <Link to="/home">
              <div className="avatar avatar-sm">
                <img src={pingu} alt="penguin-w-headphones" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
