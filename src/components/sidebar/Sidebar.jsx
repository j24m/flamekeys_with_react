import "./Sidebar.css";
import { useState } from "react/cjs/react.development";

const Sidebar = () => {
  const [range, setRange] = useState("0");
  const sliderRange = (e) => {
    setRange(e.target.value);
  };
  return (
    <>
      <div className="parent-of-sidebar-product-container">
        <div className="sidebar-products-container">
          <div className="sidebar-margin-top sidebar-container">
            <h1 className="filter-heading">FILTER</h1>
            <div className="slider-container">
              <input
                onChange={sliderRange}
                id="range-slider"
                className="slider"
                type="range"
                name="slider"
                min="0"
                max="5000"
              />
              <p id="range-value">{range}</p>
            </div>
            <h2 className="sidebar-cmp-heading">CATEGORY</h2>
            <ul className="ul">
              <li>
                <div className="checkbox-input">
                  <input id="keyboard" type="checkbox" name="check" />
                  <label htmlFor="keyboard">Keyboards</label>
                </div>
              </li>
              <li>
                <div className="checkbox-input">
                  <input id="mice" type="checkbox" name="check" />
                  <label htmlFor="mice">Mice</label>
                </div>
              </li>
              <li>
                <div className="checkbox-input">
                  <input id="keycaps" type="checkbox" name="check" />
                  <label htmlFor="keycaps">KeyCaps</label>
                </div>
              </li>
            </ul>
            <ul className="ul">
              <h2 className="sidebar-cmp-heading">BRANDS</h2>
              <li>
                <div className="checkbox-input">
                  <input id="brand-1" type="checkbox" name="check" />
                  <label htmlFor="brand-1">Ducky</label>
                </div>
              </li>
              <li>
                <div className="checkbox-input">
                  <input id="brand-2" type="checkbox" name="check" />
                  <label htmlFor="brand-2">Zebronics</label>
                </div>
              </li>
              <li>
                <div className="checkbox-input">
                  <input id="brand-3" type="checkbox" name="check" />
                  <label htmlFor="brand-3">Logitech</label>
                </div>
              </li>
            </ul>
            <ul className="ul">
              <h2 className="sidebar-cmp-heading">Avg. Rating</h2>
              <li className="star-symbol">
                <input type="radio" id="4Stars & above" name="ratings" />
                <label htmlFor="4Stars & above">
                  <strong> ✰✰✰✰✰ </strong>
                </label>
              </li>
              <li className="star-symbol">
                <input type="radio" id="4Stars & above" name="ratings" />
                <label htmlFor="4Stars & above">
                  <strong> ✰✰✰✰ </strong>
                </label>
              </li>
              <li className="star-symbol">
                <input type="radio" id="3Stars & above" name="ratings" />
                <label htmlFor="3Stars & above">
                  <strong> ✰✰✰ </strong>
                </label>
              </li>
              <li className="star-symbol">
                <input type="radio" id="2Stars & above" name="ratings" />
                <label htmlFor="2Stars & above">
                  <strong> ✰✰ </strong>
                </label>
              </li>
              <li className="star-symbol">
                <input type="radio" id="1Star & above" name="ratings" />
                <label htmlFor="1Star & above">
                  <strong> ✰ </strong>
                </label>
              </li>
            </ul>
            <ul className="ul">
              <h2 className="sidebar-cmp-heading">Price</h2>
            </ul>
            <ul className="ul">
              <h2 className="sidebar-cmp-heading">Discount</h2>
              <li>
                <div className="checkbox-input">
                  <input id="off-by-10" type="checkbox" name="check" />
                  <label htmlFor="off-by-10">10% Off or more</label>
                </div>
              </li>
              <li>
                <div className="checkbox-input">
                  <input id="off-by-25" type="checkbox" name="check" />
                  <label htmlFor="off-by-25">25% Off or more</label>
                </div>
              </li>
              <li>
                <div className="checkbox-input">
                  <input id="off-by-35" type="checkbox" name="check" />
                  <label htmlFor="off-by-35">35% Off or more</label>
                </div>
              </li>
              <li>
                <div className="checkbox-input">
                  <input id="off-by-50" type="checkbox" name="check" />
                  <label htmlFor="off-by-50">50% Off or more</label>
                </div>
              </li>
            </ul>
            <ul className="ul">
              <h2 className="sidebar-cmp-heading">Sort by</h2>
              <li>
                <input type="radio" name="sort" id="High_to_Low" />
                <label htmlFor="High_to_Low"> High to low</label>
              </li>
              <li>
                <input type="radio" name="sort" id="Low_to_High" />
                <label htmlFor="Low_to_High"> Low to high</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
