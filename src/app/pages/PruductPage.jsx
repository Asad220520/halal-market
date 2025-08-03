import React, { useState } from "react";
import ProductCard from "../components/ui/ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import API_BASE_URL from "../../config/api";

const ProductPage = () => {
  const { product } = useParams();
  const [products, setProducts] = useState([]);

  async function getProducts() {
    let res = await axios.get(`${API_BASE_URL}/products/`);
    setProducts(res.data);
  }
  useEffect(() => {
    getProducts();
  }, []);

 console.log(products);
 

  return (
    <div className="container  mx-auto px-4  pb-4 sm:pb-12">
      <div className='flex justify-center flex-wrap gap-2 items-center sm:gap-14  sm:items-start"'>
        {products.map((el, id) => {
          return el.category.title == product ? (
            <ProductCard el={el} key={id} />
          ) : (
            <h1>Not Product</h1>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
