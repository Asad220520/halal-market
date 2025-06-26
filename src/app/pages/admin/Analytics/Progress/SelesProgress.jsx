import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SalesProgress = () => {
  const percentage = 67;

  return (
    <div className="shadow-sm border border-gray-200 rounded-xl p-4 shadow flex flex-col items-center">
      <div className="flex flex-col w-full text-sm">
        <h2 className="text-lg font-semibold">
          Общий показатель продаж за месяц
        </h2>
        <ul className="flex gap-2">
          <li className="flex items-center gap-1 text-[#6CC51D]">
            <span className="text-[#6CC51D] text-5xl">•</span> Достигнуто
          </li>
          <li className="flex items-center gap-1 text-gray-400">
            <span className="text-gray-400 text-5xl">•</span>Оставшийся
          </li>
        </ul>
      </div>
      <div className="w-42 h-42">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          strokeWidth={10}
          styles={buildStyles({
            pathColor: "#6CC51D",
            textColor: "#000",
            trailColor: "#e5e7eb",
            textSize: "20px",
          })}
        />
      </div>
    </div>
  );
};

export default SalesProgress;
