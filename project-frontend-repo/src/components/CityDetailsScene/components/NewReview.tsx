import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router";
import { red } from "@mui/material/colors";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Context } from "../../../Contexts/Context";
import CreateRatingDTO from "../../../Models/CreateRating";
import CreateReviewDTO from "../../../Models/CreateReviewDTO";
import { CreateRating } from "../../../Services/RatingApiCalls";
import { CreateReview } from "../../../Services/ReviewApiCalls";
import validNumber from "../../../Common/Utilities/ValidRating";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import LandscapeRoundedIcon from "@mui/icons-material/LandscapeRounded";
import React, { useCallback, useContext, useReducer, useState } from "react";
import { Alert, Box, Button, Divider, Grid, TextField } from "@mui/material";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import EmojiTransportationRoundedIcon from "@mui/icons-material/EmojiTransportationRounded";

export interface IProps {
  CitySID: number;
  NewReviewHandler(newReview: any): any;
}

export default function NewReview(props: IProps) {
  const { CitySID, NewReviewHandler } = props;

  const navigate = useNavigate();

  const [isValid, setIsValid] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<any>("");

  const { user } = useContext(Context);

  const initialValues = {
    HealthRating: "",
    EnvironmentRating: "",
    SecurityRating: "",
    TransportationRating: "",
    ReviewDescription: "",
  };

  const [formValues, dispatchFormValues] = useReducer(
    (curVal: any, newVal: any) => ({ ...curVal, ...newVal }),
    initialValues
  );

  const {
    HealthRating,
    EnvironmentRating,
    SecurityRating,
    TransportationRating,
    ReviewDescription,
  } = formValues;

  const reducerInputChange = useCallback((event: any) => {
    const { name, value } = event.target;
    dispatchFormValues({ [name]: value });
  }, []);

  const handleSubmit = useCallback(
    async (event: any) => {
      event.preventDefault();
      if (
        HealthRating === "" ||
        EnvironmentRating === "" ||
        SecurityRating === "" ||
        TransportationRating === "" ||
        ReviewDescription === ""
      ) {
        setIsValid(false);
        setErrorMessage("All fields are required!");
      } else if (
        !validNumber(Number(HealthRating)) ||
        !validNumber(Number(EnvironmentRating)) ||
        !validNumber(Number(SecurityRating)) ||
        !validNumber(Number(TransportationRating))
      ) {
        setIsValid(false);
        setErrorMessage("All ratings must be between 0 and 10!");
      } else {
        setIsValid(true);
        var generalRating =
          (Number(HealthRating) +
            Number(EnvironmentRating) +
            Number(SecurityRating) +
            Number(TransportationRating)) /
          4;

        var rating: CreateRatingDTO = {
          generalRating: generalRating,
          ratingHealth: Number(HealthRating),
          ratingEnvironment: Number(EnvironmentRating),
          ratingSecurity: Number(SecurityRating),
          ratingTransportation: Number(TransportationRating),
        };

        var ratingSID = await CreateRating(rating);

        var review: CreateReviewDTO = {
          reviewDescription: ReviewDescription,
          reviewDate: new Date(),
          ratingSID: ratingSID,
          userSID: Number(user.current.usersSID),
          reviewDislikes: 0,
          reviewLikes: 0,
          citySID: CitySID,
        };

        var result = await CreateReview(review);

        if (result) {
          review.reviewDate = review.reviewDate.toLocaleString();
          var newReview = {
            rating: rating,
            review: review,
            user: {
              usersSID: user.current.usersSID,
              userFirstName: user.current.userFirstName,
              userLastName: user.current.userLastName,
              userEmail: user.current.userEmail,
            },
          };
          NewReviewHandler(newReview);
        }
      }
    },
    [
      HealthRating,
      EnvironmentRating,
      SecurityRating,
      TransportationRating,
      ReviewDescription,
    ]
  );
  return (
    <div>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {`${user.current.userFirstName?.substring(0,1)}${user.current.userLastName?.substring(0,1)}`}
            </Avatar>
          }
          title={`${user.current.userFirstName} ${user.current.userLastName}`}
        />

        <CardContent sx={{display:"flex", justifyContent: "center", flexDirection: "column", alignItems:"center"}}>
          {!isValid && <Alert severity="error">{errorMessage}</Alert>}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              border: (theme) => `1px solid ${theme.palette.divider}`,
              borderRadius: 1,
              bgcolor: "background.paper",
              "& svg": {
                m: 1.5,
              },
              "& hr": {
                mx: 0.5,
              },
              marginBottom: "10px",
              padding: "5px",
            }}
          >
            <Grid
              container
              direction="row"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: "5px",
                  }}
                >
                  <HealthAndSafetyRoundedIcon />
                  Health
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    id="outlined-number"
                    name="HealthRating"
                    label="Rating /10"
                    type="number"
                    onChange={reducerInputChange}
                    error={!isValid}
                    InputProps={{ inputProps: { min: 0, max: 10 } }}
                    helperText={!isValid ? "Required!" : " "}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: "5px",
                  }}
                >
                  <LandscapeRoundedIcon />
                  Environment
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    id="outlined-number"
                    name="EnvironmentRating"
                    label="Rating /10"
                    type="number"
                    onChange={reducerInputChange}
                    error={!isValid}
                    InputProps={{ inputProps: { min: 0, max: 10 } }}
                    helperText={!isValid ? "Required!" : " "}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: "5px",
                  }}
                >
                  <SecurityRoundedIcon />
                  Security
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    id="outlined-number"
                    name="SecurityRating"
                    label="Rating /10"
                    type="number"
                    onChange={reducerInputChange}
                    error={!isValid}
                    InputProps={{ inputProps: { min: 0, max: 10 } }}
                    helperText={!isValid ? "Required!" : " "}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: "5px",
                  }}
                >
                  <EmojiTransportationRoundedIcon />
                  Transportation
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    id="outlined-number"
                    name="TransportationRating"
                    label="Rating /10"
                    type="number"
                    onChange={reducerInputChange}
                    error={!isValid}
                    InputProps={{ inputProps: { min: 0, max: 10 } }}
                    helperText={!isValid ? "Required!" : " "}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <TextField
            id="outlined-multiline-static"
            name="ReviewDescription"
            label="Enter your review"
            onChange={reducerInputChange}
            error={!isValid}
            helperText={!isValid ? "Required!" : " "}
            multiline
            rows={4}
            fullWidth
          />
        </CardContent>
        <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            <Button
              variant="contained"
              sx={{ backgroundColor: "secondary.main", color: "black", "&:hover": { backgroundColor: "rgb(249 211 66 / 60%)" }, }}
              onClick={handleSubmit}
            >
              POST
            </Button>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
}
