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
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Images from "../../assets";
import { Stack } from "@mui/material";
import { CustomButton } from "../../genericComponents/customButton";
import { useNavigate } from "react-router-dom";
import CustomModal from "../../genericComponents/modalPopup/customModal";
import Authentication from "../authentication";

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
  "Universities",
  "Profile",
  "Booked slots",
  "Preferences",
  "Documents",
];

const Header = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [selectedPage, setSelectedPage] = React.useState<string>('');
  // eslint-disable-next-line 
  const [auth, setAuth] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (link: string) => {
    navigate(link);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <AppBar
      position="static"
      sx={{ "&.MuiAppBar-root ": { backgroundColor: "#fff", px: {xs:0,sm:5} , boxShadow: "0 2px 2px #3f5c6e26" } }}
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
            <Stack direction="row" sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} spacing={2}>
              {pages.map((page: any) => (
                <Button
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu(page.link);
                    setSelectedPage(page.title); 
                  }}
                  sx={{
                    display: "block",
                    color: page.title === selectedPage ? "#3B3F76" : "#000", 
                    textTransform: "capitalize",
                    fontSize: "1rem",
                    fontWeight:page.title === selectedPage ? 600:500,
                  }}
                >
                  {page.title}
                </Button>
              ))}
            </Stack>
            <Box sx={{ flexGrow: 0 }}>
              {auth ? (
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
              ) : (
                <CustomButton handleSubmit={handleOpenModal} width="100%">
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
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
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
                onClick={handleOpenNavMenu}
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
                    onClick={() => handleCloseNavMenu(page.link)}
                    sx={{py:0,minHeight:"35px"}}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
      <CustomModal
        open={open}
        handleClose={handleCloseModal}
        additionalData={{ width: "500px" }}
      >
        <Authentication/>
      </CustomModal>
    </AppBar>
  );
};
export default Header;
