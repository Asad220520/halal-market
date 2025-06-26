import { NavLink, Outlet, useLocation } from "react-router-dom";
import SideBarAdmin from "../pages/admin/SideBarAdmin";

export default function AdminLayout() {
  const location = useLocation();

  const pageTitles = {
    "/admin": "Рабочий стол",
    "/admin/vendors": "Продавцы",
    "/admin/products": "Товары",
    "/admin/analytics": "Аналитика",
    "/admin/questions": "Вопросы",
    "/admin/offer": "Офферта",
    "/admin/profile": "Профиль",
    "/admin/settings": "Настройки",
  };

  const pageTitle = pageTitles[location.pathname] || "Панель администратора";

  return (
    <div className="flex min-h-screen">
      <SideBarAdmin />
      <main className="flex-1">
        <header className="flex justify-between  border-b primary border-gray-200 px-6 pr-30 py-8 text-xl font-semibold">
          {pageTitle}
          <NavLink to={"/"}>Выйти</NavLink>
        </header>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
