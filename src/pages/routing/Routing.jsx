import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../landing_page/Landing.jsx";
import ProductCategory from "../product_category/Product_category.jsx";
import Products from "../product_listing_page/Product_listing_page.jsx";
import Cart from "../cart/Cart.jsx";
import Wishlist from "../wishlist/Wishlist.jsx";
import Login_signup from "../login_signup/Login_signup.jsx";
import Mockman from "mockman-js";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/productcategory" element={<ProductCategory />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login_signup" element={<Login_signup />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </>
  );
};

export default Routing;
