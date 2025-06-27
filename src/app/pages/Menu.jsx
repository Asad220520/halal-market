import React from "react";
import image from "../../asesst/images/product(1).png";
import MenuCard from "../components/ui/MenuCard/MenuCard";

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
