import { useNavigate } from "react-router";
import { Context } from "../../../Contexts/Context";
import { Fab, Grid, Typography } from "@mui/material";
import React, { useCallback, useContext } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const useStyles = makeStyles(
  createStyles({
    spacingTitle: {
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    button: {
      "&:hover": {
        backgroundColor: "rgb(249, 211, 66)",
      },
    },
  })
);

export default function Title() {
  const classes = useStyles();

  const navigate = useNavigate();

  const { setOpenDialog } = useContext(Context);

  const handleNewCity = useCallback(() => {
    if (localStorage.getItem("UserSID")) {
      navigate("/NewCity");
    } else {
      setOpenDialog(true);
    }
  }, []);

  return (
    <div className={classes.spacingTitle}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            textAlign={"center"}
            sx={{ display: "inline-block" }}
          >
            Some cities
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Fab
            variant="extended"
            sx={{
              backgroundColor: "secondary.main",
              "&:hover": { backgroundColor: "rgb(249 211 66 / 60%)" },
            }}
            className={classes.button}
            onClick={handleNewCity}
          >
            <AddCircleRoundedIcon sx={{ mr: 1 }} />
            Add New City
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
}
