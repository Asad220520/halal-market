// TopSellers.jsx
import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Алина Бекешева", value: 1000000, color: "#FFD700" },
  { name: "Юлия Ким", value: 800000, color: "#32CD32" },
  { name: "Бектур Аманов", value: 645000, color: "#9B30FF" },
  { name: "Айпери Керимова", value: 590000, color: "#2F4F4F" },
  { name: "Мыскал Жантошева", value: 342000, color: "#87CEFA" },
];

const TopSellers = () => {
  return (
    <div className="shadow-sm border border-gray-200 rounded-xl p-4  shadow-sm w-full">
      <h2 className="font-bold text-lg mb-4">Топ 5 продавцов за этот месяц</h2>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <PieChart width={240} height={240}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={85}
            outerRadius={100}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-inner-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
        </PieChart>

        <ul className="space-y-2">
          {data.map((seller, index) => (
            <li key={index} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: seller.color }}
              ></span>
              <span className="text-sm text-gray-600 w-40 truncate">
                {seller.name}
              </span>
              <span className="ml-auto text-red-500 font-semibold">
                $
                {seller.value >= 1000000
                  ? (seller.value / 1000000).toFixed(1) + "M"
                  : (seller.value / 1000).toFixed(0) + "K"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopSellers;
