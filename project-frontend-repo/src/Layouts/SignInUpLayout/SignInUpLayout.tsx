import React from "react";
import { Grid } from "@mui/material";
import SnackbarComponent from "../../Common/SnackbarComponent";
import SignIn_UpScene from "../../components/SignIn-UpScene/SignIn_UpScene";

export default function SignInUpLayout() {
  return (
    <div>
      <SnackbarComponent />
      <Grid container spacing={2}>
        <Grid item sm={2} xs={2}>
          <p></p>
        </Grid>
        <Grid item sm={8} xs={8}>
          <SignIn_UpScene />
        </Grid>
        <Grid item sm={2} xs={2}>
          <p></p>
        </Grid>
      </Grid>
    </div>
  );
}
