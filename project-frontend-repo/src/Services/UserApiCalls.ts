import User from "../Models/User";
import axios from "axios";
import UserExists from "../Models/UserExists";

const baseUrl = "https://localhost:7181/users";

const CreateUser = async (user: User): Promise<boolean> => {
  var data = JSON.stringify(user);

  var config: any = {
    method: "post",
    url: `${baseUrl}`,
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
    url: `${baseUrl}/CheckUserIsExisting`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  var result = false;
  await axios(config)
    .then(async function (response) {
      result = response.data;
    })
    .catch(function (error) {
      return error;
    });

  return await result;
}

export { CreateUser, IsUserExists };
