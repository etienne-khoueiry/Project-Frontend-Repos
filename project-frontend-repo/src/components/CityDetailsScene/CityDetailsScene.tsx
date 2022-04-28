import AddCommentRoundedIcon from "@mui/icons-material/AddCommentRounded";
import {
  Avatar,
  Backdrop,
  Box,
  CircularProgress,
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
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { RatingAvatarColor } from "../../Common/Utilities/RatingAvatarColor";
import CityDTO from "../../Models/CityDTO";
import { Review } from "../../Models/Review";
import { GetCityById } from "../../Services/CitiesApiCalls";
import { GetReviewsByCityId } from "../../Services/ReviewApiCalls";
import ImageContainer from "./components/ImageContainer";
import NamingContainer from "./components/NamingContainer";
import NewReview from "./components/NewReview";
import RatingAndFavoritesContainer from "./components/RatingAndFavoritesContainer";
import RatingList from "./components/RatingList";
import ReviewCard from "./components/ReviewCard";

export interface IProps {
  review: Review;
  index: number;
}

export function ReviewCardWithGrid(props: IProps) {
  const { review, index } = props;
  return (
    <>
      <Grid item lg={2} md={1} xs={1} sm={1}></Grid>
      <Grid item lg={8} md={10} xs={10} sm={10}>
        <ReviewCard review={review} key={index} />
      </Grid>
      <Grid item lg={2} md={1} xs={1} sm={1}></Grid>
    </>
  );
}

export default function CityDetailsScene() {
  const { id } = useParams();

  const [city, setCity] = useState<any>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    var res: any = "";
    const getCityById = async (id: number) => {
      GetCityById(id)
        .then(async function (response: any) {
          res = await response.data;
          setCity(res);
          setIsLoading(false);
        })
        .catch(function (error) {
          res = error;
          setIsLoading(false);
        });
    };

    const getReviewByCityId = async (id: number) => {
      GetReviewsByCityId(id)
        .then(async function (response: any) {
          res = await response.data;
          setReviews(res);
          setIsLoading(false);
        })
        .catch(function (error) {
          res = error;
          setIsLoading(false);
        });
    };

    getCityById(Number(id));
    getReviewByCityId(Number(id));
  }, [id]);

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
  if (isLoading) {
    return (
      <Backdrop sx={{ color: "#fff", zIndex: 10000 }} open={isLoading}>
        <CircularProgress color="secondary" />
      </Backdrop>
    );
  } else {
    return (
      <Box>
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
            <ImageContainer imageUrl={city?.city.cityImage} />
          </Grid>
          <Grid item lg={7} md={7} xs={12} sm={7}>
            <Grid
              container
              direction="row"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Grid item xs={8} sm={8} md={8} lg={9} xl={9}>
                <NamingContainer
                  cityName={city.city.cityName}
                  countryName={city.country.countryName}
                  countryCode={city.country.countryCode}
                />
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={3} xl={3}>
                <RatingAndFavoritesContainer
                  generalRating={city?.city.generalRating}
                />
              </Grid>
            </Grid>
            <RatingList city={city?.city} />
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
          {/* {reviews.map((review, index) => {
            <ReviewCardWithGrid review={review} index={index} />;
          })} */}
        </Grid>
      </Box>
    );
  }
}
