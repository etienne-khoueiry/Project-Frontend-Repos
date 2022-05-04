import axios from "axios";
import CreateCityDTO from "../Models/CreateCityDTO";

const baseUrl = "https://localhost:7181/cities";

const GetCities = async (pageIndex: number): Promise<any> => {
  var config: any = {
    method: "get",
    url: `${baseUrl}?pageIndex=${pageIndex}`,
    headers: {},
  };
  var result = false;
  await axios(config)
    .then(function (response) {
      result = response.data;
    })
    .catch(function (error) {
      return false;
    });
  return result;
};

const GetCityById = async (id: number, userId: number) => {
  var config: any = {
    method: "get",
    url: `${baseUrl}/${id}/${userId}`,
    headers: {},
  };

  var result = false;
  await axios(config)
    .then(function (response) {
      result = response.data;
    })
    .catch(function (error) {
      return false;
    });
  return result;
};

const CreateCity = async (city: CreateCityDTO) => {
  var FormData = require("form-data");
  var data = new FormData();

  data.append("cityImage", city.cityImage, city.cityImage.name);
  data.append("cityName", city.cityName);
  data.append("countrySID", city.countrySID);
  data.append("generalRating", city.generalRating);
  data.append("ratingEnvironment", city.ratingEnvironment);
  data.append("ratingHealth", city.ratingHealth);
  data.append("ratingSecurity", city.ratingSecurity);
  data.append("ratingTransportation", city.ratingTransportation);
  var config: any = {
    method: "post",
    url: `${baseUrl}/create`,
    headers: {
      accept: "*/*",
      "Content-Type": "multipart/form-data",
    },
    data: data,
  };

  var result = false;

  await axios(config)
    .then(function (response: any) {
      result = response.data;
    })
    .catch(function (error: any) {
      return false;
    });
  return result;
};

const GetCitiesByName = async (
  CityName: any,
  pageIndex: number
): Promise<any> => {
  var config: any = {
    method: "get",
    url: `${baseUrl}/${CityName}?pageIndex=${pageIndex}`,
    headers: {},
  };

  var result = false;
  await axios(config)
    .then(function (response) {
      result = response.data;
    })
    .catch(function (error) {
      return false;
    });
  return result;
};

export { GetCities, GetCityById, CreateCity, GetCitiesByName };
