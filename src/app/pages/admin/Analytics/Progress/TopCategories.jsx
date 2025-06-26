import React from "react";

const categories = [
  { name: "Замороженные продукты", percent: "27.5%" },
  { name: "Здоровье и красота", percent: "11.2%" },
  { name: "БАД и витамины", percent: "9.4%" },
  { name: "Мясо птицы и яйца", percent: "8%" },
  { name: "Рыба и морепродукты", percent: "7.9%" },
  { name: "Товары для дома", percent: "6.1%" },
  { name: "Мясо и мясные продукты", percent: "5.9%" },
];

const TopCategories = () => {
  return (
    <div className="shadow-sm border border-gray-200 rounded-xl p-4 shadow p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">
        Популярные категории за этот месяц
      </h2>
      <ul className="space-y-2">
        {categories.map((cat, index) => (
          <li
            key={index}
            className="flex justify-between text-gray-700 text-sm md:text-base"
          >
            <span>{cat.name}</span>
            <span className="text-red-500 font-medium">{cat.percent}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCategories;
