import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import LandscapeRoundedIcon from "@mui/icons-material/LandscapeRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import EmojiTransportationRoundedIcon from "@mui/icons-material/EmojiTransportationRounded";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import { styled } from "@mui/styles";
import { GetAllCountries } from "../../../Services/CountryApiCalls";
import { Context } from "../../../Contexts/Context";
import Country from "../../../Models/Country";
import { CreateCity } from "../../../Services/CitiesApiCalls";
import CreateCityDTO from "../../../Models/CreateCityDTO";
import { useNavigate } from "react-router";

type Props = {};
const Input = styled("input")({
  display: "none",
});

// const MoveImage = (ImagePath: any, ImageName: any) => {
//   var fs = require("fs");

//   var oldPath = "old/path/file.txt";
//   var newPath = "C:\\Users\\User\\source\\repos\\Project-Backend-Repos\\CitiesReviews\\Images\\" +ImageName;

//   fs.rename(oldPath, newPath, function (err: any) {
//     if (err) throw err;
//     return newPath;
//   });
// };

export default function ({}: Props) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [countries, setCountries] = useState<Country[]>([]);
  const[isValid, setIsValid] = useState<boolean>(true);
  // const { isValid, setIsValid } = useContext(Context);

  const initialValues = {
    CityName: "",
    CountryId: "",
    RatingEnvironment: "",
    RatingHealth: "",
    RatingSecurity: "",
    RatingTransportation: "",
    CityImage: "",
  };

  const [inputValues, dispatchFormValues] = useReducer(
    (curVal: any, newVal: any) => ({ ...curVal, ...newVal }),
    initialValues
  );

  const {
    CityName,
    CountryId,
    RatingEnvironment,
    RatingHealth,
    RatingSecurity,
    RatingTransportation,
    CityImage,
  } = inputValues;

  const reducerInputChange = (event: any) => {
    const { name, value } = event.target;
    dispatchFormValues({ [name]: value });
  };

  const handleSubmit = useCallback(
    async (event: any) => {
      event.preventDefault();

      if (
        CityName == "" ||
        CountryId == "" ||
        RatingEnvironment == "" ||
        RatingHealth == "" ||
        RatingSecurity == "" ||
        RatingTransportation == "" ||
        CityImage == ""
      ) {
        setIsValid(false);
      } else {
        var generalRating =
          (Number(RatingEnvironment) +
            Number(RatingHealth) +
            Number(RatingSecurity) +
            Number(RatingTransportation)) /
          4;

        var imageName = CityImage.split("\\");

        // var path = MoveImage(CityImage, imageName[2]);
        var city: CreateCityDTO = {
          cityName: CityName,
          cityImage: imageName[2],
          countrySID: Number(CountryId),
          generalRating: generalRating,
          ratingEnvironment: Number(RatingEnvironment),
          ratingHealth: Number(RatingHealth),
          ratingSecurity: Number(RatingSecurity),
          ratingTransportation: Number(RatingTransportation),
        };

        var result = await CreateCity(city);

        if (result) {
          navigate("/");
        }
      }
    },
    [inputValues]
  );

  useEffect(() => {
    var result: any;
    const getCountries = async () => {
      result = await GetAllCountries();
      setCountries(result);
    };
    getCountries();
    setIsLoading(false);
  }, []);

  return (
    <div>
      <Backdrop sx={{ color: "#fff", zIndex: 10000 }} open={isLoading}>
        <CircularProgress color="secondary" />
      </Backdrop>
      {!isLoading && (
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="CityName"
                required
                fullWidth
                id="cityname"
                label="City Name"
                autoFocus
                onChange={reducerInputChange}
                error={!isValid}
                helperText={!isValid ? "Required!" : " "}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="CountryId"
                  label="Country"
                  value={inputValues.CountryId}
                  onChange={reducerInputChange}
                  error={!isValid}
                  // helperText={!isValid ? "Required!" : " "}
                >
                  {countries.map((country, index) => {
                    return (
                      <MenuItem key={index} value={country.countrySID}>
                        {country.countryName} - {country.countryCode}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingRight: "5px",
                }}
              >
                <ImageRoundedIcon />
                Upload Image
              </Box>
            </Grid>
            <Grid item xs={6}>
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  name="CityImage"
                  onChange={reducerInputChange}
                  // error={!isValid}
                  // helperText={!isValid ? "Required!" : " "}
                />
                <Button variant="contained" component="span">
                  Upload
                </Button>
              </label>
            </Grid>
            <Grid item xs={5} md={3}>
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
            </Grid>
            <Grid item xs={7} md={3}>
              <TextField
                id="outlined-number"
                name="RatingHealth"
                label="Rating /10"
                type="number"
                onChange={reducerInputChange}
                error={!isValid}
                helperText={!isValid ? "Required!" : " "}
              />
            </Grid>
            <Grid item xs={5} md={3}>
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
            </Grid>
            <Grid item xs={7} md={3}>
              <TextField
                id="outlined-number"
                name="RatingEnvironment"
                label="Rating /10"
                type="number"
                onChange={reducerInputChange}
                error={!isValid}
                helperText={!isValid ? "Required!" : " "}
              />
            </Grid>
            <Grid item xs={5} md={3}>
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
            </Grid>
            <Grid item xs={7} md={3}>
              <TextField
                id="outlined-number"
                name="RatingSecurity"
                label="Rating /10"
                type="number"
                onChange={reducerInputChange}
                error={!isValid}
                helperText={!isValid ? "Required!" : " "}
              />
            </Grid>
            <Grid item xs={5} md={3}>
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
            </Grid>
            <Grid item xs={7} md={3}>
              <TextField
                id="outlined-number"
                name="RatingTransportation"
                label="Rating /10"
                type="number"
                onChange={reducerInputChange}
                error={!isValid}
                helperText={!isValid ? "Required!" : " "}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Create New City
          </Button>
        </Box>
      )}
    </div>
  );
}
