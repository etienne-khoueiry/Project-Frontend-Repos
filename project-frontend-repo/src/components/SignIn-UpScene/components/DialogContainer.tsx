import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Context } from "../../../Contexts/Context";
import { Box } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import TabsScene from "./TabsScene/TabsScene";

export default function DialogContainer() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  var { openDialog: openModal, setOpenDialog: setOpenModal } =
    React.useContext(Context);

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={openModal}
        aria-labelledby="responsive-dialog-title"
        
      >
        <Box sx={{ backgroundColor: "#eeeeee" }}>
          <DialogTitle id="responsive-dialog-title">
            {"Please Login to continue!"}
          </DialogTitle>
          <DialogContent sx={{height: "100%"}}>
            <Box sx={{ position: "absolute", right: "5px", top: "5px" }}>
              <CloseRoundedIcon
                onClick={handleClose}
                sx={{ cursor: "pointer", color: "red" }}
              />
            </Box>
            <Box sx={{ backgroundColor: "white", borderRadius: "10px" }}>
              <TabsScene />
            </Box>
          </DialogContent>
        </Box>
      </Dialog>
    </div>
  );
}
