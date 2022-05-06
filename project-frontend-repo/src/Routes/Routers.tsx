import React, { useContext } from "react";
import Navbar from "../Common/Navbar";
import HomePageLayout from "../Layouts/HomePageLayout/HomePageLayout";
import FavoritesLayout from "../Layouts/FavoritesLayout/FavoritesLayout";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CityDetailsLayout from "../Layouts/CityDetailsLayout/CityDetailsLayout";
import SearchResultLayout from "../Layouts/SearchResultLayout/SearchResultLayout";
import CreateNewCityThreadLayout from "../Layouts/CreateNewCityThreadLayout/CreateNewCityThreadLayout";
import { Context } from "../Contexts/Context";
import { Grid, LinearProgress } from "@mui/material";

export default function Routers() {
  const { loadPage } = useContext(Context);
  if (loadPage) {
  return (
    <>
      <LinearProgress color="secondary" />
    <Grid container >
      <Grid item xs={12} sx={{display:"flex", alignItems:"center", justifyContent: "center", height:"100vh", fontSize: "30px"}}>
          Welcome To City Reviewing!
      </Grid>
    </Grid>
    </>
  );
  }
  else {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePageLayout />} />
          <Route path="/City/:id" element={<CityDetailsLayout />} />
          <Route path="/NewCity" element={<CreateNewCityThreadLayout />} />
          <Route path="/Favorites/:id" element={<FavoritesLayout />} />
          <Route
            path="/SearchResult/:search"
            element={<SearchResultLayout />}
          />
           <Route path="*" element={<HomePageLayout />} />
        </Routes>
      </Router>
    </div>
  );
  }
}
