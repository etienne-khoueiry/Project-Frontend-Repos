import React from "react";
import { useParams } from "react-router";
import { Typography } from "@mui/material";
import Cities from "../HomePageScene/components/Cities";

export default function SearchResultScene() {
  const { search } = useParams();

  return (
    <div style={{ marginTop: "70px" }}>
      <Typography
        variant="h4"
        component="div"
        sx={{ fontWeight: "bold", textAlign: "center" }}
      >
        Results for {search}
      </Typography>
      <Cities />
    </div>
  );
}
