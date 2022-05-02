import React from "react";
import Navbar from "../Common/Navbar";
import HomePageLayout from "../Layouts/HomePageLayout/HomePageLayout";
import FavoritesLayout from "../Layouts/FavoritesLayout/FavoritesLayout";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CityDetailsLayout from "../Layouts/CityDetailsLayout/CityDetailsLayout";
import SearchResultLayout from "../Layouts/SearchResultLayout/SearchResultLayout";
import CreateNewCityThreadLayout from "../Layouts/CreateNewCityThreadLayout/CreateNewCityThreadLayout";

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
