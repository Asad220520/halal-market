import React from "react";
import Button from "../../../components/ui/Button/Button";
import { Trash2 } from "lucide-react";

const ProductCard = ({ product, onApprove, onReject }) => (
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
        <div className="flex flex-col gap-1 justify-between">
          <h2 className="text-3xl primary font-bold">{product.name}</h2>
          <p className="text-sm text-muted-foreground text-gray-500">
            Кол-во в упаковке:
            <span className="primary">{product.quantity} шт</span>
          </p>
          <p className=" text-gray-500">
            Состав: <span className="primary">{product.content}</span>
          </p>
          <p className=" text-gray-500">
            Действие: <span className="primary">{product.effect}</span>
          </p>
          <p className=" text-gray-500">
            Срок годности: <span className="primary">{product.expiry}</span>
          </p>
          <p className=" text-gray-500">
            Комплектация: <span className="primary">{product.package}</span>
          </p>
        </div>
      </div>
      <p className="text-3xl text-[#FE585A]">{product.price} сом</p>
    </div>
    <div>
      <h3 className="font-bold text-xl mt-2 text-gray-600">
        Дополнительные характеристики:
      </h3>
      <p className=" w-[80%] text-muted-foreground text-gray-500">
        {product.extra}
      </p>
    </div>
    <div className="flex gap-2 mt-4 items-center">
      <Button variant="green" onClick={onApprove}>
        Подтвердить
      </Button>
      <Button variant="red" onClick={onReject}>
        Не прошёл модерацию
      </Button>
      <Button variant="red">
        <Trash2 width={20} height={20} className="" />
      </Button>
    </div>
  </div>
);

export default ProductCard;
