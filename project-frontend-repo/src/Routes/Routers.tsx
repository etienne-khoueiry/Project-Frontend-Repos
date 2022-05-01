import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "../Common/Navbar";
import CreateNewCityThreadScene from "../components/CreateNewCityThreadScene/CreateNewCityThreadScene";
import CityDetailsLayout from "../Layouts/CityDetailsLayout/CityDetailsLayout";
import CreateNewCityThreadLayout from "../Layouts/CreateNewCityThreadLayout/CreateNewCityThreadLayout";
import FavoritesLayout from "../Layouts/FavoritesLayout/FavoritesLayout";
import HomePageLayout from "../Layouts/HomePageLayout/HomePageLayout";
import SearchLayout from "../Layouts/SearchLayout/SearchLayout";
import SearchResultLayout from "../Layouts/SearchResultLayout/SearchResultLayout";

export default function Routers() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePageLayout />} />
          <Route path="/City/:id" element={<CityDetailsLayout />} />
          <Route path="/NewCity" element={<CreateNewCityThreadLayout />} />
          <Route path="/Favorites/:id" element={<FavoritesLayout />} />
          <Route path="/SearchResult/:search" element={<SearchResultLayout />} />
        </Routes>
      </Router>
    </div>
  );
}
