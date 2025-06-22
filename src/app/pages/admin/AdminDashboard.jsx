import React from "react";

export default function AdminDashboard() {
  // Пример статичных данных
  const stats = [
    { label: "Пользователи", value: 1324 },
    { label: "Заказы", value: 284 },
    { label: "Товары", value: 97 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Админ-панель</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow p-6 border border-gray-100"
          >
            <p className="text-sm text-gray-500">{stat.label}</p>
            <h2 className="text-3xl font-semibold mt-2">{stat.value}</h2>
          </div>
        ))}
      </div>

      {/* Здесь можно разместить другие блоки: графики, таблицы и т.д. */}
    </div>
  );
}
