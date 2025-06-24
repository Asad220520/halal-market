import React from "react";
import Button from "@components/ui/Button/Button";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ el }) => {
  return (
    <div className="w-[114px] h-[165px] sm:w-[265px] sm:h-[340px] rounded-lg 	shadow-[0_3px_14px_rgba(0,0,0,0.1)] flex flex-col justify-between   bg-white">
      <div className="m-auto w-[80%] h-[60%] flex items-center justify-center">
        <img
          src={el.image}
          alt={el.title}
          className="object-cover rounded-[100px]"
        />
      </div>

      <div className="space-y-1 mt-2">
        <h2 className="text-[#6cc51d] text-[16px] sm:text-2xl px-2 sm:px-4 font-medium">
          {el.price} сом
        </h2>
        <div className="flex justify-between items-center w-[100%]  px-2 sm:px-4  ">
          <h3 className="text-[#3e3e3e] text-[16px]  sm:text-2xl font-medium">
            {el.title}
          </h3>
          <span className="text-[#a1a1a1] text-[10px] sm:text-xl">
            {el.kg}kg
          </span>
        </div>
        <Button icon={<ShoppingCart />} variant={"gradient"} fullWidth>
          В корзину
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
