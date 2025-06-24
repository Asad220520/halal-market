import React from "react";
import Button from "@components/ui/Button/Button";
import img from "../../../asesst/images/promotion.png";


const Promotion = () => {
  return (
    <div className="container mx-auto px-4 py-4  sm:py-12 flex justify-between gap-2 items-center sm:gap-10   sm:items-start">
      <div className="flex-1 grid grid-cols-1 gap-2 sm:gap-6">
        <h1 className=" m-0 p-0 text-[#fe585a] text-[20px] sm:text-[48px] font-[500] leading-tight">
          Акция <br /> до 80%
        </h1>
        <p className="text-[#474747] sm:text-[20px] text-[8px] ">
          Успей купить по выгодной цене!
        </p>
        <Button fullWidth={false} variant="gradient">
          Купить
        </Button>
      </div>
      <div className="w-[250px] h-[118px] sm:w-[700px] sm:h-[274px]">
        <img
          src={img}
          alt="img"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Promotion;
