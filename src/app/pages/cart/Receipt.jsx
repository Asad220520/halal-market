import React, { useEffect, useState } from "react";

const fakeFetchReceipt = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        store: "MONA STYLE",
        purchaseDate: "02.11.2025г",
        deliveryDate: "02.11.2025г",
        items: [
          { name: "Патчи для глаз", price: 2500 },
          { name: "Патчи для глаз", price: 2500 },
          { name: "Патчи для глаз", price: 2500 },
        ],
        total: 7400,
        delivery: "Бесплатно",
        customer: {
          name: "Мария Иванова",
          email: "Mariya.004@gmail.com",
          phone: "996700081882",
        },
      });
    }, 1000);
  });

const Receipt = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fakeFetchReceipt().then(setData);
  }, []);

  if (!data) {
    return <div className="text-center mt-10">Загрузка...</div>;
  }

  return (
    <div className="container mx-auto ">
      <div className="mr-auto sm:w-[538px] bg-white px-4 pt-6  sm:pb-18 font-sans text-gray-800">
        <h2 className="text-2xl font-medium mb-4 text-teal-600">Чек</h2>

        <div className="mb-4  text-gray-600">
          <div className="mb-4">
            <span className="font-medium text-gray-500">Магазин: </span>
            <span className="text-gray-800 font-[500]">{data.store}</span>
          </div>

          <div className="mb-2">
            <span className="font-medium text-gray-500">Дата покупки </span>
            <span className="text-gray-800 ml-4 font-[500]">
              {data.purchaseDate}
            </span>
          </div>
          <div className="mb-4">
            <span className="font-medium text-gray-500">Дата доставки </span>
            <span className="text-gray-800 ml-2 font-[500]">
              {data.deliveryDate}
            </span>
          </div>
        </div>

        <div className="mb-4">
          {data.items.map((item, index) => (
            <div key={index} className="flex justify-between py-2 text-base">
              <span className="text-gray-600 font-medium ">{item.name}</span>
              <span className="text-gray-800 font-[600] ">
                {item.price.toLocaleString()} с
              </span>
            </div>
          ))}
        </div>

        <div className="border-t border-dashed border-gray-300 my-6"></div>

        <div className="mb-4">
          <div className="flex gap-4 items-center text-2xl font-bold">
            <span className="text-gray-800">Итого :</span>
            <span className="text-gray-800">
              {data.total.toLocaleString()} с
            </span>
          </div>
        </div>

        <div className="mb-2 text-md">
          <span className="text-gray-500 font-medium">Доставка: </span>
          <span className="text-gray-800 font-[600]">{data.delivery}</span>
        </div>

        <div className="text-sm space-y-2">
          <div>
            <span className="text-gray-500 font-medium">ФИО покупателя: </span>
            <span className="text-gray-800 font-[600]">
              {data.customer.name}
            </span>
          </div>
          <div>
            <span className="text-gray-500 font-medium">
              Электронный адрес:{" "}
            </span>
            <span className="text-gray-800 font-[600]">
              {data.customer.email}
            </span>
          </div>
          <div>
            <span className="text-gray-500 font-medium">Телефон: </span>
            <span className="text-gray-800 font-[600]">
              {data.customer.phone}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
