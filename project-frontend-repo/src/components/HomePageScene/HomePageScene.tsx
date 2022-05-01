import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchLayout from "../../Layouts/SearchLayout/SearchLayout";
import Cities from "./components/Cities";
import Title from "./components/Title";
import WelcomeMessage from "./components/WelcomeMessage";


export default function HomePageScene() {
  // const [render, setRender] = useState<boolean>(true);

  // useEffect( () => {
  //   setRender(false);
  // }, [localStorage.getItem("UserFirstName"), localStorage.getItem("UserLastName")]);

  return (
    <Box sx={{ m: 1, mt: 8 }}>
      <SearchLayout />
      <WelcomeMessage />
      <Title />
      <Cities />
    </Box>
  );
}
