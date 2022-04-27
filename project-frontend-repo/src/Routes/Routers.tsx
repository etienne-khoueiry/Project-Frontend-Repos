import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CityDetailsLayout from "../Layouts/CityDetailsLayout/CityDetailsLayout";
import HomePageLayout from "../Layouts/HomePageLayout/HomePageLayout";
import SignInUpLayout from "../Layouts/SignInUpLayout/SignInUpLayout";

export default function Routers() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePageLayout />} />
          <Route path="/City/:id" element={<CityDetailsLayout />} />
        </Routes>
      </Router>
    </div>
  );
}
