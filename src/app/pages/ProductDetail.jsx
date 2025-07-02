import React, { useState } from "react";
import { Star, ShoppingCart, Camera, Paperclip } from "lucide-react";
import Button from "@components/ui/Button/Button";
import ResponsiveIcon from "../components/ui/ResponsiveIcon/ResponsiveIcon";
import { useRef } from "react";

export default function EyePatchesProduct() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files
      .slice(0, 5 - images.length)
      .map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages].slice(0, 5));
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // 👈 клик по input при нажатии кнопки
  };

  return (
    <div className="space-y-8 container mx-auto  px-4 py-6">
      {/* Main Product Section */}
      <div className="bg-white rounded-lg sm:shadow-[0px_0px_4px_0px_gray] p-0 sm:p-6  mb-6">
        <div className="flex justify-around gap-3 lg:gap-8">
          {/* Product Image */}
          <div className="">
            <div className="bg-gray-100 rounded-lg shadow-[1px_2px_4px_1px_grey] flex items-center justify-center sm:w-[298px] w-[155px]  h-[170px] sm:h-[320px]">
              <img
                src="https://gezatone.ru/upload/resize_cache/iblock/aa8/600_760_1821712164bebe8964a3cb4f91f48bb72/17.01.2023_4515990K_foto_7_web.jpeg"
                alt="MONDSUB Eye Patches"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="sm:w-[560px] w-[208px] ">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center sm:mb-6 mb-2  gap-2">
              <h1 className="text-[20px] sm:text-3xl font-semibold text-teal-600">
                Патчи для глаз
              </h1>
              <span className="sm:flex hidden  text-[20px] sm:text-3xl font-bold text-red-500">
                2500 сом
              </span>
            </div>

            {/* Инфоблок со сворачиванием только на sm и ниже */}
            <div className="space-y-1 text-[8px] sm:text-base">
              {/* sm и меньше: свернутая версия */}
              {!expanded && (
                <div className="sm:hidden space-y-1">
                  <div>
                    <span className="text-gray-600">
                      Количество предметов в упаковке:
                    </span>{" "}
                    <span className="text-teal-600 font-medium">30шт</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Состав:</span>{" "}
                    <span className="text-teal-600">
                      aqua, butylene glycol, glycerin, chondrus
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Действие:</span>{" "}
                    <span className="text-teal-600">
                      увлажнение; против морщин;
                      <button
                        onClick={() => setExpanded(true)}
                        className="ml-1 text-blue-500 underline"
                      >
                        Еще...
                      </button>
                    </span>
                  </div>
                </div>
              )}

              {/* md+ экраны и см-развёрнутый */}
              {(expanded || window.innerWidth >= 640) && (
                <div
                  className={`${!expanded ? "hidden sm:block" : ""} space-y-1`}
                >
                  <div>
                    <span className="text-gray-600">
                      Количество предметов в упаковке:
                    </span>{" "}
                    <span className="text-teal-600 font-medium">30шт</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Состав:</span>{" "}
                    <span className="text-teal-600">
                      aqua, butylene glycol, glycerin, chondrus crispus,
                      ceratonia
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Действие:</span>{" "}
                    <span className="text-teal-600">
                      увлажнение; против морщин; против отеков и синяков
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Срок годности:</span>{" "}
                    <span className="text-teal-600 font-medium">24 месяца</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Комплектация:</span>{" "}
                    <span className="text-teal-600">
                      ложечка; патчи 80 шт; пинцет
                    </span>
                    {/* Только на sm кнопка скрытия */}
                    {expanded && (
                      <button
                        onClick={() => setExpanded(false)}
                        className="ml-2 text-blue-500 underline sm:hidden"
                      >
                        Скрыть
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:my-6">
              {[1, 2, 3, 4].map((star) => (
                <Star
                  key={star}
                  className="w-3 sm:w-6 h-3 sm:h- fill-yellow-400 text-yellow-400"
                />
              ))}
              <Star className="w-3 sm:w-6 h-3 sm:h-6 fill-yellow-400/50 text-yellow-400" />
              <span className="ml-2 sm:ml-3 font-semibold text-[10px] sm:text-lg">
                4,7
              </span>
            </div>
            <span className="flex sm:hidden  text-[20px] sm:text-3xl font-bold text-red-500">
              2500 сом
            </span>
            {/* Action Buttons */}
            <div className="flex  gap-2  h-[28px] sm:gap-6 justify-between  mt-1 sm:mt-8">
              <Button variant="primary" className="w-full">
                Купить
              </Button>

              <Button
                variant="secondary"
                className="w-full"
                icon={
                  <ResponsiveIcon
                    Icon={ShoppingCart}
                    sizeMobile={12}
                    sizeDesktop={20}
                  />
                }
              >
                корзину
              </Button>
            </div>
          </div>
        </div>

        {/* Review Form Section */}
        <div className="sm:w-[1080px] w-[360px]  m-auto py-4 sm:p-6 lg:py-8 mt-8">
          <div className="flex gap-5">
            <h3 className="text-lg sm:text-xl text-gray-400 font-medium mb-4 sm:mb-6">
              Оценить:
            </h3>

            <div className="flex items-center gap-2 sm:gap-3 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="transition-colors"
                >
                  <Star
                    className={`w-5 h-5 sm:w-7 sm:h-7 ${
                      star <= rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300  fill-gray-300 hover:text-yellow-400"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Написать комментарий"
              className="w-full p-3 border border-gray-300 rounded-lg resize-none h-32 focus:outline-none focus:ring-2 focus:ring-teal-500 text-base"
            />
            <div className="sm:w-[500px] w-full  flex flex-col gap-3">
              {/* Upload input (hidden) */}
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                ref={fileInputRef}
                className="hidden"
              />

              {/* Upload button */}
              <Button
                variant="secondary"
                className="w-full"
                onClick={handleButtonClick}
                icon={
                  <ResponsiveIcon
                    Icon={Paperclip}
                    sizeMobile={12}
                    sizeDesktop={20}
                  />
                }
              >
                Загрузите новое фото
              </Button>

              {/* Previews */}
              <div className="flex gap-2 ">
                {/* Загруженные фото */}
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`preview-${i}`}
                    className="w-[76px] h-[87px] sm:w-16 sm:h-16 object-cover rounded-lg"
                  />
                ))}

                {/* Пустые слоты с иконкой камеры */}
                {Array.from({ length: 5 - images.length }).map((_, i) => (
                  <div
                    key={`empty-${i}`}
                    className="w-[76px] h-[87px] sm:w-16 sm:h-16 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                  >
                    <Camera className="w-5 h-5 text-gray-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Button variant="primary" className="mt-8">
            Добавить
          </Button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="flex items-center gap-8 sm:gap-14 mb-6">
        <h2 className=" relative text-xl sm:text-2xl font-semibold text-teal-600">
          Оценки
          <span className="absolute t-0 sm:left-24 left-19 text-gray-500 text-[8px] sm:text-[12px] ">
            123457
          </span>
        </h2>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
            />
          ))}
          <span className="font-semibold text-base sm:text-lg">4,7</span>
        </div>
      </div>

      {/* Individual Review */}
      <div className="bg-white rounded-lg shadow-[0px_0px_4px_0px_gray] p-4 sm:p-6 lg:p-8">
        <div className="flex-1">
          <div className="flex items-center justify-between  mb-2">
            <div className="flex items-center gap-3 ">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-300 rounded-full flex-shrink-0"></div>
              <h4 className="font-medium text-teal-600 text-base sm:text-lg">
                Полина
              </h4>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
            </div>
          </div>
          <p className="text-gray-700 text-sm sm:text-base mb-3">
            Хорошенькие патчи, понравились очень 😍 буду брать ещё...
          </p>
          <div className="flex gap-3 flex-wrap">
            <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
            <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Seller Response */}
      <div className="bg-gray-100 mt-8 p-4 shadow-[0px_0px_4px_0px_gray] sm:p-6 rounded-lg mb-6">
        <h4 className="font-medium text-gray-800 text-base sm:text-lg mb-2">
          Ответ продавца
        </h4>
        <p className="text-gray-700 text-sm sm:text-base">
          Здравствуйте. Мы рады, что вы остались довольны патчами...
        </p>
      </div>

      <Button variant="primary">Смотреть все отзывы</Button>
    </div>
  );
}
