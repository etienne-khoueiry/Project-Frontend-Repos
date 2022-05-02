import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import React, { useCallback, useState } from "react";
import { Backdrop, CircularProgress, Divider } from "@mui/material";

export default function TabsScene() {
  const [value, setValue] = useState("signin");
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = useCallback((loading: boolean) => {
    setIsLoading(loading);
  }, []);

  const handleChange = useCallback((event: any, newValue: string) => {
    setValue(newValue);
  }, []);

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
      <Backdrop sx={{ color: "#fff", zIndex: 10000 }} open={isLoading}>
        <CircularProgress color="secondary" />
      </Backdrop>

      <Box>
        {value === "signup" && <SignUp onLoadingHandler={handleLoading} />}
        <Divider orientation="vertical" flexItem />
        {value === "signin" && <SignIn onLoadingHandler={handleLoading} />}
      </Box>
    </Box>
  );
}
