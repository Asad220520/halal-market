import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import SellerLayout from "../layouts/SellerLayout";
import AdminLayout from "../layouts/AdminLayout";

// Public Pages
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import CategoryPage from "../pages/CategoryPage";
import NotFound from "../pages/NotFound";
import LoginPage from "../features/auth/LoginPage";
import RegisterPage from "../features/auth/RegisterPage";

// Private Pages (Client)
import ProfileHome from "../pages/profile/ProfileHome";
import Purchases from "../pages/profile/Purchases";
import Orders from "../pages/profile/Orders";
import Wishlist from "../pages/profile/Wishlist";
import EditProfile from "../pages/profile/EditProfile";

// Seller Pages
import SellerDashboard from "../pages/seller/SellerDashboard";
import Products from "../pages/seller/Products";
import AddProduct from "../pages/seller/AddProduct";
import Delivery from "../pages/seller/Dellivery";
import Reviews from "../pages/seller/Reviews";
import Questions from "../pages/seller/Questions";
import SellerAnalytics from "../pages/seller/Analytics";
import Offer from "../pages/seller/Offer";
import SellerSettings from "../pages/seller/Settings";

// Admin Pages
import AdminDashboard from "../pages/admin/AdminDashboard";
import Vendors from "../pages/admin/Vendors";
import AdminProducts from "../pages/admin/Products";
import AdminAnalytics from "../pages/admin/Analytics";
import AdminQuestions from "../pages/admin/Questions";
import AdminOffer from "../pages/admin/Offer";
import AdminSettings from "../pages/admin/Settings";
import AdminProfile from "../pages/admin/Profile";

// Guards
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import SellerRoute from "./SellerRoute";
import TestLogin from "../pages/TestLogin";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="category/:slug" element={<CategoryPage />} />
        </Route>

        {/* Auth */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        {/* Client profile */}
        <Route element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/profile" element={<ProfileHome />} />
            <Route path="profile/purchases" element={<Purchases />} />
            <Route path="profile/orders" element={<Orders />} />
            <Route path="profile/wishlist" element={<Wishlist />} />
            <Route path="profile/edit" element={<EditProfile />} />
          </Route>
        </Route>

        {/* Seller */}
        <Route element={<SellerRoute />}>
          <Route element={<SellerLayout />}>
            <Route path="/seller" element={<SellerDashboard />} />
            <Route path="seller/products" element={<Products />} />
            <Route path="seller/products/add" element={<AddProduct />} />
            <Route path="seller/delivery" element={<Delivery />} />
            <Route path="seller/reviews" element={<Reviews />} />
            <Route path="seller/questions" element={<Questions />} />
            <Route path="seller/analytics" element={<SellerAnalytics />} />
            <Route path="seller/offer" element={<Offer />} />
            <Route path="seller/settings" element={<SellerSettings />} />
          </Route>
        </Route>

        {/* Admin */}
        <Route element={<AdminRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="admin/vendors" element={<Vendors />} />
            <Route path="admin/products" element={<AdminProducts />} />
            <Route path="admin/analytics" element={<AdminAnalytics />} />
            <Route path="admin/questions" element={<AdminQuestions />} />
            <Route path="admin/offer" element={<AdminOffer />} />
            <Route path="admin/settings" element={<AdminSettings />} />
            <Route path="admin/profile" element={<AdminProfile />} />
          </Route>
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
        <Route path="/test-login" element={<TestLogin />} />
      </Routes>
    </BrowserRouter>
  );
}
