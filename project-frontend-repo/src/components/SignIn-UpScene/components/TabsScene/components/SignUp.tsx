import React, { useContext, useEffect, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import User from "../../../../../Models/User";
import { CreateUser } from "../../../../../Services/UserApiCalls";
import { Context } from "../../../../../Contexts/Context";

export interface IProps {
  onLoadingHandler(loading: boolean): void;
}

export default function SignUp(props: IProps) {
  const firstNameRef = useRef<any>();
  const lastNameRef = useRef<any>();
  const usernameRef = useRef<any>();
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();

  const {
    setOpenDialog: setOpenModal,
    isValid,
    setIsValid,
    isFirstTime,
    setIsFirstTime,
    setSnackbarInfo,
  } = useContext(Context);

  useEffect(() => {
    setIsFirstTime(true);
  }, []);
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    var user: User = {
      userUsername: usernameRef.current.value,
      userLastName: lastNameRef.current.value,
      userFirstName: firstNameRef.current.value,
      userEmail: emailRef.current.value,
      userPassword: passwordRef.current.value,
    };

    if (
      user.userEmail == "" ||
      user.userFirstName == "" ||
      user.userLastName == "" ||
      user.userPassword == "" ||
      user.userUsername == ""
    ) {
      setIsValid(false);
      setIsFirstTime(false);
    } else {
      var result = await CreateUser(user);

      if (result) {
        props.onLoadingHandler(false);
        setIsValid(true);
        setOpenModal(false);
        setSnackbarInfo({ message: "Login Succesful!", open: true });
      } else {
        console.log("error");
      }
    }
  };

  return (
    <div>
      <Container component="main">
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  inputRef={firstNameRef}
                  error={isValid == false && !isFirstTime}
                  helperText={
                    isValid == false && !isFirstTime ? "Required!" : " "
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  inputRef={lastNameRef}
                  error={isValid == false && !isFirstTime}
                  helperText={
                    isValid == false && !isFirstTime ? "Required!" : " "
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  inputRef={usernameRef}
                  error={isValid == false && !isFirstTime}
                  helperText={
                    isValid == false && !isFirstTime ? "Required!" : " "
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputRef={emailRef}
                  error={isValid == false && !isFirstTime}
                  helperText={
                    isValid == false && !isFirstTime ? "Required!" : " "
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  inputRef={passwordRef}
                  error={isValid == false && !isFirstTime}
                  helperText={
                    isValid == false && !isFirstTime ? "Required!" : " "
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
