import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function PrivateRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div>Загрузка...</div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return children;
}
