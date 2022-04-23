import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Common/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SignIn_UpScene from "./components/SignIn-UpScene/SignIn_UpScene";
import { Grid } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#292826",
      },
      secondary: {
        main: "#F9D342",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<SignIn_UpScene />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
