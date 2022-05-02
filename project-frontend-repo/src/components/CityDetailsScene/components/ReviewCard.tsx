import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ThumbDownRoundedIcon from "@mui/icons-material/ThumbDownRounded";
import { Badge, Box, Grid, Tooltip } from "@mui/material";
import LandscapeRoundedIcon from "@mui/icons-material/LandscapeRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import EmojiTransportationRoundedIcon from "@mui/icons-material/EmojiTransportationRounded";
import { RatingAvatarColor } from "../../../Common/Utilities/RatingAvatarColor";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import { ReviewDTO } from "../../../Models/ReviewDTO";

export interface IProps {
  review: ReviewDTO;
}

export const RatingList = (props: IProps) => {
  const { review } = props;
  const ratings = review.rating;
  const avatarRatingColor = RatingAvatarColor(review.rating.generalRating);
  const avatarRatingEnvironmentColor = RatingAvatarColor(
    ratings.ratingEnvironment
  );
  const avatarRatingHealthColor = RatingAvatarColor(ratings.ratingHealth);
  const avatarRatingSecurityColor = RatingAvatarColor(ratings.ratingSecurity);
  const avatarRatingTransportationColor = RatingAvatarColor(
    ratings.ratingTransportation
  );

  return (
    <Grid
      container
      direction="row"
      alignItems={"center"}
      justifyContent={"flex-start"}
      sx={{ marginBottom: "10px" }}
      spacing={2}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: "5px",
          }}
        >
          <GradeRoundedIcon />
          &nbsp; General Rating &nbsp;
          <Avatar sx={{ bgcolor: avatarRatingColor }} variant="square">
            {review.rating.generalRating.toFixed(1)}
          </Avatar>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: "5px",
          }}
        >
          <HealthAndSafetyRoundedIcon />
          &nbsp; Health &nbsp;
          <Avatar sx={{ bgcolor: avatarRatingHealthColor }} variant="square">
            {ratings.ratingHealth.toFixed(1)}
          </Avatar>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: "5px",
          }}
        >
          <LandscapeRoundedIcon />
          &nbsp; Environment &nbsp;
          <Avatar
            sx={{ bgcolor: avatarRatingEnvironmentColor }}
            variant="square"
          >
            {ratings.ratingEnvironment.toFixed(1)}
          </Avatar>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: "5px",
          }}
        >
          <SecurityRoundedIcon />
          &nbsp; Security &nbsp;
          <Avatar sx={{ bgcolor: avatarRatingSecurityColor }} variant="square">
            {ratings.ratingSecurity.toFixed(1)}
          </Avatar>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: "5px",
          }}
        >
          <EmojiTransportationRoundedIcon />
          &nbsp; Transportation &nbsp;
          <Avatar
            sx={{ bgcolor: avatarRatingTransportationColor }}
            variant="square"
          >
            {ratings.ratingTransportation.toFixed(1)}
          </Avatar>
        </Box>
      </Grid>
    </Grid>
  );
};

export default function ReviewCard(props: IProps) {
  const { review } = props;
  const user = review.user;

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {user.userFirstName.substring(0, 1)}
            {user.userLastName.substring(0, 1)}
          </Avatar>
        }
        title={`${user.userFirstName} ${user.userLastName}`}
        subheader={review.review.reviewDate}
      />
      <CardContent>
        <RatingList review={review} />
        <Typography variant="body2" color="text">
          {review.review.reviewDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Tooltip title="4 Likes">
            <Badge badgeContent={review.review.reviewLikes} color="secondary">
              <ThumbUpRoundedIcon />
            </Badge>
          </Tooltip>
        </IconButton>
        <IconButton aria-label="share">
          <Tooltip title="4 Dislikes">
            <Badge
              badgeContent={review.review.reviewDislikes}
              color="secondary"
            >
              <ThumbDownRoundedIcon />
            </Badge>
          </Tooltip>
        </IconButton>
      </CardActions>
    </Card>
  );
}
