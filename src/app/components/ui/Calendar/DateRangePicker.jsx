import { useState, useRef, useEffect } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import Calendar from "./Calendar";
import Button from "../Button/Button";
import { ArrowRight } from "lucide-react";

const DateRangePicker = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFromCalendar, setShowFromCalendar] = useState(false);
  const [showToCalendar, setShowToCalendar] = useState(false);

  const fromRef = useRef();
  const toRef = useRef();

  // Закрытие по клику вне
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        fromRef.current &&
        !fromRef.current.contains(e.target) &&
        toRef.current &&
        !toRef.current.contains(e.target)
      ) {
        setShowFromCalendar(false);
        setShowToCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center">
      {/* Дата от */}
      <div className="relative" ref={fromRef}>
        <div
          className="flex items-center justify-between gap-6 px-4 py-2 border border-gray-400 rounded-l-lg cursor-pointer hover:bg-gray-50 text-gray-600"
          onClick={() => {
            setShowFromCalendar(!showFromCalendar);
            setShowToCalendar(false);
          }}
        >
          <span>{fromDate.toLocaleDateString()}</span>
          <CalendarIcon className="primary" size={20} />
        </div>
        {showFromCalendar && (
          <div className="absolute z-20 mt-2 shadow-lg">
            <Calendar
              initialDate={fromDate}
              onDateChange={(date) => {
                setFromDate(date);
                setShowFromCalendar(false);
              }}
            />
          </div>
        )}
      </div>

      {/* Стрелка */}
      <div className="flex items-center justify-center bg-primary text-white px-3 h-[42px]">
        <ArrowRight size={20} />
      </div>

      {/* Дата до */}
      <div className="relative" ref={toRef}>
        <div
          className="flex items-center justify-between gap-6 px-4 py-2 border border-gray-400 rounded-r-lg cursor-pointer hover:bg-gray-50 text-gray-600"
          onClick={() => {
            setShowToCalendar(!showToCalendar);
            setShowFromCalendar(false);
          }}
        >
          <span>{toDate.toLocaleDateString()}</span>
          <CalendarIcon className="primary" size={20} />
        </div>
        {showToCalendar && (
          <div className="absolute z-20 mt-2 shadow-lg">
            <Calendar
              initialDate={toDate}
              onDateChange={(date) => {
                setToDate(date);
                setShowToCalendar(false);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DateRangePicker;
