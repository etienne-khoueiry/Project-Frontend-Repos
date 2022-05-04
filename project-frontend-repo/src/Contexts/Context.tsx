import React, { createContext, useRef, useState } from "react";
import Rating from "../Models/Rating";

export const Context = createContext<any>({
  openDialog: false,
  setOpenDialog(open: boolean) {},
  isValid: null,
  setIsValid(isValid: boolean) {},
  snackbarInfo: {open: false, message: ''},
  setSnackbarInfo(obj: {open: boolean, message: string}){},
  isFirstTime: true,
  setIsFirstTime(isFirstTime: boolean){},
  name: "",
  setName(name: string){},
  cities: [] ,
  setCities(city: any[]){},
  isLoading: false,
  setIsLoading(open: boolean) {},
  reviews: []
  // ratings: {},
  // setRatings(rating: Rating){}
});

const ContextProvider = (props: any) => {

  const [isValid, setIsValid] = useState<any>();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);
  const [cities, setCities] = useState<any>();
  // const [ratings, setRatings] = useState<any>();
  const [snackbarInfo, setSnackbarInfo] = useState<{open: boolean, message: string}>({open: false, message: ''});
  const [name, setName] = useState<any>(`${localStorage.getItem("UserFirstName")} ${localStorage.getItem("UserLastName")}`);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const reviews = useRef<any>();


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
        setName: setName,
        cities: cities,
        setCities: setCities,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
        reviews: reviews
        // ratings: ratings,
        // setRatings: setRatings
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
