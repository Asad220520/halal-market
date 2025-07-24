import React from "react";
import img from "../../../asesst/images/product.png";
import { useState } from "react";
import { Menu } from "lucide-react";
import axios from "axios";
import { useEffect } from "react";
const Categories = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
async function getCategories() {
  let res = await axios.get(`http://13.60.188.54/categories/`);
  setCategories(res.data);
}
useEffect(() => {
  getCategories();
}, []);

if (!categories) {
  getCategories();
}

  return (
    <div className=" py-4">
      <section className="container hidden sm:flex max-w-7xl mx-auto px-4 py-8  flex-col">
        <h2 className="text-2xl font-semibold text-[#0a8791] mb-6">
          Все категории
        </h2>
        <div
          className="flex justify-start gap-4 overflow-x-auto no-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {categories.map((cat, index) => (
            <div
              key={index}
              className="relative text-center cursor-pointer min-w-[160px]" // фикс ширина, чтоб не сжимались
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={img}
                alt={cat.category_name}
                className="w-[160px] h-[148px] mx-auto object-cover rounded-lg border-2 border-transparent hover:border-[#0a8791] transition"
              />
              {selectedIndex === index && (
                <div className="absolute inset-0  flex items-center  justify-center">
                  <p className="bg-white w-[120px] text-[#0a8791] text-center text-[14px] p-2 rounded-xl font-400">
                    {cat.category_name}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="container flex sm:hidden max-w-7xl mx-auto px-4 py-2">
        <div
          className="flex justify-start gap-4 overflow-x-auto no-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div
              className="sm:hidden  flex items-center justify-center"
              onClick={() => setSelectedCategory("Все категории")}
            >
              <p
                className={`flex items-center gap-2 justify-center w-[96px] h-[25px] text-[8px] rounded-lg font-normal text-center px-2 cursor-pointer
                ${
                  selectedCategory ===  "Все категории"
                    ? "bg-[#0a8791] text-white border-none"
                    : "bg-white text-[#3e3e3e] border border-[#a2a2a2]"
                }`}
              >
                <Menu
                  className={`mr-1 ${
                    selectedCategory === "Все категории"
                      ? "text-white"
                      : "text-[#3e3e3e]"
                  }`}
                    size={14}
                  />
                Все категории
              </p>
            </div>
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
              onClick={() => setSelectedCategory(cat.category_name)}
            >
              <p
                className={`flex items-center gap-2 justify-center w-[96px] h-[25px] text-[8px] rounded-lg font-normal text-center px-2 cursor-pointer
                ${
                  selectedCategory ===  cat.category_name
                    ? "bg-[#0a8791] text-white border-none"
                    : "bg-white text-[#3e3e3e] border border-[#a2a2a2]"
                }`}
              >
                {cat.category_name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Categories;
