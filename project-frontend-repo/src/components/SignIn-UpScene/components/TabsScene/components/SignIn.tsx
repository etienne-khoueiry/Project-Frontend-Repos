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
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import {
  GetUserByToken,
  IsUserExists,
} from "../../../../../Services/UserApiCalls";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import UserExists from "../../../../../Models/UserExists";
import { Context } from "../../../../../Contexts/Context";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Alert } from "@mui/material";

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
    user,
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

        var userExists: UserExists = {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        };

        var result: any = await IsUserExists(userExists);

        if (result) {
          localStorage.setItem("bearer", result);
          var resultData = await GetUserByToken(result);
          if (resultData) {
            user.current = resultData;
            props.onLoadingHandler(false);
            setIsValid(true);
            setOpenModal(false);
            setSnackbarInfo({ message: "Login Succesful!", open: true });
            setName(user.current.userFirstName + " " + user.current.userLastName);
          } else {
            props.onLoadingHandler(false);
            setNotFound(true);
            setIsValid(true);
            setIsFirstTime(false);
          }
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
            error={(isValid === false && !isFirstTime) || notFound}
            helperText={
              isValid === false && !isFirstTime
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
            error={(isValid === false && !isFirstTime) || notFound}
            helperText={
              isValid === false && !isFirstTime
                ? "Required!"
                : notFound
                ? "Incorrect Password"
                : " "
            }
          />
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
