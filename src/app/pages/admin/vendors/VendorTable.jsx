import VendorRow from "./VendorRow";
import defaicon from "../../../assets/icons/defaultAvatar.png";
import { useState } from "react";
import { ArrowDown } from "lucide-react";

const mockVendors = [
  {
    id: 1,
    name: "asad Иванов",
    store: "Магазин А",
    category: "Одежда",
    phone: "+7 900 123-45-67",
    email: "ivan@mail.ru",
    status: "active",
    icon: defaicon,
    rol: "продавец",
  },
  {
    id: 2,
    name: "chun Смирнова",
    store: "Анна-Маркет",
    category: "Косметика",
    phone: "+7 912 555-66-77",
    email: "anna@mail.ru",
    status: "blocked",
    icon: defaicon,
    rol: "продавец",
  },
  {
    id: 3,
    name: "mannСмирна",
    store: "Анна-Маркет",
    category: "Косметика",
    phone: "+7 912 555-66-77",
    email: "anna@mail.ru",
    status: "blocked",
    icon: defaicon,
    rol: "продавец",
  },
  {
    id: 4,
    name: "anna Смирнова",
    store: "Анна-Маркет",
    category: "Косметика",
    phone: "+7 912 555-66-77",
    email: "anna@mail.ru",
    status: "blocked",
    icon: defaicon,
    rol: "продавец",
  },
  {
    id: 5,
    name: "lay Смирнова",
    store: "Анна-Маркет",
    category: "Косметика",
    phone: "+7 912 555-66-77",
    email: "anna@mail.ru",
    status: "blocked",
    icon: defaicon,
    rol: "продавец",
  },
];

const VendorTable = ({ search, filter }) => {
  const [selectedVendors, setSelectedVendors] = useState([]);

  const filtered = mockVendors.filter((v) => {
    const matchSearch =
      v.name.toLowerCase().includes(search.toLowerCase()) ||
      v.store.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || v.status === filter;
    return matchSearch && matchFilter;
  });

  const toggleSelectVendor = (id) => {
    setSelectedVendors((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleConfirmRegistration = () => {
    alert(`Подтверждены продавцы: ${selectedVendors.join(", ")}`);
    // Здесь можно добавить логику API
  };

  return (
    <div className="bg-white shadow rounded">
      <table className="min-w-full table-auto">
        <thead className="bg-[#E6F7F8] text-sm text-gray-600">
          <tr>
            {filter === "active" && <th className="p-3 text-left">выбрать</th>}
            {filter === "blocked" && <th className="p-3 text-left">№</th>}
            <th className="flex center gap-1.5 p-3 text-left">
              ФИО продавцов <ArrowDown width={15} />
            </th>
            <th className="p-3 text-left">Название магазина</th>
            <th className="p-3 text-left">Категория</th>
            <th className="p-3 text-left">Телефон</th>
            {filter !== "blocked" && <th className="p-3 text-left">Email</th>}
            {filter === "blocked" && <th className="p-3 text-left">...</th>}
            <th className="p-3 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {filtered.length > 0 ? (
            filtered.map((vendor, index) => (
              <VendorRow
                key={vendor.id}
                vendor={vendor}
                index={index + 1}
                filter={filter}
                isSelected={selectedVendors.includes(vendor.id)}
                onToggleSelect={() => toggleSelectVendor(vendor.id)}
              />
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-6 text-gray-500">
                Нет продавцов по заданным критериям.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default VendorTable;
