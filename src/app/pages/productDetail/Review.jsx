import React, { useState } from "react";
import { Star, ShoppingCart, Camera, Paperclip } from "lucide-react";
import Button from "@components/ui/Button/Button";
import ResponsiveIcon from "../../components/ui/ResponsiveIcon/ResponsiveIcon";
import { useRef } from "react";

const Review = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);
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
    <div className="sm:w-[1080px] w-[360px]  m-auto py-4 sm:p-6 lg:py-8 mt-4 sm:mt-8">
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
  );
};

export default Review;
