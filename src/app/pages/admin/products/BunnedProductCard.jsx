import React from "react";
import Button from "../../../components/ui/Button/Button";

const BannedProductCard = ({ product, onDelete }) => (
  <div className="rounded-2xl shadow p-4 flex flex-col gap-4">
    <div className="w-[80%] flex justify-between">
      <div className="flex gap-4">
        <div className="flex justify-center rounded-2xl items-center border border-gray-400 w-45 h-55">
          <img
            src={product.image}
            alt={product.name}
            className="w-25 h-25 hover:w-full hover:h-full hover:rounded-2xl cursor-pointer transition-all object-cover "
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl primary font-bold">{product.name}</h2>
            <p className="text-3xl text-[#FE585A]">{product.price} сом</p>
          </div>
          <Button variant="red" onClick={onDelete}>
            Удалить
          </Button>
        </div>
      </div>
      <div className="flex justify-end items-end">
        <ul className="flex flex-col  mt-4 gap-2">
          <li className="text-sm text-muted-foreground text-gray-500">
            Продавец: <span className="primary">{product.seller}</span>
          </li>
          <li className="text-sm text-gray-500">
            Дата загрузки:
            <span className="primary">{product.date}</span>
          </li>
          <li className="text-sm text-gray-500">
            Время:
            <span className="primary">{product.time}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default BannedProductCard;
