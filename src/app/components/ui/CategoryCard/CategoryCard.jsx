import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ el }) => {
  return (
    <Link to={`${el.title}`}>
      <div className="flex flex-col  justify-start gap-10 sm:gap-20  items-center bg-white w-[170px] h-[151px] sm:w-[400px] sm:h-[305px] rounded-lg shadow-[0_3px_14px_rgba(0,0,0,0.1)] hover:shadow-lg transition-all">
        <div className="w-[50%] h-[50%] flex items-center justify-center">
          <img
            src={el.image}
            alt={el.title}
            className="object-cover mt-10 sm:mt-20 rounded-[20px] w-full h-full"
          />
        </div>
        <h3 className="text-center  text-[#0A8791] text-[12px] sm:text-[20px] font-400">
          {el.title}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
