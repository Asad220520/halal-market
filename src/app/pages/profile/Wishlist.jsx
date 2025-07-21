import { FaCheck, FaRegHeart } from "react-icons/fa";
import Image from "../../../assets/images/image.svg";
import Button from "../../components/ui/Button/Button";
import { IoIosMore } from "react-icons/io";

export const productList = [
  {
    id: 1,
    image: Image,
    title: "Патчи для глаз",
    price: 2500,
    quantity: 2,
    status: null,
    delivery: {
      deliveryStatus: "Доставлено",
      dateDelivery: new Date(),
    },
  },
  {
    id: 2,
    image: Image,
    title: "Патчи для глаз",
    price: 2500,
    quantity: 2,
    status: null,
    delivery: {
      deliveryStatus: "Доставлено",
      dateDelivery: new Date(),
    },
  },
];

export default function Wishlist() {
  return (
    <div className="flex flex-col gap-7">
      <div className="container">
        <div className="flex items-center justify-between m-[20px_0]">
          <h1 className="text-[#0A8791] text-[24px] font-medium">
            Сохраненные
          </h1>
          <h2 className="text-[#FDC818] text-[18px] font-medium">
            Смотреть все
          </h2>
        </div>
        {productList.map((el) => (
          <div
            key={el.id}
            className="flex flex-col rounded-2xl w-full shadow-[0px_0px_50px_-7px_rgba(0,_0,_0,_0.1)] p-[20px_20px] relative"
          >
            <div className="flex gap-8">
              <img
                className="border border-gray-300 rounded-2xl w-[170px] h-[190px] object-contain"
                src={el.image}
                alt="img"
              />
              <div className="flex flex-col w-full gap-1">
                <h1 className="text-[#0A8791] text-[34px] font-normal">
                  {el.title}
                </h1>
                <h1 className="text-[#FE585A] text-[24px] font-semibold">
                  {el.price} <span className="font-normal">сом</span>
                </h1>
                <h4 className="text-[#A2A2A2]">
                  Количество:{" "}
                  <span className="text-[#0A8791]"> {el.quantity}шт</span>
                </h4>
                <h4 className="text-[#A2A2A2]">Статус:</h4>
                <div className="flex items-center justify-between">
                  <Button
                    className="bg-[#0A7780] text-white w-[200px]"
                    icon={<FaCheck />}
                  >
                    Сохранено
                  </Button>
                  <p className="text-[#A2A2A2]">
                    Дата:{" "}
                    <span>
                      {new Date(el.delivery.dateDelivery).toLocaleDateString()}г
                    </span>
                  </p>
                  <a className="text-xl absolute top-20 right-5 cursor-pointer">
                    <IoIosMore />
                  </a>
                  <a className="text-2xl text-[#FE585A] absolute top-7 right-5 cursor-pointer">
                    <FaRegHeart />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
