import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const RoleRedirect = () => {
  const { isLoggedIn, role } = useAuth();

  if (!isLoggedIn || !role) return <Navigate to="/login" replace />;
  if (role === "vendor") return <Navigate to="/dashboard" replace />;
  if (role === "user") return <Navigate to="/user-homepage" replace />;

  return <Navigate to="/" replace />;
};

export default RoleRedirect;
