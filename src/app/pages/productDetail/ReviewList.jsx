import React, { useState } from "react";
import { Star } from "lucide-react";
import Button from "@components/ui/Button/Button";

const allReviews = [
  {
    name: "Полина",
    rating: 4,
    comment: "Хорошенькие патчи, понравились очень 😍 буду брать ещё...",
    images: [
      "https://gezatone.ru/upload/resize_cache/iblock/aa8/600_760_1821712164bebe8964a3cb4f91f48bb72/17.01.2023_4515990K_foto_7_web.jpeg",
      "https://gezatone.ru/upload/resize_cache/iblock/aa8/600_760_1821712164bebe8964a3cb4f91f48bb72/17.01.2023_4515990K_foto_7_web.jpeg",
    ],
    sellerResponse: "Спасибо за добрый отзыв! 😊",
  },
  {
    name: "Алиса",
    rating: 5,
    comment: "Супер! Эффект сразу заметен!",
    images: [],
    sellerResponse: "Благодарим за ваш отзыв! Очень приятно 🙏",
  },
  {
    name: "Марина",
    rating: 3,
    comment: "Патчи норм, но липкость чувствуется немного.",
    images: [],
    sellerResponse: "Спасибо за замечание! Мы передадим это производителю.",
  },
];

const ReviewList = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? allReviews : allReviews.slice(0, 1);

  return (
    <>
      {visibleReviews.map((review, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-[0px_0px_4px_0px_gray] p-4 sm:p-6 lg:p-8 mb-6"
        >
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-300 rounded-full flex-shrink-0" />
                <h4 className="font-medium text-teal-600 text-base sm:text-lg">
                  {review.name}
                </h4>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      star <= review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="text-gray-700 text-sm sm:text-base mb-3">
              {review.comment}
            </p>

            <div className="flex gap-3 flex-wrap mb-3">
              {review.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`img-${i}`}
                  className="w-16 h-16 object-cover rounded-lg shadow"
                />
              ))}
            </div>

            {/* Ответ продавца (если есть) */}
            {review.sellerResponse && (
              <div className="bg-gray-100 mt-4 p-4 rounded-lg shadow-[0px_0px_4px_0px_gray]">
                <h4 className="font-medium text-gray-800 text-base sm:text-lg mb-2">
                  Ответ продавца
                </h4>
                <p className="text-gray-700 text-sm sm:text-base">
                  {review.sellerResponse}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}

      {!showAll && allReviews.length > 1 && (
        <Button variant="primary" onClick={() => setShowAll(true)}>
          Смотреть все отзывы
        </Button>
      )}
    </>
  );
};

export default ReviewList;
