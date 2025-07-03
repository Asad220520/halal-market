import React, { useState } from "react";
import Button from "../../components/ui/Button/Button";
import { MdDelete } from "react-icons/md";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockData = [
  {
    id: 1,
    name: "Патчи для глаз",
    price: 2500,
    date: "8.12.2025",
    img: "https://gezatone.ru/upload/resize_cache/iblock/aa8/600_760_1821712164bebe8964a3cb4f91f48bb72/17.01.2023_4515990K_foto_7_web.jpeg",
  },
  {
    id: 2,
    name: "Патчи для глаз",
    price: 2500,
    date: "8.12.2025",
    img: "https://gezatone.ru/upload/resize_cache/iblock/aa8/600_760_1821712164bebe8964a3cb4f91f48bb72/17.01.2023_4515990K_foto_7_web.jpeg",
  },
  {
    id: 3,
    name: "Патчи для глаз",
    price: 2500,
    date: "8.12.2025",
    img: "https://gezatone.ru/upload/resize_cache/iblock/aa8/600_760_1821712164bebe8964a3cb4f91f48bb72/17.01.2023_4515990K_foto_7_web.jpeg",
  },
];

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const nav = useNavigate();
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
    <div className="container mx-auto px-4 pt-6 pb-20">
      <div className="flex items-center justify-between  ">
        <h2 className="text-2xl font-bold text-teal-600 mb-2">Корзина</h2>
        <p className="text-gray-600">{items.length} товара</p>
      </div>
      <div className="flex items-center gap-2 mb-5 mt-2 text-sm text-teal-600 font-semibold">
        <input
          type="checkbox"
          checked={items.every((item) => item.selected)}
          onChange={(e) => handleSelectAll(e.target.checked)}
          className="accent-[#0A8791] w-4 h-4 text-teal-600 rounded focus:ring-teal-500"
        />
        <span>Выбрать все товары</span>
      </div>

      <div className="flex items-center flex-col gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-full sm:p-4 sm:w-[98%] bg-white rounded-2xl sm:border border-gray-200 sm:shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center sm:gap-6 gap-3">
                <div className="sm:w-[170px] w-[155px] sm:h-[187px] h-[169px] bg-gray-50 shadow-sm rounded-2xl border border-gray-200 flex items-center justify-center ">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full rounded-2xl hover:rounded-2xl cursor-pointer transition-all object-cover "
                  />
                </div>
                <div className="flex flex-col sm:gap-4 gap-3 ">
                  <h3 className="sm:text-2xl text-[20px] font-medium text-[#0A8791]">
                    {item.name}
                  </h3>
                  <p className="text-3xl text-[28px]  font-[500] text-[#fe585a]">
                    {item.price} <span className="text-lg font-400">СОМ</span>
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="sm:w-12 sm:h-12 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-xl font-medium hover:bg-gray-200 transition-colors"
                    >
                      −
                    </button>
                    <span className="w-12  text-center text-gray-600 text-xl font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="sm:w-12 sm:h-12 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-xl font-medium hover:bg-gray-200 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <p className="flex  sm:hidden text-sm text-gray-400 font-medium">
                    Дата: {item.date} г
                  </p>
                </div>
              </div>
              <div className="sm:h-[100px]  gap-6 flex flex-col justify-between items-end ">
                <a
                  onClick={() => handleDelete(item.id)}
                  className="text-gray-400 hover:text-red-500  transition-colors"
                >
                  <MdDelete size={20} />
                </a>
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => handleSelectItem(item.id)}
                  className="w-4 h-4 accent-[#0A8791]  mr-0.5 text-teal-600 rounded focus:ring-teal-500"
                />
                <p className="sm:flex  hidden text-sm text-gray-400 font-medium">
                  Дата: {item.date} г
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {items.some((item) => item.selected) && (
        <div className="p-5 sm:w-[500px] w-full mt-10 border border-gray-200 rounded-[12px] sm:p-4 shadow-sm">
          {items
            .filter((item) => item.selected)
            .map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-xl font-[500] sm:mb-3 mb-2"
              >
                <span className="text-gray-600">{item.name}</span>
                <span>{item.price * item.quantity} c</span>
              </div>
            ))}

          <div className="border-t border-dashed border-gray-300 my-3"></div>

          <div className="flex gap-2 font-semibold text-[22px] sm:text-[28px] mb-4">
            <span>Итого:</span>
            <span>{total.toLocaleString()} c</span>
          </div>

          <Button
            onClick={() => setShowModal(!showModal)}
            variant="gradient"
            fullWidth
          >
            Заказать
          </Button>
        </div>
      )}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center p-10 z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg text-center max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800  mb-4">
              Оплата прошла успешно!
            </h2>
            <Button variant="primary" onClick={() => nav(`/receipt`)}>
              Квитанция!
            </Button>
          </div>
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
