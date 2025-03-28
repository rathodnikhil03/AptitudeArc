import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  userRole: null,
  setUserRole: () => {},
});

export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Load any existing token/role on initial render
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    const role = localStorage.getItem("role") || sessionStorage.getItem("role");
    if (token && role) {
      setUserRole(role);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </AuthContext.Provider>
  );
};
