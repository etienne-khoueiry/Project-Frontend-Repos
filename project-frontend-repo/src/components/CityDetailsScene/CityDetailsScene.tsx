import AddCommentRoundedIcon from "@mui/icons-material/AddCommentRounded";
import {
  Backdrop,
  Box,
  CircularProgress,
  Fab,
  Grid,
} from "@mui/material";
import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { useParams } from "react-router";
import NewReview from "./components/NewReview";
import { Context } from "../../Contexts/Context";
import RatingList from "./components/RatingList";
import ReviewCard from "./components/ReviewCard";
import { ReviewDTO } from "../../Models/ReviewDTO";
import ImageContainer from "./components/ImageContainer";
import NamingContainer from "./components/NamingContainer";
import { GetCityById } from "../../Services/CitiesApiCalls";
import { GetReviewsByCityId } from "../../Services/ReviewApiCalls";
import PaginationComponent from "../HomePageScene/components/PaginationComponent";
import RatingAndFavoritesContainer from "./components/RatingAndFavoritesContainer";

export interface IProps {
  review: ReviewDTO;
}


export default function CityDetailsScene() {

  const { id } = useParams();

  const { setOpenDialog, reviews, user } = useContext(Context);

  const [city, setCity] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [addNewReview, setAddNewReview] = useState<boolean>(false);

  useLayoutEffect(() => {

    var userId = Number(user.current.usersSID) ?? 0;

    const getCityById = async (id: number) => {
      var cityResult = await GetCityById(id, userId);
      var reviewsResult = await GetReviewsByCityId(id, 1);
      if (cityResult && reviewsResult) {
        setCity(cityResult);
        reviews.current = reviewsResult;
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };
    
    getCityById(Number(id));

  }, []);

  const NewReviewHandler = useCallback(
    async (newReview: any) => {
    var userId = Number(user.current.usersSID) ?? 0;
      setIsLoading(true);
      var cityResult = await GetCityById(Number(id), userId);
      var reviewsResult = await GetReviewsByCityId(Number(id), 1);
      if (cityResult && reviewsResult) {
        setCity(cityResult);
        reviews.current = reviewsResult;
      } 
      // reviews.current = [ newReview, ...reviews.current];

      setAddNewReview(false);
      setIsLoading(false);
    },
    [reviews.current, user.current.usersSID, id]
  );

  const newReview = (
    <Grid container style={{ margin: 5 }}>
      <Grid item lg={2} md={1} xs={1} sm={1}></Grid>
      <Grid item lg={8} md={10} xs={10} sm={10}>
        <NewReview CitySID={Number(id)} NewReviewHandler={NewReviewHandler} />
      </Grid>
      <Grid item lg={2} md={1} xs={1} sm={1}></Grid>
    </Grid>
  );

  const handleNewReview = useCallback(() => {
    if (!user.current.usersSID) {
      setOpenDialog(true);
    } else {
      setAddNewReview(true);
    }
  }, [user.current.usersSID]);

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
                  isFavorites={city.isFavorites}
                />
              </Grid>
            </Grid>
            <RatingList city={city?.city} />
          </Grid>

          <Grid item lg={2} md={1} xs={1} sm={1}></Grid>
          <Grid item lg={8} md={10} xs={10} sm={10}>
            <Fab
              variant="extended"
              sx={{
                backgroundColor: "secondary.main",
                "&:hover": { backgroundColor: "rgb(249 211 66 / 60%)" },
              }}
              onClick={handleNewReview}
            >
              <AddCommentRoundedIcon sx={{ mr: 1 }} />
              Add New Review
            </Fab>
          </Grid>
          <Grid item lg={2} md={1} xs={1} sm={1}></Grid>

          {addNewReview && newReview}

          {reviews.current.map((review: ReviewDTO, index: number) => {
            return (
              <Grid key={index} container style={{ margin: 5 }}>
                <Grid item lg={2} md={1} xs={1} sm={1}></Grid>
                <Grid item lg={8} md={10} xs={10} sm={10}>
                  <ReviewCard review={review} />
                </Grid>
                <Grid item lg={2} md={1} xs={1} sm={1}></Grid>
              </Grid>
            );
          })}
          <PaginationComponent />
        </Grid>
      </Box>
    );
  }
}
