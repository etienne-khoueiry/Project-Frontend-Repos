import { Backdrop, CircularProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router";
import Cities from "../HomePageScene/components/Cities";

type Props = {};

export default function SearchResultScene({}: Props) {
  const { search } = useParams();

  return (
    <div style={{marginTop:"70px"}}>
      <Typography variant="h4" component="div" sx={{ fontWeight: "bold", textAlign: "center"}}>
        Results for {search}
      </Typography>
      <Cities />
    </div>
  );
}
