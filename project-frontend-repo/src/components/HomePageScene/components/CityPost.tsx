import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router";
import React, { useCallback } from "react";
import CityDTO from "../../../Models/CityDTO";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ReactCountryFlag from "react-country-flag";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Badge, Box, Button, Stack, Tooltip } from "@mui/material";
import ReviewsRoundedIcon from "@mui/icons-material/ReviewsRounded";
import { RatingAvatarColor } from "../../../Common/Utilities/RatingAvatarColor";

export interface IProps {
  City: CityDTO;
}

export default function CityPost(props: IProps) {
  const navigate = useNavigate();
  const { City } = props;

  const avatarGeneralRatingColor: string = RatingAvatarColor(
    City.city.generalRating
  );

  const handleCityDetails = useCallback(() => {
    navigate(`/City/${City.city.citySID}`);
  }, []);

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
      <CardActions sx={{ justifyContent: "space-between" }}>
        <IconButton aria-label="share">
          <Tooltip title="Reviews">
            <Badge color="secondary" badgeContent={City.city.reviewNumber}>
              <ReviewsRoundedIcon />
            </Badge>
          </Tooltip>
        </IconButton>
        <Box
          display={"flex"}
          justifyContent={"flex-end"}
          alignContent={"flex-end"}
        >
          <Button
            sx={{
              backgroundColor: "secondary.main",
              "&:hover": { backgroundColor: "rgb(249 211 66 / 60%)" },
            }}
            onClick={handleCityDetails}
          >
            More Details
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
