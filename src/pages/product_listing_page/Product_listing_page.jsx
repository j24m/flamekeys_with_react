import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProductCard from "../../components/productCard/Product_card.jsx";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Product_listing_page.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/products");
      const productData = await response.json();
      setProducts(productData.products);
    })();
  }, []);

  return (
    <>
      <Header />
      <main className="main-product-listing">
        <Sidebar />
        <div className="productcards-container">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Products;
