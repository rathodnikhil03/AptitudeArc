import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = sessionStorage.getItem("role");
    setRole(storedRole);
    setLoading(false);
  }, []);

  if (loading) return null; // Prevents early redirection

  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
