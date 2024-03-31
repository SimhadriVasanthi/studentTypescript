import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/authentication/Login";
import ProtectedRoute from "./protectedRoute";
import Header from "../components/layouts/header";
import Courses from "../pages/courses/Courses";
import Home from "../pages/home/Home";
import Recommendations from "../pages/Recommendations";

function Routing () {
  return (
    <>
    
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/recommendations" element={<Recommendations/>} />


          <Route element={<ProtectedRoute link={"/"} />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing;
