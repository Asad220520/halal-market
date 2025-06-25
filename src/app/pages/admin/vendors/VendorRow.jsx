import React, { useState, useRef, useEffect } from "react";
import { FiMoreVertical } from "react-icons/fi";

const VendorRow = ({ vendor, index, filter, isSelected, onToggleSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleBlock = () => {
    setIsOpen(false);
    alert(
      vendor.status === "blocked"
        ? `Разблокировать ${vendor.name}`
        : `Заблокировать ${vendor.name}`
    );
  };

  const handleDelete = () => {
    setIsOpen(false);
    alert(`Удалить ${vendor.name}`);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <tr
      ref={dropdownRef}
      className={`border-t border-gray-300 text-sm relative ${
        isOpen ? "bg-[#E6F7F8]" : ""
      }`}
    >
      {/* Чекбокс (для filter="all") или нумерация (для filter="active") */}
      {filter === "active" && (
        <td className="p-3">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={onToggleSelect}
            className="cursor-pointer h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          />
        </td>
      )}
      {filter === "blocked" && <td className="p-3">{index}</td>}
      {/* Основные данные */}
      <td className="p-3">
        <div className="flex items-center gap-3">
          <img
            src={vendor.icon}
            alt="avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex flex-col text-1xl leading-tight">
            <span className="font-bold text-gray-900">{vendor.name}</span>
            <span className="text-gray-500">{vendor.rol}</span>
          </div>
        </div>
      </td>

      <td className="p-3">{vendor.store}</td>
      <td className="p-3">{vendor.category}</td>
      <td className="p-3">{vendor.phone}</td>

      {/* Email (если не blocked) или кнопка разблокировки (если blocked) */}
      {filter !== "blocked" && <td className="p-3">{vendor.email}</td>}
      {filter === "blocked" && (
        <td className="p-3">
          <button
            onClick={handleBlock}
            className="px-3 py-1 bg-primary text-white rounded hover:bg-opacity-90"
          >
            Разблокировать
          </button>
        </td>
      )}

      {/* Выпадающее меню (если нужно) */}
      <td className="p-3 text-right relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 hover:text-black cursor-pointer"
        >
          <FiMoreVertical size={18} />
        </button>
        {isOpen && (
          <div className="absolute right-10 mt-2 w-40 bg-white rounded shadow-xl z-10">
            <button
              onClick={handleBlock}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 primary"
            >
              {vendor.status === "blocked" ? "Разблокировать" : "Заблокировать"}
            </button>
            <button
              onClick={handleDelete}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
            >
              Удалить
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default VendorRow;
