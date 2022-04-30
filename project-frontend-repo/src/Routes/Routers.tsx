import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "../Common/Navbar";
import CreateNewCityThreadScene from "../components/CreateNewCityThreadScene/CreateNewCityThreadScene";
import CityDetailsLayout from "../Layouts/CityDetailsLayout/CityDetailsLayout";
import CreateNewCityThreadLayout from "../Layouts/CreateNewCityThreadLayout/CreateNewCityThreadLayout";
import HomePageLayout from "../Layouts/HomePageLayout/HomePageLayout";

export default function Routers() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePageLayout />} />
          <Route path="/City/:id" element={<CityDetailsLayout />} />
          <Route path="/NewCity" element={<CreateNewCityThreadLayout />} />
        </Routes>
      </Router>
    </div>
  );
}
