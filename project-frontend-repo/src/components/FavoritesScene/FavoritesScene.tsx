import { Typography } from "@mui/material";
import Cities from "../HomePageScene/components/Cities";

export default function FavoritesScene() {

  return (
    <div>
      <Typography variant="h4" component={"div"} sx={{fontWeight: "bold", textAlign: "center"}}>Favorites</Typography>
      <Cities />
    </div>
  );

}
