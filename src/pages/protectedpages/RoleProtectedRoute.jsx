import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { getUserFromToken } from "../../services/utils";

const RoleProtectedRoute = ({ allowedRoles, children }) => {
  const navigate = useNavigate();
  const userDetails = getUserFromToken();
  const userRole = userDetails.role;

  useEffect(() => {
    if (!allowedRoles.includes(userRole)) {
      navigate("/unauthorized");
    }
  }, [allowedRoles, userRole, navigate]);

  return <div>{children}</div>;
};

export default RoleProtectedRoute;
