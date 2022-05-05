import React, { createContext, useLayoutEffect, useRef, useState } from "react";


import { GetUserByToken } from "../Services/UserApiCalls";

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
  reviews: [],
  user: {},
  loadPage: true,
  setLoadPage(load: boolean) {},
  openDropdownSearch: false,
  setOpendDropdownSearch(load: boolean) {},
  cityRating: [],
  setCityRating(rating: any){}
});

const ContextProvider = (props: any) => {

  const [isValid, setIsValid] = useState<any>();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);
  const [cities, setCities] = useState<any>();
  const [snackbarInfo, setSnackbarInfo] = useState<{open: boolean, message: string}>({open: false, message: ''});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const reviews = useRef<any>();
  const user = useRef<any>({});
  const [name, setName] = useState<any>(`${user.current.userFirstName} ${user.current.userLastName}`);
  const [loadPage, setLoadPage] = useState<boolean>(true);
  const[openDropdownSearch, setOpendDropdownSearch] = useState<boolean>(false);
  const[cityRating, setCityRating] = useState<any>();
  
  useLayoutEffect( () => {

    const getUser = async () => {
      const bearer = localStorage.getItem("bearer");
      if(bearer){
        var result = await GetUserByToken(bearer);
        if(result){
          user.current = result;
          setName(`${user.current.userFirstName} ${user.current.userLastName}`)
        }
      }
      setLoadPage(false);
    }

    getUser();
  }, []);


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
        reviews: reviews,
        user: user,
        loadPage: loadPage,
        setLoadPage: setLoadPage,
        openDropdownSearch: openDropdownSearch,
        setOpendDropdownSearch: setOpendDropdownSearch,
        cityRating: cityRating,
        setCityRating: setCityRating
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
