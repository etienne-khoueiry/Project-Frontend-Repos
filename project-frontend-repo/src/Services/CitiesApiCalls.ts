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




const GetCityById = async (id: number, userId: number): Promise<any> => {
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

  data.append("CityImage", city.cityImage, city.cityImage.name);
  data.append("CityName", city.cityName);
  data.append("CountrySID", city.countrySID);
  data.append("GeneralRating", city.generalRating);
  data.append("RatingEnvironment", city.ratingEnvironment);
  data.append("RatingHealth", city.ratingHealth);
  data.append("RatingSecurity", city.ratingSecurity);
  data.append("RatingTransportation", city.ratingTransportation);
  var config: any = {
    method: "post",
    url: `${baseUrl}/create`,
    headers: {
      accept: "*/*",
      "Content-Type": "multipart/form-data",
    },
    data: data,
  };
  console.log(data);
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








const GetCitiesByNameOnce = async (CityName: any) => {
  var call: any;
  return async (url: any): Promise<any> => {
    if (call) {
      call.cancel();
    }
    call = axios.CancelToken.source();
    return await axios
      .get(url, { cancelToken: call.token })
      .then(async (response: any) => {
        return await response.data;
      })
      .catch((thrown: any) => {
        if (axios.isCancel(thrown)) {
          console.log(thrown);
        } else {
          console.log("error");
        }
      });
  };
};





export {
  GetCities,
  GetCityById,
  CreateCity,
  GetCitiesByName,
  GetCitiesByNameOnce,
};
