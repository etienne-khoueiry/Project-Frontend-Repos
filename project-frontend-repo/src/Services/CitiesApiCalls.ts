import axios from "axios";

const baseUrl = "https://localhost:7181/cities";

const GetCities = (): Promise<any> => {
  var config: any = {
    method: "get",
    url: baseUrl,
    headers: {},
  };

  return axios(config);
};

const GetCityById = (id: number): Promise<any> => {
  var config: any = {
    method: "get",
    url: `${baseUrl}/${id}`,
    headers: {},
  };

  return axios(config);
};

export { GetCities, GetCityById };
