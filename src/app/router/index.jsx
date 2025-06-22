import { BrowserRouter, Routes, Route } from "react-router-dom";

// Страницы
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import LoginPage from "../features/auth/LoginPage";
import RegisterPage from "../features/auth/RegisterPage";
import StorePage from "../pages/StorePage";
import AdminDashboard from "../pages/admin/AdminDashboard";

// Layout'ы
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import StoreLayout from "../layouts/StoreLayout";
import AdminLayout from "../layouts/AdminLayout";

// Защита маршрутов
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute"; // если есть отдельная проверка прав администратора

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Основной Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Route>

        {/* Auth layout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* Магазин */}
        <Route element={<StoreLayout />}>
          <Route path="/store" element={<StorePage />} />
        </Route>

        {/* Админка */}
        <Route element={<AdminLayout />}>
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
