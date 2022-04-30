import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { IsUserExists } from "../../../../../Services/UserApiCalls";
import UserExists from "../../../../../Models/UserExists";
import { Context } from "../../../../../Contexts/Context";

export interface IProps {
  onLoadingHandler(loading: boolean): void;
}

export default function SignIn(props: IProps) {
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();

  const {
    setOpenDialog: setOpenModal,
    isValid,
    setIsValid,
    setSnackbarInfo,
    isFirstTime,
    setIsFirstTime,
    setName
  } = useContext(Context);

  const storingUserData = useCallback((user: any) => {
    localStorage.setItem("UserSID", user.usersSID);
    localStorage.setItem("UserFirstName", user.userFirstName);
    localStorage.setItem("UserLastName", user.userLastName);
    localStorage.setItem("UserUsername", user.userUsername);
    setName(user.userFirstName + " " +user.userLastName);
  }, []);

  useEffect(() => {
    setIsFirstTime(true);
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // const data = new FormData(event.currentTarget); //useRef or this.

    if (emailRef.current.value == "" || passwordRef.current.value == "") {
      setIsValid(false);
      setIsFirstTime(false);
    } else {
      props.onLoadingHandler(true);

      var user: UserExists = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };

      var result = await IsUserExists(user); //Changing it

      if (result) {
        props.onLoadingHandler(false);
        setIsValid(true);
        setOpenModal(false);
        setSnackbarInfo({ message: "Login Succesful!", open: true });
        storingUserData(result); //Storing user object

      } else {
        props.onLoadingHandler(false);
        setIsValid(false);
        setIsFirstTime(false);
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={emailRef}
            error={isValid == false && !isFirstTime}
            helperText={isValid == false && !isFirstTime ? "Required!" : " "}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={passwordRef}
            error={isValid == false && !isFirstTime}
            helperText={isValid == false && !isFirstTime ? "Required!" : " "}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
