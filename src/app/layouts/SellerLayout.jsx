import { Outlet, NavLink } from "react-router-dom";

export default function SellerLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-green-900 text-white p-6 space-y-4">
        <h2 className="text-xl font-bold mb-6">Панель продавца</h2>
        <nav className="space-y-2">
          <NavLink to="/seller" className="block hover:text-green-400">
            Рабочий стол
          </NavLink>
          <NavLink to="/seller/products" className="block hover:text-green-400">
            Товары
          </NavLink>
          <NavLink
            to="/seller/products/add"
            className="block hover:text-green-400"
          >
            Добавить товар
          </NavLink>
          <NavLink to="/seller/delivery" className="block hover:text-green-400">
            Доставка
          </NavLink>
          <NavLink to="/seller/reviews" className="block hover:text-green-400">
            Отзывы
          </NavLink>
          <NavLink
            to="/seller/questions"
            className="block hover:text-green-400"
          >
            Вопросы
          </NavLink>
          <NavLink
            to="/seller/analytics"
            className="block hover:text-green-400"
          >
            Аналитика
          </NavLink>
          <NavLink to="/seller/offer" className="block hover:text-green-400">
            Офферта
          </NavLink>
          <NavLink to="/seller/settings" className="block hover:text-green-400">
            Настройки
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
