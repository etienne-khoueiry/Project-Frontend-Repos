import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Box from "@mui/material/Box";
import { Alert } from "@mui/material";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import {
  CreateUser,
  GetUserByEmail,
  GetUserByToken,
} from "../../../../../Services/UserApiCalls";
import User from "../../../../../Models/User";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import { Context } from "../../../../../Contexts/Context";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { storingUserData } from "../../../../../Common/Utilities/StoringData";

export interface IProps {
  onLoadingHandler(loading: boolean): void;
}

const containsNumber = (str: any) => {
  return /\d/.test(str);
};

export default function SignUp(props: IProps) {
  const firstNameRef = useRef<any>();
  const lastNameRef = useRef<any>();
  const usernameRef = useRef<any>();
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();
  const [isEmailExist, setIsEmailExist] = useState<boolean>(false);

  const {
    setOpenDialog: setOpenModal,
    isValid,
    setIsValid,
    isFirstTime,
    setIsFirstTime,
    setSnackbarInfo,
    setName,
    user
  } = useContext(Context);

  useEffect(() => {
    setIsFirstTime(true);
    setIsEmailExist(false);
  }, []);

  const handleSubmit = useCallback(
    async (event: any) => {
      event.preventDefault();
      props.onLoadingHandler(true);

      var userObj: User = {
        userUsername: usernameRef.current.value,
        userLastName: lastNameRef.current.value,
        userFirstName: firstNameRef.current.value,
        userEmail: emailRef.current.value,
        userPassword: passwordRef.current.value,
      };

      if (
        userObj.userEmail === "" ||
        userObj.userFirstName === "" ||
        userObj.userLastName === "" ||
        userObj.userPassword === "" ||
        userObj.userUsername === "" ||
        !userObj.userEmail?.includes("@") ||
        containsNumber(userObj.userFirstName) ||
        containsNumber(userObj.userLastName)
      ) {
        setIsValid(false);
        setIsFirstTime(false);
      } else {
        var checkIsEmailExists = await GetUserByEmail(userObj.userEmail);

        if (!checkIsEmailExists) {
          var result: any = await CreateUser(userObj);

          if (result) {
            localStorage.setItem("bearer", result);
            var resultData = await GetUserByToken(result);
            if(resultData){
              user.current = resultData;
              props.onLoadingHandler(false);
              setIsValid(true);
              setOpenModal(false);
              setSnackbarInfo({ message: "SignUp Succesful!", open: true });
              setName(user.current.userFirstName + " " + user.current.userLastName);
            }else{
              props.onLoadingHandler(false);
              setIsValid(false);
              setIsFirstTime(false);  
            }
          } else {
            props.onLoadingHandler(false);
            setIsValid(false);
            setIsFirstTime(false);
          }
        } else {
          props.onLoadingHandler(false);
          setIsValid(false);
          setIsFirstTime(false);
          setIsEmailExist(true);
        }
      }
    },
    [
      usernameRef.current,
      firstNameRef.current,
      lastNameRef.current,
      emailRef.current,
      passwordRef.current,
    ]
  );

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
              {isEmailExist && (
                <Grid item xs={12}>
                  <Alert severity="error">Email already exists!</Alert>
                </Grid>
              )}
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
                  error={isValid === false && !isFirstTime}
                  helperText={
                    isValid === false && !isFirstTime ? "Required!" : " "
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
                  error={isValid === false && !isFirstTime}
                  helperText={
                    isValid === false && !isFirstTime ? "Required!" : " "
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
                  error={isValid === false && !isFirstTime}
                  helperText={
                    isValid === false && !isFirstTime ? "Required!" : " "
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
                  error={isValid === false && !isFirstTime}
                  helperText={
                    isValid === false && !isFirstTime
                      ? "Required!"
                      : isEmailExist
                      ? "Email Already Exists!"
                      : " "
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
                  error={isValid === false && !isFirstTime}
                  helperText={
                    isValid === false && !isFirstTime ? "Required!" : " "
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
