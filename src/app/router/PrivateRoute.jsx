import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function PrivateRoute({ children }) {
  // const { isAuthenticated, loading } = useAuth();
  const user = JSON.parse(localStorage.getItem("user"));

  // if (loading) return <div>Загрузка...</div>;
  if (!user) return <Navigate to="/login" replace />;

  return <Outlet />;
}
