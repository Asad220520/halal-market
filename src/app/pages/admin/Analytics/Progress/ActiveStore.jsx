import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Активные", value: 400, color: "#22c55e" },
  { name: "Неактивные", value: 200, color: "#ef4444" },
];

const ActiveStoresChart = () => {
  return (
    <div className="p-4 shadow-sm border border-gray-200 rounded-xl p-4 shadow flex flex-col gap-2 w-full h-[350px]">
      <h2 className="text-lg font-medium">Активные магазины за месяц</h2>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={90}
              innerRadius={40}
              paddingAngle={5}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActiveStoresChart;
