import axios from "axios";
import CreateCityDTO from "../Models/CreateCityDTO";

const baseUrl = "https://localhost:7181/cities";

const GetCities = (): Promise<any> => {
  var config: any = {
    method: "get",
    url: baseUrl,
    headers: {},
  };

  return axios(config);
};

const GetCityById = (id: number, userId: number): Promise<any> => {
  var config: any = {
    method: "get",
    url: `${baseUrl}/${id}/${userId}`,
    headers: {},
  };

  return axios(config);
};

const CreateCity = async (city: CreateCityDTO) => {
  var data = JSON.stringify(city);
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
      return false;
    });
  return result;
};

const GetCitiesByName = async (CityName: any): Promise<any> => {
  var config: any = {
    method: "get",
    url: `${baseUrl}/${CityName}`,
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
