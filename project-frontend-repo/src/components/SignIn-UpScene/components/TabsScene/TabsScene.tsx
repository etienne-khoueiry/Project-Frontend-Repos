import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { CircularProgress } from "@mui/material";

export default function TabsScene() {
  const [value, setValue] = useState("signin");
  const [isLoading, setIsLoading] = useState(true);
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
      <Box
        sx={{
          zIndex: 1000,
          position: "absolute",
          top: "50px",
          left: "50%",
          transform: "translate(-50%, 500%)",
        }}
      >
        {/* {isLoading && (
          <CircularProgress
            color="secondary"
          />
        )} */}
      </Box>

      <Box>
        {" "}
        {/*sx={{backgroundColor: "rgba(0,0,0,0.5)"}*/}
        {value === "signup" && <SignUp />}
        {value === "signin" && <SignIn />}
      </Box>
    </Box>
  );
}
