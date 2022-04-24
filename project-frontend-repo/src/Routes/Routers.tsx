import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePageLayout from "../Layouts/HomePageLayout/HomePageLayout";
import SignInUpLayout from "../Layouts/SignInUpLayout/SignInUpLayout";

export default function Routers() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePageLayout />} />
        </Routes>
      </Router>
    </div>
  );
}
