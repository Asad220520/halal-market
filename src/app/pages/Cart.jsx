import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import Button from "../components/ui/Button/Button";

const mockData = [
  {
    id: 1,
    name: "Патчи для глаз",
    price: 2500,
    date: "8.12.2025",
    img: "https://i.imgur.com/mW8z9qS.png",
  },
  {
    id: 2,
    name: "Патчи для глаз",
    price: 2500,
    date: "8.12.2025",
    img: "https://i.imgur.com/mW8z9qS.png",
  },
  {
    id: 3,
    name: "Патчи для глаз",
    price: 2500,
    date: "8.12.2025",
    img: "https://i.imgur.com/mW8z9qS.png",
  },
];

const Cart = () => {
  const [items, setItems] = useState(
    mockData.map((item) => ({ ...item, quantity: 1, selected: true }))
  );

  const handleQuantityChange = (id, delta) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSelectAll = (value) => {
    setItems((prev) => prev.map((item) => ({ ...item, selected: value })));
  };

  const handleSelectItem = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const total = items
    .filter((item) => item.selected)
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-[1109px] mx-auto px-4 pt-6 pb-20">
      <div>
        <div className="flex items-center justify-between  ">
          <h2 className="text-2xl font-bold text-teal-600 mb-2">Корзина</h2>
          <p className="text-gray-600">{items.length} товара</p>
        </div>
        <div className="flex items-center gap-2 my-2 text-sm text-teal-600 font-semibold">
          <input
            type="checkbox"
            checked={items.every((item) => item.selected)}
            onChange={(e) => handleSelectAll(e.target.checked)}
            className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500"
          />
          <span>Выбрать все товары</span>
        </div>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Left section with image and product info */}
                <div className="flex items-center gap-6">
                  {/* Product image */}
                  <div className="w-[170px] h-[170px] bg-gray-50 rounded-2xl border border-gray-200 flex items-center justify-center p-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product details */}
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-medium text-teal-600">
                      {item.name}
                    </h3>
                    <p className="text-3xl font-bold text-red-500">
                      {item.price}{" "}
                      <span className="text-lg font-normal">СОМ</span>
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl font-medium hover:bg-gray-200 transition-colors"
                      >
                        −
                      </button>
                      <span className="w-12 text-center text-xl font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl font-medium hover:bg-gray-200 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right section with date, bookmark, and delete */}
              <div className="flex flex-col items-end gap-4">
                {/* Delete button */}
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-gray-400 hover:text-red-500 p-2 transition-colors"
                >
                  <Trash2 size={20} />
                </button>

                {/* Checkbox */}
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => handleSelectItem(item.id)}
                  className="w-4 h-4 accent-[#FDC818] text-white t rounded focus:ring-teal-500"
                />
                {/* Date */}
                <p className="text-sm text-gray-400 font-medium">
                  Дата: {item.date} г
                </p>

                {/* Bookmark button */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total section */}
      {items.length > 0 && (
        <div className="max-w-[328px] w-full  mt-10 border border-gray-200 rounded-[12px] p-4 shadow-sm">
          {items
            .filter((item) => item.selected)
            .map((item) => (
              <div key={item.id} className="flex justify-between text-sm mb-2">
                <span>{item.name}</span>
                <span>{item.price * item.quantity} c</span>
              </div>
            ))}

          <div className="border-t border-dashed my-3"></div>

          <div className="flex justify-between font-semibold text-lg mb-4">
            <span>Итого :</span>
            <span>{total.toLocaleString()} c</span>
          </div>

          <Button variant="gradient" fullWidth>
            Заказать
          </Button>
        </div>
      )}

      {items.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Корзина пуста</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
