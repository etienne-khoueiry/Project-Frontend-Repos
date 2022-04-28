import axios from "axios";
import City from "../Models/City";

const baseUrl = "https://localhost:7181/cities";

const GetCities = (): Promise<any> => {
  var config: any = {
    method: "get",
    url: baseUrl,
    headers: {},
  };

//   var result;
  return axios(config);
//     .then(async function (response) {
//       result =  response.data;
//     })
//     .catch(function (error) {
//       return error;
//     });
//   return await result;
};

const GetCityById = (id: number): Promise<any> => {
  // var config: any = {
  //   method: "get",
  //   url: "https://localhost:7181/cities",
  //   headers: {},
  // };

//   var result;
  // return axios(config);
//     .then(async function (response) {
//       result =  response.data;
//     })
//     .catch(function (error) {
//       return error;
//     });
//   return await result;


var config: any = {
  method: 'get',
  url: `${baseUrl}/${id}`,
  headers: { }
};

return axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

};

export { GetCities, GetCityById };
