import { Box, Fade, Modal, Typography } from "@mui/material";
import React, { useCallback, useContext, useState } from "react";
import ColorTabs from "./TabsScene/TabsScene";
import Backdrop from "@mui/material/Backdrop";
import { Context } from "../../../Contexts/Context";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

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
  var { openModal, setOpenModal} = useContext(Context);
  const onModalClose = useCallback(() => {
    setOpenModal(false);
    // setIsValid(true);
  }, []);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModal}>
        <Box sx={style}>
          <Typography textAlign={"center"} variant="h6" component="h2">
            Please Login
          </Typography>
          <Box sx={{ position: "absolute", right: "5px", top: "5px" }}>
            <CloseRoundedIcon onClick={onModalClose} sx={{cursor: "pointer", color: "red"}}/>
          </Box>
          <Box
            sx={{ bgcolor: "white", marginTop: "10px", paddingBottom: "20px" }}
          >
            <ColorTabs />
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
