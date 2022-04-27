import React from "react";
import { Grid, Stack } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import City from "../../../Models/City";
import CityPost from "./CityPost";
import CityPostSkeleton from "./Skeletons/CityPostSkeleton";

type Props = {};

const cities: City[] = [
  { CityName: "city1", CountryName: "country1", ReviewNumber: 10, Rating: 1 },
  { CityName: "city2", CountryName: "country2", ReviewNumber: 10, Rating: 2.4 },
  { CityName: "city3", CountryName: "country3", ReviewNumber: 10, Rating: 5 },
  { CityName: "city4", CountryName: "country4", ReviewNumber: 10, Rating: 7 },
  { CityName: "city5", CountryName: "country5", ReviewNumber: 20, Rating: 9 },
];

const useStyles = makeStyles(
  createStyles({
    citiesStack: {
      padding: "10px",
    },
  })
);

export default function Cities({}: Props) {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="flex-start"
      alignItems={"flex-start"}
      className={classes.citiesStack}
    >
      {cities.map((city, index) => (
        <Grid item xs={12} sm={4} lg={3} xl={3} key={index}>
          <CityPost City={city} key={index} />
        </Grid>
      ))}
      {/* <Grid item xs={12} sm={4} lg={3} xl={3}>
        <CityPostSkeleton />
      </Grid>
      <Grid item xs={12} sm={4} lg={3} xl={3}>
            <CityPost City={cities[0]} />
          </Grid> */}
    </Grid>
  );
}
