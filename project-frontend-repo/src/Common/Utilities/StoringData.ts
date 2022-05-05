const storingUserData = (user: any) => {
    localStorage.setItem("UserSID", user.usersSID);
    localStorage.setItem("UserFirstName", user.userFirstName);
    localStorage.setItem("UserLastName", user.userLastName);
    localStorage.setItem("UserUsername", user.userUsername);
}

export{storingUserData};
