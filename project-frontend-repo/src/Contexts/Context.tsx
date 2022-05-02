import React, { createContext, useState } from "react";

export const Context = createContext({
  openDialog: false,
  setOpenDialog(open: boolean) {},
  isValid: null,
  setIsValid(isValid: boolean) {},
  snackbarInfo: {open: false, message: ''},
  setSnackbarInfo(obj: {open: boolean, message: string}){},
  isFirstTime: true,
  setIsFirstTime(isFirstTime: boolean){},
  name: "",
  setName(name: string){}
});

const ContextProvider = (props: any) => {

  const [isValid, setIsValid] = useState<any>();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);
  const [snackbarInfo, setSnackbarInfo] = useState<{open: boolean, message: string}>({open: false, message: ''});
  const [name, setName] = useState<any>(`${localStorage.getItem("UserFirstName")} ${localStorage.getItem("UserLastName")}`);

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
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
