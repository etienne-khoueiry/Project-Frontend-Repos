import { Typography } from "@mui/material";
import Cities from "../HomePageScene/components/Cities";

type Props = {};

export default function FavoritesScene({}: Props) {
  
  return (
    <div style={{ textAlign: "center"}}>
      <Typography variant="h4" component={"div"} sx={{fontWeight: "bold"}}>Favorites</Typography>
      <Cities />
    </div>
  );

}
