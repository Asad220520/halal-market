import React from "react";

const CategoryCard = ({el}) => {
  return (
    <div className="w-[114px] h-[165px] sm:w-[265px] sm:h-[340px] rounded-lg shadow-[0_3px_14px_rgba(0,0,0,0.1)] flex flex-col justify-between bg-white">
      <div className="m-auto w-[80%] h-[60%] flex items-center justify-center">
        <img
          src={el.image}
          alt={el.title}
          className="object-cover rounded-[100px]"
        />
      </div>
      <div className="mt-2">
        <h3 className="text-[#3e3e3e] text-[16px] sm:text-2xl font-medium">
          {el.title}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;
