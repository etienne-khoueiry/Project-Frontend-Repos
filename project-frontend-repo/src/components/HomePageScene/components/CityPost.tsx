import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReviewsRoundedIcon from "@mui/icons-material/ReviewsRounded";
import { Badge, Box, Button, Link, Stack, Tooltip } from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import City from "../../../Models/City";
import {
  RatingAvatarColor,
  RatingBetween0And2,
  RatingBetween2And4,
  RatingBetween4And6,
  RatingBetween6And9,
  RatingBetween9And10,
} from "../../../Common/Utilities/RatingAvatarColor";
import { makeStyles, createStyles } from "@mui/styles";
import { useNavigate } from "react-router";
import CityDTO from "../../../Models/CityDTO";

export interface IProps {
  City: CityDTO;
}

// const useStyles = makeStyles(() =>
//   createStyles({
//     searchbar: {
//       backgroundColor: "black",
//       color: "white",
//     },
//   })
// );

const useStyles = makeStyles(
  createStyles({
    searchbar: {
      backgroundColor: "black",
      color: "white",
    },
  })
);

// const useStyles = makeStyles({
//   buttonDetails: {},
// });

export default function CityPost(props: IProps) {
  const classes = useStyles();

  const navigate = useNavigate();

  const { City } = props;

  const avatarGeneralRatingColor: string = RatingAvatarColor(
    City.city.generalRating
  );

  const handleCityDetails = () => {
    navigate(`/City/${City.city.citySID}`);
  };

  return (
    <Card>
      <CardHeader
        title={City.city.cityName}
        subheader={City.country.countryName}
        avatar={<ReactCountryFlag countryCode={City.country.countryCode} svg />}
      />
      <CardMedia
        component="img"
        height="194"
        image={City.city.cityImage}
        alt="Paella dish"
      />
      <CardContent>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Typography variant="h5" gutterBottom component="div">
            Rating :
          </Typography>
          <Avatar sx={{ bgcolor: avatarGeneralRatingColor }} variant="square">
            {City.city.generalRating}
          </Avatar>
        </Stack>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <Tooltip title="Add To Favorites">
            <FavoriteIcon sx={{ color: "red" }} />
          </Tooltip>
        </IconButton>
        <IconButton aria-label="share">
          <Tooltip title="Reviews">
            <Badge color="secondary" badgeContent={City.city.reviewNumber}>
              <ReviewsRoundedIcon />
            </Badge>
          </Tooltip>
        </IconButton>
        <Box
          justifyContent={"flex-end"}
          alignContent={"right"}
          textAlign={"end"}
        >
          <Button
            // sx={{ backgroundColor: "secondary.main" }}
            onClick={handleCityDetails}
            className={classes.searchbar}
          >
            More Details
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
