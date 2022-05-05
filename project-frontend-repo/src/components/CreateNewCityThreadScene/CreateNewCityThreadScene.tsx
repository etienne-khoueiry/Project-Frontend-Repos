import React from "react";
import { Grid } from "@mui/material";
import Title from "./components/Title";
import CityForm from "./components/CityForm";


export default function CreateNewCityThreadScene() {

  return (
    <div style={{ marginTop: "100px" }}>
      <Grid container spacing={2} justifyContent="center" textAlign={"center"}>
        <Grid item xs={1} sm={1} md={3} lg={4} xl={4}></Grid>
        <Grid item xs={10} sm={10} md={6} lg={4} xl={4}>
          <Title />
        </Grid>
        <Grid item xs={1} sm={1} md={3} lg={4} xl={4}></Grid>
        <Grid item xs={1} sm={1} md={2} lg={3} xl={3}></Grid>
        <Grid item xs={10} sm={10} md={8} lg={6} xl={6}>
          <CityForm />
        </Grid>
        <Grid item xs={1} sm={1} md={2} lg={3} xl={3}></Grid>
      </Grid>
    </div>
  );

}
