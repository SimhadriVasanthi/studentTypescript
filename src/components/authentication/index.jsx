import React, { useState } from "react";
import ForgotPassword from "./forgotPassword";
import Login from "./Login";
import SignUp from "./Register";

const Authentication = () => {
  const [loginOrSignup, setLoginOrSignup] = useState("login");

  let componentToRender = null;

  if (loginOrSignup === "login") {
    componentToRender = <Login setLoginOrSignup={setLoginOrSignup} />;
  } else if (loginOrSignup === "signup") {
    componentToRender = <SignUp setLoginOrSignup={setLoginOrSignup} />;
  } else if (loginOrSignup === "forgotPassword") {
    componentToRender = <ForgotPassword setLoginOrSignup={setLoginOrSignup} />;
  }

  return <div>{componentToRender}</div>;
};

export default Authentication;
