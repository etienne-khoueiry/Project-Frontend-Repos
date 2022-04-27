import { Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React from "react";

type Props = {};

const useStyles = makeStyles(
  createStyles({
    spacingTitle: {
      padding: "20px",
    },
  })
);

export default function Title({}: Props) {
  const classes = useStyles();

  return (
    <div className={classes.spacingTitle}>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        textAlign={"center"}
      >
        Some cities
      </Typography>
    </div>
  );
}
