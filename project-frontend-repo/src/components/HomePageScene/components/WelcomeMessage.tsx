import React, { useContext, useLayoutEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { Context } from "../../../Contexts/Context";

export default function WelcomeMessage() {
  const [welcomeMsg, setWelcomeMsg] = useState<string>("Welcome!");

  const {name} = useContext(Context);
  // useLayoutEffect(() => {
  //   if (
  //     localStorage.getItem("UserFirstName") &&
  //     localStorage.getItem("UserLastName")
  //   ) {
  //     setWelcomeMsg(
  //       `Welcome ${localStorage.getItem(
  //         "UserFirstName"
  //       )} ${localStorage.getItem("UserLastName")}!`
  //     );
  //   } else {
  //     setWelcomeMsg(`Welcome!`);
  //   }
  // }, [
  //   localStorage.getItem("UserFirstName"),
  //   localStorage.getItem("UserLastName"),
  // ]);

  return (
    <Paper
      sx={{
        borderRadius: "10px",
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        m: 1,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${"https://media.istockphoto.com/photos/london-skyline-and-primrose-hill-park-panorama-picture-id520047130?b=1&k=20&m=520047130&s=170667a&w=0&h=ljMiyvXFC7bWdOpPW3gX8DQJgZsalTcoukPBT0_OZs0="})`,
      }}
    >
      {
        <img
          style={{ display: "none" }}
          src={
            "https://media.istockphoto.com/photos/london-skyline-and-primrose-hill-park-panorama-picture-id520047130?b=1&k=20&m=520047130&s=170667a&w=0&h=ljMiyvXFC7bWdOpPW3gX8DQJgZsalTcoukPBT0_OZs0="
          }
          alt={"post.imageText"}
        />
      }
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
          borderRadius: "10px",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 3, sm: 3, lg: 3, xl: 3 },
              pr: { md: 0 },
              marginTop: "5px",
            }}
          >
            <Typography
              component="h3"
              variant="h4"
              color="inherit"
              gutterBottom
            >
              {!name.includes("null") && "Welcome " +name +"!"}
              {name.includes("null") && "Welcome!"}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
