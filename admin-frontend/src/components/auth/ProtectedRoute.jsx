import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

const ProtectedRoute = ({ children }) => {
  const token = useAuthStore((state) => state.token);

  if (!token) {
    // No token? Send them back to login
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
