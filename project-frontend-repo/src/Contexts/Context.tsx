import React, { createContext, useRef, useState } from "react";

export const Context = createContext({
  openDialog: false,
  setOpenDialog(open: boolean) {},
  isValid: null,
  setIsValid(isValid: boolean){},
  snackbarInfo: {open: false, message: ''},
  setSnackbarInfo(obj: {open: boolean, message: string}){},
  isFirstTime: true,
  setIsFirstTime(isFirstTime: boolean){}
//   isLoading: false,
//   setIsLoading(loading: boolean) {}
});

const ContextProvider = (props: any) => {

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<any>();
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);
  const [snackbarInfo, setSnackbarInfo] = useState<{open: boolean, message: string}>({open: false, message: ''});
  
  return (
    <Context.Provider
      value={{
        openDialog: openDialog,
        setOpenDialog: setOpenDialog,
        isValid: isValid, 
        setIsValid: setIsValid,
        snackbarInfo: snackbarInfo,
        setSnackbarInfo: setSnackbarInfo,
        isFirstTime: isFirstTime,
        setIsFirstTime: setIsFirstTime
        // isLoading: isLoading,
        // setIsLoading: setIsLoading,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
