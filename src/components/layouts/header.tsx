import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Images from "../../assets";
import { Stack } from "@mui/material";
import { CustomButton } from "../../genericComponents/customButton";
import { useNavigate } from "react-router-dom";
import CustomModal from "../../genericComponents/modalPopup/customModal";
import Authentication from "../authentication";
import { Event } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../assets/hooks";
import { setUserAuthStatus } from "../../store/Slices/userAuthSlice";
import { setPopup } from "../../store/Slices/popupSlice";

const pages = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Courses",
    link: "/courses",
  },
  {
    title: "Recommendations",
    link: "/recommendations",
  },
];
const settings = [
  {
    title: "Universities",
    link: "/profile/universities",
  },
  {
    title: "Dashboard",
    link: "/profile/dashboard",
  },
  {
    title: "Profile",
    link: "/profile/personal",
  },
  {
    title: "Documents",
    link: "/profile/documents",
  },
];

const Header = () => {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [selectedPage, setSelectedPage] = React.useState<string>("");
  const userAuthStatus = useAppSelector((state) => state.userAuthStatus);
  const sharedInfo = useAppSelector((state) => state.sharedInfo);
  console.log(sharedInfo);
  const dispatch = useAppDispatch();
  const eventHandler = (event: Event) => {
    switch (event.name) {
      case "OpenUserMenu":
        setAnchorElUser(event.data);
        break;

      case "OpenNavMenu":
        setAnchorElNav(event.data);
        break;

      case "CloseNavMenu":
        navigate(event.data.link);
        setAnchorElNav(null);
        setSelectedPage(event.data.title);
        break;

      case "CloseUserMenu":
        navigate(event.data.link);
        setAnchorElUser(null);
        break;

      case "login":
        dispatch(
          setPopup({
            show: true,
            data: {
              container: {
                name: "login",
                dimensions: {
                  width: "500px",
                },
              },
              type: "custom",
            },
          })
        );
        break;
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        "&.MuiAppBar-root ": {
          backgroundColor: "#fff",
          px: { xs: 0, sm: 5 },
          boxShadow: "0 2px 2px #3f5c6e26",
        },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Stack direction="row" spacing={2}>
            <Box
              component="img"
              src={Images.campusrootLogo}
              alt="logo"
              sx={{ display: {}, mr: 1 }}
            />
          </Stack>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <Stack
              direction="row"
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              spacing={2}
            >
              {pages.map((page: any) => (
                <Button
                  key={page}
                  onClick={() => {
                    eventHandler({ name: "CloseNavMenu", data: page });
                  }}
                  sx={{
                    display: "block",
                    color: page.title === selectedPage ? "#3B3F76" : "#000",
                    textTransform: "capitalize",
                    fontSize: "1rem",
                    fontWeight: page.title === selectedPage ? 600 : 500,
                  }}
                  className={page.title === selectedPage ?"underlined" :""}
                >
                  {page.title}
                </Button>
              ))}
            </Stack>
            <Box sx={{ flexGrow: 0 }}>
              {userAuthStatus.data?.isAuthorized ? (
                <IconButton
                  onClick={(e) => {
                    eventHandler({
                      name: "OpenUserMenu",
                      data: e.currentTarget,
                    });
                  }}
                  sx={{ p: 0 }}
                >
                  <Avatar alt="profile" src={sharedInfo?.data?.displayPicSrc} />
                </IconButton>
              ) : (
                <CustomButton
                  handleSubmit={() => eventHandler({ name: "login" })}
                  width="100%"
                >
                  Login/Signin
                </CustomButton>
              )}

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={() => {
                  eventHandler({ name: "CloseUserMenu", data: "" });
                }}
              >
                {settings.map((setting: any) => (
                  <MenuItem
                    key={setting}
                    onClick={() => {
                      eventHandler({ name: "CloseUserMenu", data: setting });
                    }}
                  >
                    <Typography textAlign="center">{setting.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={(e) => {
                  eventHandler({ name: "OpenUserMenu", data: e.currentTarget });
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={() => setAnchorElNav(null)}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page: any) => (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      eventHandler({ name: "CloseNavMenu", data: page });
                    }}
                    sx={{ py: 0, minHeight: "35px" }}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
