import { Typography } from "@mui/material";
import React from "react";

type Props = {};

export default function ({}: Props) {
  return (
    <div>
      <Typography variant="h3" gutterBottom component="div" sx={{fontWeight: "bold"}}>
        New City
      </Typography>
    </div>
  );
}
