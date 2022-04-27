import { Box, Typography } from "@mui/material";
import React from "react";
import ReactCountryFlag from "react-country-flag";

type Props = {};

export default function NamingContainer({}: Props) {
  return (
    <Box sx={{ margin: "10px", marginLeft: "20px" }}>
      <Box>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          CityName
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom component="div">
          CountryName &nbsp;
          <ReactCountryFlag countryCode="LB" svg />
        </Typography>
      </Box>
    </Box>
  );
}
