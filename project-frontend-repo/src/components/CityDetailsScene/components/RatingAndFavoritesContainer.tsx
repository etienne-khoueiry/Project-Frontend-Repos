import { Avatar, Box, Grid, IconButton, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import { RatingAvatarColor } from "../../../Common/Utilities/RatingAvatarColor";

export interface IProps {
    generalRating: number;
}

export default function RatingAndFavoritesContainer(props: IProps) {
  const avatarRatingColor = RatingAvatarColor(props.generalRating);

  return (
    <Box sx={{ margin: "10px" }}>
      <Grid
        container
        direction="row"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <Avatar sx={{ bgcolor: avatarRatingColor }} variant="square">
            {props.generalRating}
          </Avatar>
        </Grid>

        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <IconButton aria-label="add to favorites">
            <Tooltip title="Add To Favorites">
              <FavoriteIcon sx={{ color: "red", fontSize: 40 }} />
            </Tooltip>
          </IconButton>
        </Grid>

      </Grid>
    </Box>
  );
}
