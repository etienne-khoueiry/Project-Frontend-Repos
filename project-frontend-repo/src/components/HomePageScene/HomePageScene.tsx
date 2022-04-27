import { Box, Stack } from "@mui/material";
import React from "react";
import Cities from "./components/Cities";
import CityPost from "./components/CityPost";
import Title from "./components/Title";
import WelcomeMessage from "./components/WelcomeMessage";

type Props = {};
const cities = [
    {cityName: "city1",
    countryName: "country1",
    reviewNumber: 10,
    rating: 4
    }
]
export default function HomePageScene({}: Props) {
  return (
    <Box sx={{ m: 1 }}>
      <WelcomeMessage />
      <Title />
      <Cities />
    </Box>
  );
}
