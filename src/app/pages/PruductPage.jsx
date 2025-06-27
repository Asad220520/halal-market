import React from "react";
import ProductCard from "../components/ui/ProductCard/ProductCard";
import img from "../../asesst/images/productCard.png";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/ui/Breadcrumbs/Breadcrumbs";

const ProductPage = () => {
  const { category, product } = useParams();

  const products = [
    {
      title: "Форель",
      price: 420,
      image: img,
      kg: 1.5,
    },
    {
      title: "Форель",
      price: 420,
      image: img,
      kg: 1.5,
    },
    {
      title: "Форель",
      price: 420,
      image: img,
      kg: 1.5,
    },
    {
      title: "Форель",
      price: 420,
      image: img,
      kg: 1.5,
    },
    {
      title: "Форель",
      price: 420,
      image: img,
      kg: 1.5,
    },
    {
      title: "Форель",
      price: 420,
      image: img,
      kg: 1.5,
    },
    {
      title: "Форель",
      price: 420,
      image: img,
      kg: 1.5,
    },
    {
      title: "Форель",
      price: 420,
      image: img,
      kg: 1.5,
    },
  ];
  console.log(category  ,product);
  
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
