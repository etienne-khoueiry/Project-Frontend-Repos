import AddCommentRoundedIcon from "@mui/icons-material/AddCommentRounded";
import { Backdrop, Box, CircularProgress, Fab, Grid } from "@mui/material";
import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useParams } from "react-router";
import { Context } from "../../Contexts/Context";
import { ReviewDTO } from "../../Models/ReviewDTO";
import { GetCityById } from "../../Services/CitiesApiCalls";
import ImageContainer from "./components/ImageContainer";
import NamingContainer from "./components/NamingContainer";
import NewReview from "./components/NewReview";
import RatingAndFavoritesContainer from "./components/RatingAndFavoritesContainer";
import RatingList from "./components/RatingList";
import ReviewCard from "./components/ReviewCard";

export interface IProps {
  review: ReviewDTO;
}

export default function CityDetailsScene() {
  const { id } = useParams();

  const reviews = useRef<any[]>([]);

  const { setOpenDialog } = useContext(Context);

  const [city, setCity] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [addNewReview, setAddNewReview] = useState<boolean>(false);

  useLayoutEffect(() => {
    var res: any = "";
    var userId = Number(localStorage.getItem("UserSID")) ?? 0;
    const getCityById = async (id: number) => {
      GetCityById(id, userId)
        .then(async function (response: any) {
          res = await response.data;
          setCity(res);
          reviews.current = res.reviews;
          setIsLoading(false);
        })
        .catch(function (error) {
          res = error;
        });
    };

    getCityById(Number(id));
  }, []);

  const NewReviewHandler = useCallback(
    (newReview: any) => {
      setIsLoading(true);
      reviews.current = [...reviews.current, newReview];
      setAddNewReview(false);
      setIsLoading(false);
    },
    [reviews.current]
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
    if (!localStorage.getItem("UserSID")) {
      setOpenDialog(true);
    } else {
      setAddNewReview(true);
    }
  }, [localStorage.getItem("UserSID")]);

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
        </Grid>
      </Box>
    );
  }
}
