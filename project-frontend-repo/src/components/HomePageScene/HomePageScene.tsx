import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cities from "./components/Cities";
import Title from "./components/Title";
import WelcomeMessage from "./components/WelcomeMessage";


export default function HomePageScene() {
  // const [render, setRender] = useState<boolean>(true);

  // useEffect( () => {
  //   setRender(false);
  // }, [localStorage.getItem("UserFirstName"), localStorage.getItem("UserLastName")]);

  return (
    <Box sx={{ m: 1 }}>
      <WelcomeMessage />
      <Title />
      <Cities />
    </Box>
  );
}
