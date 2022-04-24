import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { Backdrop, CircularProgress } from "@mui/material";

export default function TabsScene() {
  const [value, setValue] = useState("signin");
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="signin" label="Sign In" />
        <Tab value="signup" label="Sign Up" />
      </Tabs>
      <Backdrop
        sx={{ color: '#fff', zIndex: 10000 }}
        open={isLoading}
      >
        <CircularProgress color="secondary" />
      </Backdrop>

      <Box>
        {value === "signup" && <SignUp onLoadingHandler={handleLoading}/>}
        {value === "signin" && <SignIn onLoadingHandler={handleLoading} />}
      </Box>
    </Box>
  );
}
