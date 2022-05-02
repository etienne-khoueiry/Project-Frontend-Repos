import React from "react";
import { Box, Typography } from "@mui/material";
import ReactCountryFlag from "react-country-flag";

export interface IProps {
  cityName: string;
  countryName: string;
  countryCode: string;
}

export default function NamingContainer(props: IProps) {
  return (
    <Box sx={{ margin: "10px", marginLeft: "20px" }}>
      <Box>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          {props.cityName}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom component="div">
          {props.countryName} &nbsp;
          <ReactCountryFlag countryCode={props.countryCode} svg />
        </Typography>
      </Box>
    </Box>
  );
}
