import React, { useEffect, useState } from "react";
import { Grid, Stack } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import City from "../../../Models/City";
import CityPost from "./CityPost";
import CityPostSkeleton from "./Skeletons/CityPostSkeleton";
import { GetCities } from "../../../Services/CitiesApiCalls";
import CityDTO from "../../../Models/CityDTO";

type Props = {};

// const cities: City[] = [
//   { CityName: "city1", CountryName: "country1", ReviewNumber: 10, Rating: 1 },
//   { CityName: "city2", CountryName: "country2", ReviewNumber: 10, Rating: 2.4 },
//   { CityName: "city3", CountryName: "country3", ReviewNumber: 10, Rating: 5 },
//   { CityName: "city4", CountryName: "country4", ReviewNumber: 10, Rating: 7 },
//   { CityName: "city5", CountryName: "country5", ReviewNumber: 20, Rating: 9 },
// ];

const Skeletons = ['', '', '', '', '', '', '', ''];

const useStyles = makeStyles(
  createStyles({
    citiesStack: {
      padding: "10px",
    },
  })
);

export default function Cities({}: Props) {
  const classes = useStyles();

  const [cities, setCities] = useState<CityDTO[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    var res: any = '';
    const getCities = async () => {
      GetCities()
        .then(async function (response) {
          res = await response.data;
          // console.log(res);
          setCities(res);
          // console.log(cities);
          setIsLoading(false);
        })
        .catch(function (error) {
          res = error;
        });
    };
    getCities();
  }, []);

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="flex-start"
      alignItems={"flex-start"}
      className={classes.citiesStack}
    >
      {!isLoading && cities.map((city, index) => (
        <Grid item xs={12} sm={4} lg={3} xl={3} key={index}>
          <CityPost City={city} key={index} />
        </Grid>
      ))}
      {isLoading && Skeletons.map((s, index) => (
        <Grid item xs={12} sm={4} lg={3} xl={3} key={index}>
          <CityPostSkeleton />
        </Grid>
      ))}
    </Grid>
  );
}
