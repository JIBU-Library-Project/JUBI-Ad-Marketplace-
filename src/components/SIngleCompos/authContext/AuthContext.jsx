import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");  // This could be personal or company name
  const [role, setRole] = useState("");          // 'user' or 'vendor'

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    const name = localStorage.getItem("username");
    const savedRole = localStorage.getItem("role");

    if (auth && name && savedRole) {
      setIsLoggedIn(true);
      setUsername(name);
      setRole(savedRole);
    }
  }, []);

  const login = (name, userRole) => {
    // name = user name or company name depending on role
    localStorage.setItem("auth", "true");
    localStorage.setItem("username", name);
    localStorage.setItem("role", userRole);

    setIsLoggedIn(true);
    setUsername(name);
    setRole(userRole);
  };

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setUsername("");
    setRole("");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, username, role, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
