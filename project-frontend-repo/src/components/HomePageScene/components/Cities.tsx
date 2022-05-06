import CityPost from "./CityPost";
import { useParams } from "react-router";
import { Context } from "../../../Contexts/Context";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import CityPostSkeleton from "./Skeletons/CityPostSkeleton";
import React, { useContext, useEffect, useState } from "react";
import { GetFavoritesByUserId } from "../../../Services/FavoritesApiCall";
import { GetCities, GetCitiesByName } from "../../../Services/CitiesApiCalls";


const Skeletons = ["", "", "", "", "", "", "", ""];

const useStyles = makeStyles(
  createStyles({
    citiesStack: {
      padding: "10px",
    },
  })
);

export function NoResultsFound() {
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          height:"50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="div">
          No Results Found!
        </Typography>
      </Box>
    </Grid>
  );
}

export default function Cities() {
  const classes = useStyles();

  const { id, search } = useParams();

  const { cities, setCities } = useContext(Context);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    var res: any = "";
    const getCities = async () => {
      if (!id && !search) {
        var result = await GetCities(1);
        if(result){
          setCities(result);
          setIsLoading(false);
        }
      } else if(id) {
        GetFavoritesByUserId(Number(id))
          .then(async function (response) {
            res = await response.data;
            setCities(res);
            setIsLoading(false);
          })
          .catch(function (error) {
            res = error;
          });
      }else{
        var cities = await GetCitiesByName(search, 1);
        if(cities){
          setCities(cities);
        }
        setIsLoading(false);
      }
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
      {!isLoading && cities.length == 0 && <NoResultsFound />}
      {!isLoading &&
        cities.map((city: any, index: any) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
            <CityPost City={city} key={index} />
          </Grid>
        ))}
      {isLoading &&
        Skeletons.map((s, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
            <CityPostSkeleton />
          </Grid>
        ))}
    </Grid>
  );
}
