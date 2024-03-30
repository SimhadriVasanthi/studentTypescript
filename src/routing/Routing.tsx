import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/authentication/Login";
import ProtectedRoute from "./protectedRoute";


function Routing () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route element={<ProtectedRoute link={"/"} />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing;
