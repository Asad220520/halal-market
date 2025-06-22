import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function AdminRoute({ children }) {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}
