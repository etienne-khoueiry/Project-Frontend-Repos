import React from "react";
import { Box } from "@mui/material";

export interface IProps{
    imageUrl: string;
}

export default function ImageContainer(props: IProps) {
  return (
    <Box sx={{ margin: "10px" }}>
      <img
        src={
          props.imageUrl
        }
        style={{ height: "50vh", width: "95%", marginLeft: "10px" }}
      />
    </Box>
  );
}
