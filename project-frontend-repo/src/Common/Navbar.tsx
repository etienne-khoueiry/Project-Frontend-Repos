import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router";
import Tooltip from "@mui/material/Tooltip";
import Toolbar from "@mui/material/Toolbar";
import { createStyles } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Context } from "../Contexts/Context";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SignInUpLayout from "../Layouts/SignInUpLayout/SignInUpLayout";
import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const pages = ["Favorites"];
var settings = ["Login"];

const Navbar = () => {
  const navigate = useNavigate();

  const settingRef = useRef<any>();
  const pagesRef = useRef<any>();

  var { openDialog, setOpenDialog, isValid, setIsValid, setName } =
    useContext(Context);

  const [avatarNaming, setAvatarNaming] = useState<string | null>();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  }, []);
  const handleOpenUserMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  }, []);

  useLayoutEffect(() => {
    var firstLetterFirstName = String(
      localStorage.getItem("UserFirstName")
    ).substring(0, 1);
    var firstLetterLastName = String(
      localStorage.getItem("UserLastName")
    ).substring(0, 1);
    if (
      localStorage.getItem("UserFirstName") &&
      localStorage.getItem("UserLastName")
    ) {
      settings = ["Logout"];
      setIsValid(true);
      setAvatarNaming(
        firstLetterFirstName.toUpperCase() + firstLetterLastName.toUpperCase()
      );
    } else {
      settings = ["Login"];
      setAvatarNaming(null);
    }
  }, [
    localStorage.getItem("UserFirstName"),
    localStorage.getItem("UserLastName"),
  ]);

  const handleCloseNavMenu = useCallback(() => {
    if (pagesRef.current.innerText.toUpperCase() === "FAVORITES") {
      if (localStorage.getItem("UserSID")) {
        navigate(`/Favorites/${localStorage.getItem("UserSID")}`);
      } else {
        setOpenDialog(true);
      }
    }
    setAnchorElNav(null);
  }, [pagesRef.current]);

  const handleCloseUserMenu = useCallback(() => {
    setAnchorElUser(null);
  }, []);

  const handleSettings = () => {
    if (settingRef.current.innerHTML === "Logout") {
      localStorage.clear();
      setIsValid(false);
      setName("null");
      navigate("/");
    } else if (settingRef.current.innerHTML === "Login") {
      setOpenDialog(!openDialog);
    }
  };

  const handleLogo = useCallback(() => {
    navigate("/");
  }, []);

  return (
    <div>
      <SignInUpLayout />

      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                cursor: "pointer",
                justifyContent: "flex-start",
              }}
              onClick={handleLogo}
            >
              City Reviewing
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" ref={pagesRef}>
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                cursor: "pointer",
              }}
              onClick={handleLogo}
            >
              City Reviews
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  ref={pagesRef}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar>{avatarNaming}</Avatar>
                </IconButton>
              </Tooltip>
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
                    <Typography
                      textAlign="center"
                      ref={settingRef}
                      onClick={handleSettings}
                    >
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default Navbar;
