import { Box, Fade, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import ColorTabs from "./TabsScene/TabsScene";
import Backdrop from "@mui/material/Backdrop";

type Props = {};

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#eeeeee",
    border: "2px solid #000",
    boxShadow: 24,
    p: 3,
  };

export default function ModalContainer({}: Props) {

    const [open, setOpen] = useState<boolean>();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={false}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={false}>
        <Box sx={style}>
          <Typography textAlign={"center"} variant="h6" component="h2">
            Please Login
          </Typography>
          <Box sx={{ bgcolor: "white", marginTop: "10px" }}>
            <ColorTabs />
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
