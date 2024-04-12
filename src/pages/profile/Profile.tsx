import { Box } from "@mui/material";
import ProfileSidebar from "./profileSidebar";
import { Routes, Route } from "react-router-dom";
import Documents from "./section/documents";
import Universities from "./section/universities/universities";
import Dashboard from "./section/dashboard";
import ProfileSection from "./section/profileSection";

const ProfileRightSide = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="universities" element={<Universities />} />
      <Route path="personal" element={<ProfileSection />} />
      <Route path="documents" element={<Documents />} />
    </Routes>
  );
};
const ProfileLayout = () => {
  return (
    <Box sx={{ display: "flex", background: "#F3F8FC" }}>
      {/* Sidebar */}
      <Box component="nav" sx={{}}>
        <ProfileSidebar />
      </Box>
      {/* Main content */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, paddingRight: { lg: "5rem" } }}
      >
        <ProfileRightSide />
      </Box>
    </Box>
  );
};

export default ProfileLayout;
