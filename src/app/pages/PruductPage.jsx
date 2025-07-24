import React, { useState } from "react";
import ProductCard from "../components/ui/ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/ui/Breadcrumbs/Breadcrumbs";
import axios from "axios";
import { useEffect } from "react";

const ProductPage = () => {
  const { category, product } = useParams();
  const [products, setProducts] = useState([]);
  // const products = [
  //   {
  //     title: "Форель",
  //     price: 420,
  //     image: img,
  //     kg: 1.5,
  //   },
  //   {
  //     title: "Форель",
  //     price: 420,
  //     image: img,
  //     kg: 1.5,
  //   },
  //   {
  //     title: "Форель",
  //     price: 420,
  //     image: img,
  //     kg: 1.5,
  //   },
  //   {
  //     title: "Форель",
  //     price: 420,
  //     image: img,
  //     kg: 1.5,
  //   },
  //   {
  //     title: "Форель",
  //     price: 420,
  //     image: img,
  //     kg: 1.5,
  //   },
  //   {
  //     title: "Форель",
  //     price: 420,
  //     image: img,
  //     kg: 1.5,
  //   },
  //   {
  //     title: "Форель",
  //     price: 420,
  //     image: img,
  //     kg: 1.5,
  //   },
  //   {
  //     title: "Форель",
  //     price: 420,
  //     image: img,
  //     kg: 1.5,
  //   },
  // ];
  console.log(category, product);
  async function getProducts() {
    let res = await axios.get(`http://13.60.188.54/product/`);
    setProducts(res.data);
  }
  useEffect(() => {
    getProducts();
  }, []);

  if (!products.length) {
    // Если массив продуктов пуст, вызываем функцию для получения продуктов
    getProducts();
  }

  return (
    <div className="container  mx-auto px-4  pb-4 sm:pb-12">
      <div className='flex justify-center flex-wrap gap-2 items-center sm:gap-14  sm:items-start"'>
        {products.map((el, id) => (
          <ProductCard el={el} key={id} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
