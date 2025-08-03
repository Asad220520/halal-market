import React from "react";
import MenuCard from "../components/ui/MenuCard/MenuCard";
import { useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../../config/api";
import { useState } from "react";

const Menu = () => {
  const [categories, setCategories] = useState([]);
  async function getCategories() {
    let res = await axios.get(`${API_BASE_URL}/categories/`);
    setCategories(res.data);
    console.log(res.data);
  }
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="container  mx-auto px-4  pb-4 sb:pи-12">
      <div className='flex justify-center flex-wrap gap-2 items-center sm:gap-12  sm:items-start"'>
        {categories.map((el, id) => (
          <MenuCard el={el} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
