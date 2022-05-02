import React from "react";
import { Typography } from "@mui/material";

type Props = {};

export default function Title ({}: Props) {
  return (
    <div>
      <Typography variant="h3" gutterBottom component="div" sx={{fontWeight: "bold"}}>
        New City
      </Typography>
    </div>
  );
}
