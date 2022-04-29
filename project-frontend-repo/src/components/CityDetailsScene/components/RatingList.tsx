import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { RatingAvatarColor } from "../../../Common/Utilities/RatingAvatarColor";
import LandscapeRoundedIcon from "@mui/icons-material/LandscapeRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import EmojiTransportationRoundedIcon from "@mui/icons-material/EmojiTransportationRounded";
import City from "../../../Models/City";

export interface IProps {
    city: City;
}


export default function RatingList(props: IProps) {
  const avatarRatingEnvironmentColor = RatingAvatarColor(props.city.generalRatingEnvorinment);
  const avatarRatingHealthColor = RatingAvatarColor(props.city.generalRatingHealth);
  const avatarRatingSecurityColor = RatingAvatarColor(props.city.generalRatingSecurity);
  const avatarRatingTransportationColor = RatingAvatarColor(props.city.generalRatingTransportation);

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HealthAndSafetyRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Health" secondary="Rating" />
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: avatarRatingHealthColor }} variant="square">
            {props.city.generalRatingHealth}
          </Avatar>
        </ListItemAvatar>
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LandscapeRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Environment" secondary="Rating" />
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: avatarRatingEnvironmentColor }} variant="square">
            {props.city.generalRatingEnvorinment}
          </Avatar>
        </ListItemAvatar>
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SecurityRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Secuity" secondary="Rating" />
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: avatarRatingSecurityColor }} variant="square">
            {props.city.generalRatingSecurity}
          </Avatar>
        </ListItemAvatar>
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmojiTransportationRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Transportations" secondary="Rating" />
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: avatarRatingTransportationColor }} variant="square">
            {props.city.generalRatingTransportation}
          </Avatar>
        </ListItemAvatar>
      </ListItem>

    </List>
  );
}
