import Snackbar from "@mui/material/Snackbar";
import { Context } from "../Contexts/Context";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import React, { useCallback, useContext, useState } from "react";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={10} ref={ref} variant="filled" {...props} />;
});

type Props = {};

export default function SnackbarComponent({}: Props) {
  const { snackbarInfo, setSnackbarInfo } = useContext(Context);

  const [state, setState] = useState<any>({
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal } = state;

  const handleClose = useCallback(() => {
    setSnackbarInfo({ ...snackbarInfo, open: false });
  }, [snackbarInfo]);

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={snackbarInfo.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ my: "50px", width: "100%" }}
        >
          {snackbarInfo.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
