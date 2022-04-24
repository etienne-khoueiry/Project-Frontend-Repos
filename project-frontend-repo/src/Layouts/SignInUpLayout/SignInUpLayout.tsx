import { Alert } from "@mui/material";
import React from "react";
import SignIn_UpScene from "../../components/SignIn-UpScene/SignIn_UpScene";
import SnackbarComponent from "../../Common/SnackbarComponent";

export default function SignInUpLayout() {
    
  return (
    <div>
      <SnackbarComponent />
      <SignIn_UpScene />
    </div>
  );
}
