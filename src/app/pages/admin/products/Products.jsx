import React, { useState } from "react";
import ModerationSection from "./ModerationSection";
import BannedSection from "./BunnedSection";
import Button from "../../../components/ui/Button/Button";

import DateRangePicker from "../../../components/ui/Calendar/DateRangePicker";

export default function AdminProducts() {
  const [view, setView] = useState("moderation"); // "moderation" или "banned"

  const moderationProducts = [
    {
      id: 1,
      name: "Крем для рук",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRP0BBinR-TND03nbiEkoqwVj2pjQQFZALg&s",
      quantity: 30,
      content: "Вода, глицерин, масло ши",
      effect: "Увлажнение и питание кожи",
      expiry: "12.2026",
      package: "Тюбик 75 мл",
      price: 2500,
      extra:
        "Витаминные патчи для глаз от отеков и мешков 80 шт представляют собой инновационную косметику , которая предназначена для ухода за кожей вокруг глаз. Эти гидрогелевые патчи - средство для борьбы с отеками, темными кругами и мешками под глазами. Отлично увлажняют и освежают цвет лица, возвращая упругость и эластичность кожи. Патч содержит коллаген и гиалуроновую кислоту, что делает данный продукт идеальным для антивозрастного ухода. Он полезен для разглаживания мимических морщин и улучшения состояния кожи век. Корейская косметика известна своей эффективностью, но китайская не уступает и превосходит его по качеству. Эти патчи не исключение и разработаны с учетом особенностей женской кожи и обесметика",
    },
    {
      id: 2,
      name: "Шампунь травяной",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRP0BBinR-TND03nbiEkoqwVj2pjQQFZALg&s",
      quantity: 1,
      content: "Экстракт крапивы, ромашки, мята",
      effect: "Очищение и укрепление волос",
      expiry: "08.2025",
      package: "Флакон 250 мл",
      price: 2500,
      extra:
        "Витаминные патчи для глаз от отеков и мешков 80 шт представляют собой инновационную косметику , которая предназначена для ухода за кожей вокруг глаз. Эти гидрогелевые патчи - средство для борьбы с отеками, темными кругами и мешками под глазами. Отлично увлажняют и освежают цвет лица, возвращая упругость и эластичность кожи. Патч содержит коллаген и гиалуроновую кислоту, что делает данный продукт идеальным для антивозрастного ухода. Он полезен для разглаживания мимических морщин и улучшения состояния кожи век. Корейская косметика известна своей эффективностью, но китайская не уступает и превосходит его по качеству. Эти патчи не исключение и разработаны с учетом особенностей женской кожи и обесметика",
    },
  ];

  const bannedProducts = [
    {
      id: 101,
      name: "Сигареты без фильтра",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRP0BBinR-TND03nbiEkoqwVj2pjQQFZALg&s",
      price: 150,
      seller: "ООО ТабакТорг",
      date: "2025-06-01",
      time: "10:23",
    },
    {
      id: 102,
      name: "Фальшивая вода",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRP0BBinR-TND03nbiEkoqwVj2pjQQFZALg&s",
      price: 50,
      seller: "ИП Иванов",
      date: "2025-05-27",
      time: "14:50",
    },
  ];

  const handleApprove = (id) => {
    console.log("Подтверждён товар", id);
  };

  const handleReject = (id) => {
    console.log("Отклонён товар", id);
  };

  const handleDelete = (id) => {
    console.log("Удалён товар", id);
  };

  return (
    <div className="">
      <div className="flex justify-between w-[80%]">
        <div className="flex gap-2 mb-4">
          {[
            { label: "Модерация товаров", value: "moderation" },
            { label: "Удалённые запрещённые товары", value: "banned" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setView(tab.value)}
              className={`py-2 mx-3 cursor-pointer border-b-2 transition-all ${
                view === tab.value
                  ? "border-b-2  font-medium primary"
                  : "border-transparent text-gray-700 hover:text-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <DateRangePicker />
      </div>
      {view === "moderation" && (
        <div>
          <ModerationSection
            products={moderationProducts}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        </div>
      )}

      {view === "banned" && (
        <div>
          <BannedSection
            bannedProducts={bannedProducts}
            onDelete={handleDelete}
          />
        </div>
      )}
    </div>
  );
}
