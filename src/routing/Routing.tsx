import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import Header from "../components/layouts/header";
import Courses from "../pages/courses/Courses";
import Home from "../pages/home/Home";
import Recommendations from "../pages/Recommendations";
import Profile from "../pages/profile/Profile";
import ProfileLayout from "../pages/profile/Profile";

function Routing () {
  return (
    <>
    
      <BrowserRouter>
      <Header/>
        <Routes>
          {/* <Route path="/" element={<Login/>} /> */}
          <Route path="/courses" element={<Courses/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/sidebar" element={<Profile/>} />

          <Route path="/recommendations" element={<Recommendations/>} />
          

          <Route element={<ProtectedRoute link={"/profile/*"} />}>
          <Route
              path="/profile/*"
              element={
                  <ProfileLayout/>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing;
