import { Box } from "@mui/material";
import ProfileSidebar from "./profileSidebar";
import { Routes, Route } from "react-router-dom";
import Bookedslots from "./section/bookedSlots/bookedSlots";
import Dashboard from "./section/universities/universities";
import Documents from "./section/documents";
import Preferences from "./section/preferences";
import Profile from "./section/personalDetails";

const ProfileRightSide = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="universities" element={<Dashboard />} />
      <Route path="booked-sessions" element={<Bookedslots />} />
      <Route path="personal" element={<Profile />} />
      <Route path="preferences" element={<Preferences />} />
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
