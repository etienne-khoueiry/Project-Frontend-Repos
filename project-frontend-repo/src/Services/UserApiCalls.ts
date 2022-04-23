import User from "../Models/User";
import axios from "axios";
import UserExists from "../Models/UserExists";

const CreateUser = (user: User) => {
  var data = JSON.stringify(user);
  console.log(user);
  var config: any = {
    method: "post",
    url: "https://localhost:7181/users",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
};

async function IsUserExists(user: UserExists): Promise<boolean> {
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
    .then(function (response) {
      //   console.log(response.data);
      result = response.data;
    })
    .catch(function (error) {
      return error;
    });

  return await result;
}

export { CreateUser, IsUserExists };
