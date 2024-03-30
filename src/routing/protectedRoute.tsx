import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { RoutingProps } from "../types/types";

const ProtectedRoute: React.FC<RoutingProps> = (props) => {
  const auth = { token: false || localStorage.getItem("_auth") };
  return auth.token ? <Outlet /> : <Navigate to={props.link} />;
};

export default ProtectedRoute;