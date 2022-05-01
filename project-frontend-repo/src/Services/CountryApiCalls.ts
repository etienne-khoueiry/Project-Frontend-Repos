import axios from "axios";
import Country from "../Models/Country";
const baseUrl = "https://localhost:7181/countries";
const GetAllCountries = async (): Promise<boolean | Country> => {
  var config: any = {
    method: "get",
    url: `${baseUrl}`,
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

export { GetAllCountries };
