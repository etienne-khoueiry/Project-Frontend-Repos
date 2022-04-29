import React, { useEffect, useState } from "react";
import { Grid, Stack } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import City from "../../../Models/City";
import CityPost from "./CityPost";
import CityPostSkeleton from "./Skeletons/CityPostSkeleton";
import { GetCities } from "../../../Services/CitiesApiCalls";
import CityDTO from "../../../Models/CityDTO";

type Props = {};


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
          res = await response.data;;
          setCities(res);
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
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
          <CityPost City={city} key={index} />
        </Grid>
      ))}
      {isLoading && Skeletons.map((s, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
          <CityPostSkeleton />
        </Grid>
      ))}
    </Grid>
  );
}
