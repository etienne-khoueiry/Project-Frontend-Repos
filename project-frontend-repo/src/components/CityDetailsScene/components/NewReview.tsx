import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import LandscapeRoundedIcon from "@mui/icons-material/LandscapeRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import EmojiTransportationRoundedIcon from "@mui/icons-material/EmojiTransportationRounded";

type Props = {};

export const RatingList = () => {
  var RatingCriteria: string[] = [
    "Health",
    "Environment",
    "Security",
    "Transportation",
  ];

  return (
    <div>
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
                label="Rating /10"
                type="number"
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
                label="Rating /10"
                type="number"
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
                label="Rating /10"
                type="number"
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
                label="Rating /10"
                type="number"
              />
            </Box>
          </Grid>

        </Grid>
      </Box>
    </div>
  );
};

export default function NewReview({}: Props) {
  return (
    <div>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title="PersonName"
        />
        <CardContent>
          <RatingList />
          <TextField
            id="outlined-multiline-static"
            label="Enter your review"
            multiline
            rows={4}
            fullWidth
          />
        </CardContent>
        <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "secondary.main", color: "black" }}
            >
              POST
            </Button>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
}
