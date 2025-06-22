import React from "react";

export default function StorePage() {
  // Тут может быть получение товаров, фильтры, категории и т.д.
  // Пример с мок-данными:
  const products = [
    { id: 1, name: "Product 1", price: 19.99 },
    { id: 2, name: "Product 2", price: 29.99 },
    { id: 3, name: "Product 3", price: 39.99 },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Магазин</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Купить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
