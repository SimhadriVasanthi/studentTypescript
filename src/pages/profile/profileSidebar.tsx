import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { ListItemIcon, Tooltip, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Person2Icon from "@mui/icons-material/Person2";
import Images from "../../assets";
import { useAppDispatch } from "../../assets/hooks";
import { setUserAuthStatus } from "../../store/Slices/userAuthSlice";

const profileList = [
  {
    path: "/profile/universities",
    name: "Universities",
    icon: <AccountBalanceIcon />,
  },
  { path: "/profile/dashboard", name: "Dashboard", icon: <DashboardIcon /> },
  { path: "/profile/personal", name: "Profile", icon: <Person2Icon /> },
  { path: "/profile/documents", name: "Documents", icon: <DescriptionIcon /> },
];

const ProfileSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        background: "#fff",
        boxShadow: 1,
        mx: { xs: 0, md: 5 },
        my: 3,
        width: { md: "220px" },
        borderRadius: "10px",
        height: "85vh",
        justifyContent: "center",
        // zIndex: 1200,
        // position: "fixed",
        // top: 0,
      }}
    >
      <Box
        sx={{
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginTop: "50px",
          mb: 3,
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
                  "&:hover": {
                    background: "#fff",
                  },
                  color: "#3b3f7691",
                  "&.Mui-selected": {
                    // textAlign: "center",
                    borderRadius: "10px",
                    background: "#fff",
                    color: "#3b3f76",
                    "&:hover": {
                      background: "#fff",
                    },
                  },
                }}
              >
                {isMobile ? (
                  <Tooltip title={item.name} placement="right">
                    <ListItemIcon
                      sx={{
                        color:
                          location.pathname === item.path
                            ? "#3b3f76"
                            : "#3b3f7691",
                        minWidth: "40px",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                  </Tooltip>
                ) : (
                  <ListItemIcon
                    sx={{
                      color:
                        location.pathname === item.path
                          ? "#3b3f76"
                          : "#3b3f7691",
                      minWidth: "40px",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                )}

                {!isMobile ? (
                  <ListItemText
                    primary={item.name}
                    sx={{
                      "& .MuiTypography-root": {
                        fontWeight: location.pathname === item.path ? 600 : 500,
                      },
                    }}
                  />
                ) : null}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          <ListItem
            sx={{ textDecoration: "none", color: "#000" }}
            onClick={() => {
              localStorage.clear();
              window.location.reload();
              dispatch(
                setUserAuthStatus({
                  isAuthorized: false,
                  isRegistered: false,
                  role: "guest",
                })
              );
              navigate("/");
            }}
          >
            <ListItemButton
              sx={{
                "&:hover": {
                  background: "#fff",
                },
                color: "#3b3f7691",
                "&.Mui-selected": {
                  // textAlign: "center",
                  borderRadius: "10px",
                  background: "#fff",
                  color: "#3b3f76",
                  "&:hover": {
                    background: "#fff",
                  },
                },
              }}
            >
              {isMobile ? (
                <Tooltip title="Logout" placement="right">
                  <ListItemIcon
                    sx={{
                      backgroundColor: "#3b3f76",
                      minWidth: "20px",
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={Images.logout} alt="logout" />
                  </ListItemIcon>
                </Tooltip>
              ) : (
                <ListItemIcon
                  sx={{
                    backgroundColor: "#3b3f76",
                    minWidth: "20px",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={Images.logout} alt="logout" />
                </ListItemIcon>
              )}

              {!isMobile ? (
                <ListItemText
                  primary="Logout"
                  sx={{
                    "& .MuiTypography-root": {
                      fontWeight: 500,
                    },
                    ml: 2,
                  }}
                />
              ) : null}
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default ProfileSidebar;
