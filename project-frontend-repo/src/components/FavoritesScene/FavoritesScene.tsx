import { Typography } from "@mui/material";
import React from "react";
import Cities from "../HomePageScene/components/Cities";
import Title from "../HomePageScene/components/Title";

type Props = {};

export default function FavoritesScene({}: Props) {
  return (
    <div style={{ textAlign: "center"}}>
      <Typography variant="h4" component={"div"} sx={{fontWeight: "bold"}}>Favorites</Typography>
      <Cities />
    </div>
  );
}
