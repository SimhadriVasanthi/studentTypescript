import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import Header from "../components/layouts/header";
import Courses from "../pages/courses/Courses";
import Home from "../pages/home/Home";
import Recommendations from "../pages/Recommendations";
import Profile from "../pages/profile/Profile";
import ProfileLayout from "../pages/profile/Profile";
import { useAppSelector } from "../assets/hooks";
import CustomModal from "../genericComponents/modalPopup/customModal";
import { COMPONENTS } from "../assets/enums";
import PdfPreview from "../pages/profile/section/documents/pdfView";
import University from "../pages/university";

export const getComponent = (id: string) => {
  let index = COMPONENTS.findIndex((item) => item.name === id);
  return COMPONENTS[index].component;
};

function Routing() {
  const popup = useAppSelector((state) => state.popup);
  const Popupcomponent: React.FC<{ data: any }> | null =
    popup.data.show && popup.data.data?.container?.name
      ? getComponent(popup?.data?.data?.container?.name)
      : null;

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/courses" element={<Courses />} />
          <Route path="/" element={<Home />} />
          <Route path="/sidebar" element={<Profile />} />
          <Route path="/pdfPreview" element={<PdfPreview />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/university/:id" element={<University />} />
          <Route element={<ProtectedRoute link={"/profile/*"} />}>
            <Route path="/profile/*" element={<ProfileLayout />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <CustomModal
        open={popup.data.show}
        additionalData={{
          width: popup.data.data?.container?.dimensions?.width,
        }}
      >
        {Popupcomponent ? (
          <Popupcomponent data={popup.data.data?.container?.data} />
        ) : null}
      </CustomModal>
    </>
  );
}

export default Routing;
