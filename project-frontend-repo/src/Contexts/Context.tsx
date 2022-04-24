import React, { createContext, useRef, useState } from "react";

export const Context = createContext({
  openModal: false,
  setOpenModal(open: boolean) {},
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

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<any>();
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);
  const [snackbarInfo, setSnackbarInfo] = useState<{open: boolean, message: string}>({open: false, message: ''});
  
  return (
    <Context.Provider
      value={{
        openModal: openModal,
        setOpenModal: setOpenModal,
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
