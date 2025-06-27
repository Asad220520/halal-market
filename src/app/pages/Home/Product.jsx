import React from "react";
import ProductCard from "../../components/ui/ProductCard/ProductCard";
import img from "../../../asesst/images/productCard.png";

const Product = () => {
  let el = {
    title: "Рыба и морепродукты",
    text: "Смотреть все",
  };
  const product = [
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
  return (
    <div className="container flex flex-col gap-6 sm:gap-12 mx-auto px-4  py-4 sm:py-12">
      <div className="flex justify-between items-center">
        <h2 className="text-1xl sm:text-2xl font-semibold text-[#0a8791] ">
          {el.title}
        </h2>
        <h2 className="text-1xl sm:text-2xl font-semibold text-[#fdc818] ">
          {el.text}
        </h2>
      </div>
      <div className='flex justify-center flex-wrap gap-2 items-center sm:gap-14  sm:items-start"'>
        {product.map((el, id) => (
          <ProductCard el={el} key={id} />
        ))}
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-1xl sm:text-2xl font-semibold text-[#0a8791] ">
          {el.title}
        </h2>
        <h2 className="text-1xl sm:text-2xl font-semibold text-[#fdc818] ">
          {el.text}
        </h2>
      </div>
      <div className='flex justify-center flex-wrap gap-2 items-center sm:gap-14  sm:items-start"'>
        {product.map((el, id) => (
          <ProductCard el={el} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Product;
