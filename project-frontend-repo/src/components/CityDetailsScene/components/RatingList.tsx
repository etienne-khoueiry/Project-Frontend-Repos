import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import { RatingAvatarColor } from "../../../Common/Utilities/RatingAvatarColor";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import LandscapeRoundedIcon from "@mui/icons-material/LandscapeRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import EmojiTransportationRoundedIcon from "@mui/icons-material/EmojiTransportationRounded";

export default function RatingList() {
  const avatarRatingColor = RatingAvatarColor(9);

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
          <Avatar sx={{ bgcolor: avatarRatingColor }} variant="square">
            2
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
          <Avatar sx={{ bgcolor: avatarRatingColor }} variant="square">
            2
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
          <Avatar sx={{ bgcolor: avatarRatingColor }} variant="square">
            2
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
          <Avatar sx={{ bgcolor: avatarRatingColor }} variant="square">
            2
          </Avatar>
        </ListItemAvatar>
      </ListItem>
      
    </List>
  );
}
