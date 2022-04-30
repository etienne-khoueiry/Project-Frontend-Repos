import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import LandscapeRoundedIcon from "@mui/icons-material/LandscapeRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import EmojiTransportationRoundedIcon from "@mui/icons-material/EmojiTransportationRounded";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import { styled } from "@mui/styles";

type Props = {};
const Input = styled("input")({
  display: "none",
});
export default function ({}: Props) {
  return (
    <div>
      <Box
        component="form"
        noValidate
        //   onSubmit={handleSubmit}
        sx={{ mt: 3 }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <TextField
              autoComplete="given-name"
              name="cityname"
              required
              fullWidth
              id="cityname"
              label="City Name"
              autoFocus
              //   inputRef={firstNameRef}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              required
              fullWidth
              id="countryName"
              label="Country Name"
              name="countryname"
              autoComplete="family-name"
              //   inputRef={lastNameRef}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              fullWidth
              id="countrycode"
              label="Country Code"
              name="countrycode"
              autoComplete="family-name"
              //   inputRef={lastNameRef}
            />
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
                // fullWidth
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
              name="HealthRating"
              label="Rating /10"
              type="number"
              //   onChange={reducerInputChange}
              //   error={!isValid}
              //   helperText={!isValid ? "Required!" : " "}
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
              name="EnvironmentRating"
              label="Rating /10"
              type="number"
              // onChange={reducerInputChange}
              // error={!isValid}
              // helperText={!isValid ? "Required!" : " "}
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
              name="SecurityRating"
              label="Rating /10"
              type="number"
              // onChange={reducerInputChange}
              // error={!isValid}
              // helperText={!isValid ? "Required!" : " "}
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
              name="TransportationRating"
              label="Rating /10"
              type="number"
              // onChange={reducerInputChange}
              // error={!isValid}
              // helperText={!isValid ? "Required!" : " "}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Create New City
        </Button>
      </Box>
    </div>
  );
}
