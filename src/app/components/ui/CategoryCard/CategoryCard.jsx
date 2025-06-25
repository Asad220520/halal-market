import React from "react";

const CategoryCard = ({el}) => {
  return (
    <div className="w-[170px] h-[151px] sm:w-[209px] sm:h-[197px] rounded-lg shadow-[0_3px_14px_rgba(0,0,0,0.1)] flex flex-col  bg-white">
      <div className="m-auto w-[50%] h-[50%] flex items-center justify-center">
        <img
          src={el.image}
          alt={el.title}
          className="object-cover rounded-[50%]"
        />
      </div>
      <div className="mb-3 m-auto">
        <h3 className="text-center w-[140px] text-[#0A8791] text-[12px] sm:text-[15px] font-400">
          {el.title}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;
