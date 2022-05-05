import React from "react";
import { Typography } from "@mui/material";

export default function Title () {
  return (
    <div>
      <Typography variant="h3" gutterBottom component="div" sx={{fontWeight: "bold"}}>
        New City
      </Typography>
    </div>
  );
}
