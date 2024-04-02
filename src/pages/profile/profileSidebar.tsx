import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, Link } from "react-router-dom";
import { ListItemIcon, Tooltip } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import EventIcon from "@mui/icons-material/Event";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Person2Icon from "@mui/icons-material/Person2";
import TuneIcon from "@mui/icons-material/Tune";

const profileList = [
  {
    path: "/profile/universities",
    name: "Universities",
    icon: <AccountBalanceIcon />,
  },
  { path: "/profile/dashboard", name: "Dashboard", icon: <DashboardIcon /> },
  {
    path: "/profile/booked-sessions",
    name: "Booked Sessions",
    icon: <EventIcon />,
  },
  { path: "/profile/personal", name: "Profile", icon: <Person2Icon /> },
  {
    path: "/profile/preferences",
    name: "Preferences",
    icon: <TuneIcon />,
  },
  { path: "/profile/documents", name: "Documents", icon: <DescriptionIcon /> },
];

const ProfileSidebar = () => {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:1000px)");

  return (
    <Box
      sx={{
        display: "flex",
        background: "#fff",
        boxShadow: 1,
        mx: { xs: 0, sm: 5 },
        my: 3,
        width: {xs:"100px", md: "250px" },
        borderRadius: "10px",
        height: "85vh",
      }}
    >
      <Box
        sx={{
          overflow: "auto",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <List>
          {profileList.map((item: any) => (
            <ListItem
              key={item.name}
              component={Link}
              to={item.path}
              sx={{ textDecoration: "none", color: "#000" }}
            >
              <ListItemButton
                selected={location.pathname === item.path}
                sx={{
                  fontWeight: 500,
                  "&.Mui-selected": {
                    // textAlign: "center",
                    borderRadius: "10px",
                    background: "#3B3F76",
                    color: "#fff",
                    "&:hover": {
                      background: "#3B3F76",
                    },
                  },
                }}
              >
                {isMobile ? (
                  <Tooltip title={item.name} placement="right">
                    <ListItemIcon
                      sx={{
                        color:
                          location.pathname === item.path ? "#fff" : "#000",
                        minWidth: "40px",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                  </Tooltip>
                ) : (
                  <ListItemIcon
                    sx={{
                      color: location.pathname === item.path ? "#fff" : "#000",
                      minWidth: "40px",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                )}

                {!isMobile ? <ListItemText primary={item.name} /> : null}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ProfileSidebar;
