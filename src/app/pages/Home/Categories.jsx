import React from "react";
import productImg from "../../../asesst/images/product.png";
import { useState } from "react";
const Categories = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const categories = [
    { name: "Мясо и мясные продукты", img: productImg },
    { name: "Мясо птицы и яйца", img: productImg },
    { name: "Рыба и морепродукты", img: productImg },
    { name: "Замороженные продукты", img: productImg },
    { name: "Молочные продукты", img: productImg },
    { name: "Мука, хлеб и выпечка", img: productImg },
    { name: "Кондитерские изделия", img: productImg },
    { name: "Готовая еда", img: productImg },
    { name: "Бакалея", img: productImg },
    { name: "Напитки", img: productImg },
    { name: "Товары для детей", img: productImg },
    { name: "Товары для дома", img: productImg },
    {
      name: "Здоровье и красота",
      img: productImg,
      subcategories: [
        { name: "Декоративная косметика", img: productImg },
        { name: "Уход за лицом", img: productImg },
        { name: "Уход за волосами", img: productImg },
        { name: "Уход за телом", img: productImg },
        { name: "Уход за полостью рта", img: productImg },
        { name: "Интимная гигиена", img: productImg },
        { name: "Инструменты и аксессуары для красоты", img: productImg },
        { name: "Парфюмерия", img: productImg },
        { name: "Средства для мужчин", img: productImg },
      ],
    },
    { name: "БАД и витамины", img: productImg },
    { name: "Фармацевтика", img: productImg },
  ];

  return (
    <section className="container max-w-7xl mx-auto px-4 py-8">
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
              src={cat.img}
              alt={cat.name}
              className="w-[160px] h-[148px] mx-auto object-cover rounded-lg border-2 border-transparent hover:border-[#0a8791] transition"
            />
            {selectedIndex === index && (
              <div className="absolute inset-0  flex items-center  justify-center">
                <p className="bg-white w-[120px] text-[#0a8791] text-center text-[14px] p-2 rounded-xl font-400">
                  {cat.name}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
