import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { deepOrange, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReviewsRoundedIcon from "@mui/icons-material/ReviewsRounded";
import { Badge, Box, Button, Link, Stack, Tooltip } from "@mui/material";
import Flags from "country-flag-icons/react/3x2";
import ReactCountryFlag from "react-country-flag";
import City from "../../../Models/City";
import {
  RatingBetween0And2,
  RatingBetween2And4,
  RatingBetween4And6,
  RatingBetween6And9,
  RatingBetween9And10,
} from "../../../Common/Utilities/RatingAvatarColor";
import { makeStyles, createStyles } from "@mui/styles";
import { useNavigate } from "react-router";

export interface IProps {
  City: City;
}

// const useStyles = makeStyles(
//   createStyles({
//     buttonDetails: {
//       backgroundColor: "red",
//     },
//   })
// );

const RatingAvatarColor = (rating: number): string => {
  switch (rating != null) {
    case rating < 2:
      return RatingBetween0And2;
    case rating >= 2 && rating < 4:
      return RatingBetween2And4;
    case rating >= 4 && rating < 6:
      return RatingBetween4And6;
    case rating >= 6 && rating < 9:
      return RatingBetween6And9;
    case rating >= 9 && rating <= 10:
      return RatingBetween9And10;
    default:
      return "white";
  }
};

export default function CityPost(props: IProps) {
  // const classes = useStyles();

  const navigate = useNavigate();

  const { City } = props;

  const avatarRatingColor: string = RatingAvatarColor(City.Rating);

  const handleCityDetails = () => {
    navigate('/City/1');
  }

  

  return (
    <Card>
      <CardHeader
        title={City.CityName}
        subheader={City.CountryName}
        avatar={<ReactCountryFlag countryCode="LB" svg />}
      />
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
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
          <Avatar sx={{ bgcolor: avatarRatingColor }} variant="square">
            {City.Rating}
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
            <Badge color="secondary" badgeContent={City.ReviewNumber}>
              <ReviewsRoundedIcon />
            </Badge>
          </Tooltip>
        </IconButton>
        <Box justifyContent={"flex-end"} alignContent={"right"} textAlign={"end"}>
          <Button sx={{ backgroundColor: "secondary.main" }} onClick={handleCityDetails}>
            More Details
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
