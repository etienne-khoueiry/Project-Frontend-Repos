import { Box } from "@mui/material";
import React from "react";

type Props = {};

export default function ImageContainer({}: Props) {
  return (
    <Box sx={{ margin: "10px" }}>
      <img
        src={
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        }
        style={{ height: "50vh", width: "95%", marginLeft: "10px" }}
      />
    </Box>
  );
}
