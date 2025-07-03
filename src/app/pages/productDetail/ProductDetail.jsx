import React, { useState } from "react";
import { Star, ShoppingCart, Camera, Paperclip } from "lucide-react";
import Button from "@components/ui/Button/Button";
import ResponsiveIcon from "../../components/ui/ResponsiveIcon/ResponsiveIcon";
import Review from "./Review";
import ReviewList from "./ReviewList";

function ProductDetail() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-8 container mx-auto  px-4 py-6 sm:py-12">
      {/* Main Product Section */}
      <div className="bg-white rounded-lg sm:shadow-[0px_0px_4px_0px_gray] p-0 sm:p-6  mb-6">
        <div className="flex justify-around gap-3 lg:gap-8">
          {/* Product Image */}
          <div className="">
            <div className="bg-gray-100 rounded-lg   shadow-[1px_2px_4px_1px_grey] flex items-center justify-center sm:w-[298px] w-[155px]  h-[170px] sm:h-[320px]">
              <img
                src="https://gezatone.ru/upload/resize_cache/iblock/aa8/600_760_1821712164bebe8964a3cb4f91f48bb72/17.01.2023_4515990K_foto_7_web.jpeg"
                alt="MONDSUB Eye Patches"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="sm:w-[560px] w-[208px] ">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center sm:mb-6 mb-1  gap-2">
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
                        className="ml-1 text-gray-400 "
                      >
                        Еще.....
                      </button>
                    </span>
                  </div>
                </div>
              )}

              {/* md+ экраны и см-развёрнутый */}
              {(expanded || window.innerWidth >= 640) && (
                <div
                  onClick={() => setExpanded(false)}
                  className={`${
                    !expanded ? "hidden sm:block " : ""
                  } space-y-0.1 border border-gray-600 rounded-lg p-1.5 mb-2.5`}
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
                  </div>
                </div>
              )}
            </div>

            {/* Rating */}
            {!expanded && (
              <>
                <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:my-6">
                  {[1, 2, 3, 4].map((star) => (
                    <Star
                      key={star}
                      className="w-3 sm:w-6 h-3 sm:h-6 fill-yellow-400 text-yellow-400"
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
              </>
            )}
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
        <Review />
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
      <ReviewList />
    </div>
  );
}

export default ProductDetail;
