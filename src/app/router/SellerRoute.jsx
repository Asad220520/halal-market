import { Navigate, Outlet } from "react-router-dom";

export default function SellerRoute() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.role !== "seller") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
