import User from "../Models/User";
import axios from "axios";
import UserExists from "../Models/UserExists";




const CreateUser = async (user: User) : Promise<boolean> => {
  var data = JSON.stringify(user);

  var config: any = {
    method: "post",
    url: "https://localhost:7181/users",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  var result = false;
  await axios(config)
    .then(function (response) {
      result = response.data;
    })
    .catch(function (error) {
      return error;
    });
    return await result;
};





async function IsUserExists(user: UserExists): Promise<User | boolean> {
  var data = JSON.stringify(user);

  var config: any = {
    method: "post",
    url: "https://localhost:7181/CheckUserIsExisting",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  var result = false;
  await axios(config)
    .then(async function (response) {
        // console.log(response.data);
      result = response.data;
    })
    .catch(function (error) {
        // console.log("ccC")
      return error;
    });

  return await result;
}

export { CreateUser, IsUserExists };
