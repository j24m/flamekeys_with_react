import "./Product_card.css";
import { PhHeartBold } from "../../assets/Icons.jsx";
import keyboard1 from "../../assets/images/multicolor-keyboard.jpg";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div className="product-card-component">
      <div className="product-card-container">
        <div className="e-commerce-card box-shadow">
          <div className="badge-on-card">20% OFF</div>
          <div className="mech-keyboard-img-container">
            <img
              className="mech-keyboard-img"
              src={keyboard1}
              alt="multicolor-mechanical-keyboard"
            />
          </div>
          <div className="ecom-card-info">
            <h1 className="keyboard-name-heading">
              Fiodio Mechanical Keyboard
            </h1>
            <div className="rate-review">
              <div className="rate">
                4.3<strong className="star-symbol">✰</strong>
              </div>
              <div className="review">1.2k reviews</div>
              <div className="icon-wishlist icon-sizing">
                <Link className="icon-wishlist-link" to="#">
                  <PhHeartBold className="heart-icon"></PhHeartBold>
                </Link>
              </div>
            </div>
            <div className="keyboard-prices">
              <div className="discount-price">₹2499</div>
              <div className="total-price">
                <s>₹3999</s>
              </div>
            </div>
            <div className="buttons">
              <button className="btn btn-primary">
                <i className="bi bi-cart3"></i>
                <span className="icon-label-gap">Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
