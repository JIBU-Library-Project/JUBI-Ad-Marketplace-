import React, { useEffect } from "react";
import { getUserFromToken } from "../../services/utils";
import { useNavigate } from "react-router";

const AuthProtectedRoute = ({ allowedRoles, children }) => {
  const navigate = useNavigate();
  const userDetails = getUserFromToken();

  useEffect(() => {
    if (!userDetails) {
      navigate("/login");
    }

    const userRole = userDetails.role;

    if (!allowedRoles.includes(userRole)) {
      navigate("/unauthorized");
    }
  }, [navigate, allowedRoles, userDetails]);

  return <div>{children}</div>;
};

export default AuthProtectedRoute;
