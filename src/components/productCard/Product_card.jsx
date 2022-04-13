import "./Product_card.css";
import { PhHeartBold } from "../../assets/Icons.jsx";
import keyboard1 from "../../assets/images/multicolor-keyboard.jpg";
import { Link } from "react-router-dom";
import { MakiCross11 } from "../../assets/Icons.jsx";
const ProductCard = ({ product }) => {
  const { title, image_url, rating, price, discount, outOfStock } = product;
  const discountPrice = price * (1 - discount / 100);
  return (
    <>
      <div className="product-card-component">
        <div className="product-card-container">
          <div className="e-commerce-card">
            {outOfStock ? (
              <div class="disable-card">
                <h3 class="outofstock-badge">Out Of Stock</h3>
              </div>
            ) : (
              <div className="badge-on-card">{discount}% Off</div>
            )}
            {/* <div className="btn-dismiss">
              <MakiCross11></MakiCross11>
            </div> */}
            <div className="mech-keyboard-img-container">
              <img
                className="mech-keyboard-img"
                src={image_url}
                alt="multicolor-mechanical-keyboard"
              />
            </div>
            <div className="ecom-card-info">
              <h1 className="keyboard-name-heading">{title}</h1>
              <div className="rating-wishlist-flex">
                <div className="rate">
                  {rating}
                  <strong className="star-symbol">✰</strong>
                </div>
                <div className="icon-wishlist">
                  <Link className="icon-wishlist-link" to="#">
                    <PhHeartBold className="heart-icon"></PhHeartBold>
                  </Link>
                </div>
              </div>
              <div className="keyboard-prices">
                <div className="discount-price">{discountPrice}</div>
                <div className="total-price">
                  <s>{price}</s>
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
    </>
  );
};

export default ProductCard;
