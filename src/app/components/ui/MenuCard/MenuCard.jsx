import React from "react";
import { Link } from "react-router-dom";

const MenuCard = ({ el }) => {
  return (
    <Link to={`${el.title}`}>
      <div className="flex flex-col  justify-start gap-6 sm:gap-10  items-center  w-[170px] h-[151px] sm:w-[209px] sm:h-[197px] rounded-lg shadow-[0_3px_14px_rgba(0,0,0,0.1)] bg-white">
        <div className=" w-[50%] h-[50%] flex items-center justify-center">
          <img
            src={el.image}
            alt={el.title}
            className="object-cover mt-8 sm:mt-10  rounded-[50%]"
          />
        </div>
        <h3 className="text-center w-[140px] text-[#0A8791] text-[12px] sm:text-[15px] font-400">
          {el.title}
        </h3>
      </div>
    </Link>
  );
};

export default MenuCard;
