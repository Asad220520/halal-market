import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function SellerRoute({ children }) {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated || user.role !== "seller") {
    return <Navigate to="/" replace />;
  }

  return children;
}
