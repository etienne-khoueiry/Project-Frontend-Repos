import axios from "axios";

const baseUrl = "https://localhost:7181/favorites";

const AddToFavorites = async (CityId: number, UserId: number) => {
  var config: any = {
    method: "post",
    url: `${baseUrl}/Add/${CityId}/${UserId}`,
    headers: {},
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

const DeleteFromFavorites = async (CityId: number, UserId: number) => {
  var config: any = {
    method: "delete",
    url: `${baseUrl}/Delete/${CityId}/${UserId}`,
    headers: {},
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

const GetFavoritesByUserId = async (UserId: number) => {
  var config: any = {
    method: "get",
    url: `${baseUrl}/${UserId}`,
    headers: {},
  };

  return await axios(config);

};

export { AddToFavorites, DeleteFromFavorites, GetFavoritesByUserId };
