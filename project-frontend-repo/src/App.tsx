import "./App.css";
import React from "react";
import Routers from "./Routes/Routers";
import ContextProvider from "./Contexts/Context";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
