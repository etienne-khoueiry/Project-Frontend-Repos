import AddCommentRoundedIcon from "@mui/icons-material/AddCommentRounded";
import {
  Avatar,
  Box,
  Fab,
  Fade,
  Grid,
  IconButton,
  Rating,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import React, { useCallback, useState } from "react";
import { RatingAvatarColor } from "../../Common/Utilities/RatingAvatarColor";
import ImageContainer from "./components/ImageContainer";
import NamingContainer from "./components/NamingContainer";
import NewReview from "./components/NewReview";
import RatingAndFavoritesContainer from "./components/RatingAndFavoritesContainer";
import RatingList from "./components/RatingList";
import ReviewCard from "./components/ReviewCard";

type Props = {};

export default function CityDetailsScene({}: Props) {

  const [addNewReview, setAddNewReview] = useState<boolean>(false);

  const newReview = (
    <>
      <Grid item lg={2} md={1} xs={1} sm={1}></Grid>
      <Grid item lg={8} md={10} xs={10} sm={10}>
        <NewReview />
      </Grid>
      <Grid item lg={2} md={1} xs={1} sm={1}></Grid>
    </>
  );

  const handleNewReview = useCallback(() => {
    setAddNewReview(true);
  }, []);

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="flex-start"
      alignItems={"flex-start"}
      sx={{ marginTop: "50px", marginBottom: "50px" }}
    >
      <Grid
        item
        lg={5}
        md={5}
        xs={12}
        sm={5}
        justifyContent="center"
        alignItems="center"
      >
        <ImageContainer />
      </Grid>
      <Grid item lg={7} md={7} xs={12} sm={7}>
        <Grid
          container
          direction="row"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item xs={8} sm={8} md={8} lg={9} xl={9}>
            <NamingContainer />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={3} xl={3}>
            <RatingAndFavoritesContainer />
          </Grid>
        </Grid>
        <RatingList />
      </Grid>

      <Grid item lg={2} md={1} xs={1} sm={1}></Grid>
      <Grid item lg={8} md={10} xs={10} sm={10}>
        <Fab
          variant="extended"
          sx={{ backgroundColor: "secondary.main" }}
          onClick={handleNewReview}
        >
          <AddCommentRoundedIcon sx={{ mr: 1 }} />
          Add New Review
        </Fab>
      </Grid>
      <Grid item lg={2} md={1} xs={1} sm={1}></Grid>

      {addNewReview && newReview}

      <Grid item lg={2} md={1} xs={1} sm={1}></Grid>
      <Grid item lg={8} md={10} xs={10} sm={10}>
        <ReviewCard />
      </Grid>
      <Grid item lg={2} md={1} xs={1} sm={1}></Grid>

      <Grid item lg={2} md={1} xs={1} sm={1}></Grid>
      <Grid item lg={8} md={10} xs={10} sm={10}>
        <ReviewCard />
      </Grid>
      <Grid item lg={2} md={1} xs={1} sm={1}></Grid>

      <Grid item lg={2} md={1} xs={1} sm={1}></Grid>
      <Grid item lg={8} md={10} xs={10} sm={10}>
        <ReviewCard />
      </Grid>
      <Grid item lg={2} md={1} xs={1} sm={1}></Grid>
      
    </Grid>
  );
}
