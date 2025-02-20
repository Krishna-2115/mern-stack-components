import React from "react";
import { Navigate } from "react-router-dom";

const RoleBasedRoute = ({ user, allowedRoles, children }) => {
    return allowedRoles.includes(user.role) ? children : <Navigate to="/unauthorized" />;
};

export default RoleBasedRoute;