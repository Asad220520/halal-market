import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiGrid,
  FiUsers,
  FiBox,
  FiBarChart2,
  FiHelpCircle,
  FiFileText,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import adminuser from "../../assets/icons/adminuser.svg";
import logo from "../../assets/icons/logo.svg";

const SideBarAdmin = () => {
  return (
    <aside className="w-64 border-r-1 border-gray-300 text-black p-6 space-y-4">
      <div className="center flex flex-col items-center space-y-4">
        <img src={logo} alt="logo" />
        <img src={adminuser} alt="user" width={48} height={48} />
      </div>
      <nav className="pt-5">
        <ul className="space-y-80">
          <li className="space-y-5">
            {/* <NavLink
              to="/admin"
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-1 rounded hover:text-blue-400 `
              }
            >
              <FiGrid size={20} className="text-blue-400" />
              <span className="text-primary">Рабочий стол</span>
            </NavLink> */}

            <NavLink
              to="/admin/vendors"
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-1 rounded hover:text-blue-400 ${
                  isActive ? "bg-[#E6F7F8]" : ""
                }`
              }
            >
              <FiUsers size={20} className="text-blue-400" />
              <span className="text-primary">Продавцы</span>
            </NavLink>

            <NavLink
              to="/admin/products"
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-1 rounded hover:text-blue-400 ${
                  isActive ? "bg-[#E6F7F8]" : ""
                }`
              }
            >
              <FiBox size={20} className="text-blue-400" />
              <span className="text-primary">Товары</span>
            </NavLink>

            <NavLink
              to="/admin/analytics"
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-1 rounded hover:text-blue-400 ${
                  isActive ? "bg-[#E6F7F8]" : ""
                }`
              }
            >
              <FiBarChart2 size={20} className="text-blue-400" />
              <span className="text-primary">Аналитика</span>
            </NavLink>

            <NavLink
              to="/admin/questions"
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-1 rounded hover:text-blue-400 ${
                  isActive ? "bg-[#E6F7F8]" : ""
                }`
              }
            >
              <FiHelpCircle size={20} className="text-blue-400" />
              <span className="text-primary">Вопросы</span>
            </NavLink>

            <NavLink
              to="/admin/offer"
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-1 rounded hover:text-blue-400 ${
                  isActive ? "bg-[#E6F7F8]" : ""
                }`
              }
            >
              <FiFileText size={20} className="text-blue-400" />
              <span className="text-primary">Офферта</span>
            </NavLink>
          </li>
          <li className="space-y-3">
            <NavLink
              to="/admin/profile"
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-1 rounded hover:text-blue-400 ${
                  isActive ? "bg-[#E6F7F8]" : ""
                }`
              }
            >
              <FiUser size={20} className="text-blue-400" />
              <span className="text-primary">Профиль</span>
            </NavLink>
            <NavLink
              to="/admin/settings"
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-1 rounded hover:text-blue-400 ${
                  isActive ? "bg-[#E6F7F8]" : ""
                }`
              }
            >
              <FiSettings size={20} className="text-blue-400" />
              <span className="text-primary">Настройки</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBarAdmin;
