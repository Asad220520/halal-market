import { Outlet, NavLink } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-4">
        <h2 className="text-xl font-bold mb-6">Админ-панель</h2>
        <nav className="space-y-2">
          <NavLink to="/admin" className="block hover:text-blue-400">
            Рабочий стол
          </NavLink>
          <NavLink to="/admin/vendors" className="block hover:text-blue-400">
            Продавцы
          </NavLink>
          <NavLink to="/admin/products" className="block hover:text-blue-400">
            Товары
          </NavLink>
          <NavLink to="/admin/analytics" className="block hover:text-blue-400">
            Аналитика
          </NavLink>
          <NavLink to="/admin/questions" className="block hover:text-blue-400">
            Вопросы
          </NavLink>
          <NavLink to="/admin/offer" className="block hover:text-blue-400">
            Офферта
          </NavLink>
          <NavLink to="/admin/settings" className="block hover:text-blue-400">
            Настройки
          </NavLink>
          <NavLink to="/admin/profile" className="block hover:text-blue-400">
            Профиль
          </NavLink>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
