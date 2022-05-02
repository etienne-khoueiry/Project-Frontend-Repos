import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import GoogleLogin from "react-google-login";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import {
  CreateUser,
  GetUserByEmail,
  IsUserExists,
} from "../../../../../Services/UserApiCalls";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import UserExists from "../../../../../Models/UserExists";
import { Context } from "../../../../../Contexts/Context";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { storingUserData } from "../../../../../Common/Utilities/StoringData";
import { Alert } from "@mui/material";
import User from "../../../../../Models/User";

export interface IProps {
  onLoadingHandler(loading: boolean): void;
}

export default function SignIn(props: IProps) {
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();
  const [notFound, setNotFound] = useState<boolean>(false);

  const {
    setOpenDialog: setOpenModal,
    isValid,
    setIsValid,
    setSnackbarInfo,
    isFirstTime,
    setIsFirstTime,
    setName,
  } = useContext(Context);

  useEffect(() => {
    setIsFirstTime(true);
  }, []);

  const handleSubmit = useCallback(
    async (event: any) => {
      event.preventDefault();

      if (
        emailRef.current.value === "" ||
        passwordRef.current.value === "" ||
        !emailRef.current.value.includes("@")
      ) {
        setIsValid(false);
        setIsFirstTime(false);
      } else {
        props.onLoadingHandler(true);

        var user: UserExists = {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        };

        var result: any = await IsUserExists(user); //Changing it

        if (result) {
          props.onLoadingHandler(false);
          setIsValid(true);
          setOpenModal(false);
          setSnackbarInfo({ message: "Login Succesful!", open: true });
          storingUserData(result); //Storing user object
          setName(result.userFirstName + " " + result.userLastName);
        } else {
          props.onLoadingHandler(false);
          setNotFound(true);
          setIsValid(true);
          setIsFirstTime(false);
        }
      }
    },
    [emailRef.current, passwordRef.current]
  );

  const responseGoogle = useCallback(async (response: any) => {
    props.onLoadingHandler(false);

    var res = await GetUserByEmail(response.profileObj.email);
    if (res) {
      setIsValid(true);
      setOpenModal(false);
      setSnackbarInfo({ message: "Login Succesful!", open: true });
      var user: any = {
        usersSID: res[0].usersSID,
        userFirstName: response.profileObj.givenName,
        userLastName: response.profileObj.familyName,
        userUsername: response.profileObj.email,
      };
      storingUserData(user); //Storing user object
      setName(user.userFirstName + " " + user.userLastName);
    } else {
      var user: any = {
        userUsername: response.profileObj.name,
        userLastName: response.profileObj.familyName,
        userFirstName: response.profileObj.givenName,
        userEmail: response.profileObj.email,
        userPassword: response.profileObj.googleId,
      };
      var result = await CreateUser(user);

      if (result != 0) {
        props.onLoadingHandler(false);
        setIsValid(true);
        setOpenModal(false);
        setSnackbarInfo({ message: "Login Succesful!", open: true });
        user.usersSID = Number(result);
        storingUserData(user);
        setName(user.userFirstName + " " + user.userLastName);
      } else {
        props.onLoadingHandler(false);
        setIsValid(false);
        setIsFirstTime(false);
      }
      props.onLoadingHandler(false);
    }
  }, []);

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
          {notFound && (
            <Alert severity="error">Incorrect email or password!</Alert>
          )}
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
            error={(isValid == false && !isFirstTime) || notFound}
            helperText={
              isValid == false && !isFirstTime
                ? "Required!"
                : notFound
                ? "Incorrect Email"
                : " "
            }
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
            error={(isValid == false && !isFirstTime) || notFound}
            helperText={
              isValid == false && !isFirstTime
                ? "Required!"
                : notFound
                ? "Incorrect Password"
                : " "
            }
          />
          <Box textAlign={"center"}>
            <GoogleLogin
              clientId="717241890463-4pv3d7a1te6ir5qf6lbfetjdfp71g2jg.apps.googleusercontent.com"
              buttonText="Sign In With Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
