import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProductCard from "../../components/productCard/Product_card.jsx";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Product_listing_page.css";

const Products = (props) => {
  return (
    <>
      <Header />
      <main className="main-product-listing">
        <Sidebar />
        <div className="productcards-container">
          {Array.from({ length: 12 }).map((productcard) => (
            <ProductCard />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Products;
