import React from "react";
import { useAppSelector } from "../../assets/hooks";
import Login from "./Login";
import SignUp from "./Register";

const Authentication = () => {
  let componentToRender = null;
  const userAuthStatus = useAppSelector((state) => state.userAuthStatus);

  if (
    !userAuthStatus.data.isAuthorized &&
    userAuthStatus.data.role === "student"
  ) {
    componentToRender = <Login />;
  } else if (
    !userAuthStatus.data.isRegistered &&
    userAuthStatus.data.role === "student"
  ) {
    componentToRender = <SignUp />;
  }
  return <div>{componentToRender}</div>;
};

export default Authentication;
