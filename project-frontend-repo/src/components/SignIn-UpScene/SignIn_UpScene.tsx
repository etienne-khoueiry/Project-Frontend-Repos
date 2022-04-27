import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import DialogContainer from "./components/DialogContainer";

// const useStyles = makeStyles({
//     LoginLabel: {
//         size: "15px"
//     }
// });


export default function SignIn_UpScene() {
  //     const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);
  return (
    <div>
            {/* <ModalContainer /> */}
            <DialogContainer />
    </div>
  );
}
