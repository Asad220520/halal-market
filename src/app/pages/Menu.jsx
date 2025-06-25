import React from "react";
import image from "../../asesst/images/product(1).png";
import CategoryCard from "../components/ui/CategoryCard/CategoryCard";

const Menu = () => {
  const categories = [
    { title: "Мясо и мясные продукты", image: image },
    { title: "Мясо птицы и яйца", image: image },
    { title: "Рыба и морепродукты", image: image },
    { title: "Замороженные продукты", image: image },
    { title: "Молочные продукты", image: image },
    { title: "Мука, хлеб и выпечка", image: image },
    { title: "Кондитерские изделия", image: image },
    { title: "Готовая еда", image: image },
    { title: "Бакалея", image: image },
    { title: "Напитки", image: image },
    { title: "Товары для детей", image: image },
    { title: "Товары для дома", image: image },
    {
      title: "Здоровье и красота",
      image: image,
      subcategories: [
        { title: "Декоративная косметика", image: image },
        { title: "Уход за лицом", image: image },
        { title: "Уход за волосами", image: image },
        { title: "Уход за телом", image: image },
        { title: "Уход за полостью рта", image: image },
        { title: "Интимная гигиена", image: image },
        { title: "Инструменты и аксессуары для красоты", image: image },
        { title: "Парфюмерия", image: image },
        { title: "Средства для мужчин", image: image },
      ],
    },
    { title: "БАД и витамины", image: image },
    { title: "Фармацевтика", image: image },
  ];

  return (
    <div className="container flex flex-col gap-5 sm:gap-10 mx-auto px-4  py-4 sm:py-12">
      <div className="flex justify-between items-center">
        <h2 className="text-1xl sm:text-2xl font-semibold text-[#0a8791] ">
          Меню
        </h2>
        <h2 className="text-1xl sm:text-2xl font-semibold text-[#fdc818] "></h2>
      </div>
      <div className='flex justify-center flex-wrap gap-2 items-center sm:gap-12  sm:items-start"'>
        {categories.map((el, id) => (
          <CategoryCard el={el} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
