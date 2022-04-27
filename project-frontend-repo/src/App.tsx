import React from "react";
import "./App.css";
import Navbar from "./Common/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ContextProvider from "./Contexts/Context";
import Routers from "./Routes/Routers";

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
      <ContextProvider>
        <Routers />
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
