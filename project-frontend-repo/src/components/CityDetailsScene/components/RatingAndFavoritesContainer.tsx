import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useParams } from "react-router";
import {
  AddToFavorites,
  DeleteFromFavorites,
} from "../../../Services/FavoritesApiCall";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Context } from "../../../Contexts/Context";
import { Avatar, Box, Grid, IconButton, Tooltip } from "@mui/material";
import { RatingAvatarColor } from "../../../Common/Utilities/RatingAvatarColor";

export interface IProps {
  generalRating: number;
  isFavorites: boolean;
}

export default function RatingAndFavoritesContainer(props: IProps) {
  const { id } = useParams();

  const { setOpenDialog, user } = useContext(Context);

  const avatarRatingColor = RatingAvatarColor(props.generalRating);
  const [addToFavorites, setAddToFavorites] = useState<boolean>(
    props.isFavorites
  );
  const ref = useRef(props.isFavorites);

  const handleFavorites = useCallback(() => {
    if (user.current.usersSID) {
      setAddToFavorites(prevAddToFavorites => !prevAddToFavorites);
      ref.current = !ref.current;
    } else {
      setOpenDialog(true);
    }
  }, [addToFavorites]);

  useEffect(() => {
    setTimeout( () => {
      if (ref.current !== props.isFavorites && user.current.usersSID) {
        if (ref.current) {
          AddToFavorites(Number(id), Number(user.current.usersSID));
        } else {
          DeleteFromFavorites(
            Number(id),
            Number(user.current.usersSID)
          );
        }
      }
    }, 1000);
  }, [ref.current, user.current.usersSID, id]);

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
              <FavoriteIcon
                sx={{
                  color: `${addToFavorites ? "red" : "text.secondary"}`,
                  fontSize: 40,
                }}
                onClick={handleFavorites}
              />
            </Tooltip>
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
