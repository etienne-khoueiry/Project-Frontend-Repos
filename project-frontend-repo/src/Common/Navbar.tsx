import React, {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
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
import { Context } from "../Contexts/Context";
import { createStyles } from "@mui/material";
import SignInUpLayout from "../Layouts/SignInUpLayout/SignInUpLayout";

const pages = ["Products", "Pricing", "Blog"];
var settings = ["Login"];

const useStyles = createStyles({
  signinBtn: {
    backgroundColor: "#F9D342",
  },
});

const Navbar = () => {
  // const classes = useStyles();
  const settingRef = useRef<any>();
  var { openModal, setOpenModal, isValid, setIsValid } = useContext(Context);

  const [avatarNaming, setAvatarNaming] = useState<string | null>();

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
      setAvatarNaming(null); //setting to a undefined value to show the anonymous person
    }
  }, [
    localStorage.getItem("UserFirstName"),
    localStorage.getItem("UserLastName"),
  ]);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSigninModal = () => {
    setOpenModal(!openModal);
  };

  const handleSettings = () => {
    if (settingRef.current.innerHTML === "Logout") {
      localStorage.clear();
      setIsValid(false);
    } else if (settingRef.current.innerHTML === "Login") {
      setOpenModal(!openModal);
    }
  };

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
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              LOGO
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
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            {!isValid && (
              <Box sx={{ flexGrow: 0, mx: 2 }}>
                <Button
                  sx={{ backgroundColor: "#F9D342" }}
                  onClick={handleSigninModal}
                >
                  Sign In
                </Button>
              </Box>
            )}
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
