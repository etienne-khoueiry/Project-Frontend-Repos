import React from "react";
import { Box } from "@mui/material";
import Title from "./components/Title";
import Cities from "./components/Cities";
import WelcomeMessage from "./components/WelcomeMessage";
import SearchLayout from "../../Layouts/SearchLayout/SearchLayout";
import PaginationComponent from "./components/PaginationComponent";
import InfiniteScroll from "react-infinite-scroll-component";


export default function HomePageScene() {

  return (
    <Box sx={{ m: 1, mt: 8 }}>
      <SearchLayout />
      <WelcomeMessage />
      <Title />
      <Cities />
      <PaginationComponent />
      
    </Box>
  );

}
