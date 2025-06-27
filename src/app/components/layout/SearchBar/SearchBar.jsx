import React, { useState } from "react";
import { Search } from "lucide-react";
import { RiMenu4Line } from "react-icons/ri";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все категории");

  const categories = [
    { name: "Мясо и мясные продукты" },
    { name: "Мясо птицы и яйца" },
    { name: "Рыба и морепродукты" },
    { name: "Замороженные продукты" },
    { name: "Молочные продукты" },
    { name: "Мука, хлеб и выпечка" },
    { name: "Кондитерские изделия" },
    { name: "Готовая еда" },
    { name: "Бакалея" },
    { name: "Напитки" },
    { name: "Товары для детей" },
    { name: "Товары для дома" },
    {
      name: "Здоровье и красота",
      subcategories: [
        { name: "Декоративная косметика" },
        { name: "Уход за лицом" },
        { name: "Уход за волосами" },
        { name: "Уход за телом" },
        { name: "Уход за полостью рта" },
        { name: "Интимная гигиена" },
        { name: "Инструменты и аксессуары для красоты" },
        { name: "Парфюмерия" },
        { name: "Средства для мужчин" },
      ],
    },
    { name: "БАД и витамины" },
    { name: "Фармацевтика" },
  ];

  const handleSearch = () => {
    const query =
      selectedCategory === "Все категории"
        ? `search=${encodeURIComponent(search)}`
        : `search=${encodeURIComponent(search)}&category=${encodeURIComponent(
            selectedCategory
          )}`;

    fetch(`http://your-api.com/products?${query}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Результаты поиска:", data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="border-b-[2px]  pb-4 border-[#dde1e6] ">
      <header className="container mx-auto w-full">
        <div className="max-w-7xl mx-auto flex items-center gap-4 mt-4 px-4">
          <NavLink className={"hidden sm:flex "} to={"/Меню"}>
            <button className="hidden sm:flex items-center justify-center border border-[#0A8791] text-[#0A8791] bg-white rounded-xl w-[120px] h-[48px] text-sm font-medium">
              <RiMenu4Line
                size={16}
                className="mr-2"
                style={{ transform: "rotateX(180deg)" }}
              />
              Меню
            </button>
          </NavLink>
          <div className="flex flex-1 bg-white border border-[#0A8791] w-[990px] sm:h-[48px] h-[36px] rounded-2xl  sm:rounded-xl overflow-hidden">
            <div className="flex items-center px-3 text-[#697077]">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Поиск товаров..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-2 py-2 text-sm outline-none"
            />

            <div className="hidden sm:flex  relative w-[180px] border-l border-[#0A8791]">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none text-[#0A8791] w-full h-full text-[16px] font-medium pl-5 pr-8 outline-none bg-white"
              >
                <option value="Все категории">Все категории</option>
                {categories.map((cat, idx) =>
                  cat.subcategories ? (
                    <optgroup key={idx} label={cat.name}>
                      {cat.subcategories.map((sub, i) => (
                        <option key={i} value={`${cat.name} / ${sub.name}`}>
                          {sub.name}
                        </option>
                      ))}
                    </optgroup>
                  ) : (
                    <option key={idx} value={cat.name}>
                      {cat.name}
                    </option>
                  )
                )}
              </select>
              {/* Кастомная стрелка */}
              <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0A8791]">
                <ChevronDown />
              </div>
            </div>
          </div>

          <button
            onClick={handleSearch}
            className="hidden sm:flex justify-center items-center bg-[#0A8791] text-white w-[114px] h-[48px] text-[16px] rounded-xl font-medium"
          >
            Искать
          </button>
        </div>
      </header>
    </div>
  );
};

export default SearchBar;
