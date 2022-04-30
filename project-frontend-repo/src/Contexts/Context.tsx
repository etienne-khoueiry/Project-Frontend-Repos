import React, { createContext, useRef, useState } from "react";
import Review from "../Models/Review";

export const Context = createContext({
  openDialog: false,
  setOpenDialog(open: boolean) {},
  isValid: null,
  setIsValid(isValid: boolean){},
  snackbarInfo: {open: false, message: ''},
  setSnackbarInfo(obj: {open: boolean, message: string}){},
  isFirstTime: true,
  setIsFirstTime(isFirstTime: boolean){},
  name: "",
  setName(name: string){}
  // reviews: [],
  // setReviews(reviews: Review[]){}
//   isLoading: false,
//   setIsLoading(loading: boolean) {}
});

const ContextProvider = (props: any) => {

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<any>();
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);
  const [name, setName] = useState<any>(`${localStorage.getItem("UserFirstName")} ${localStorage.getItem("UserLastName")}`);
  const [snackbarInfo, setSnackbarInfo] = useState<{open: boolean, message: string}>({open: false, message: ''});
  // const [reviews, setReviews] = useState<any>([]);
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
        setIsFirstTime: setIsFirstTime,
        name: name,
        setName: setName
        // reviews: reviews,
        // setReviews: setReviews
        // isLoading: isLoading,
        // setIsLoading: setIsLoading,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
