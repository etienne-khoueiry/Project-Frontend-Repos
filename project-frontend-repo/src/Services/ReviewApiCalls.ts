import axios from "axios";

const baseUrl = "https://localhost:7181/reviews";

const GetReviewsByCityId = (CityId: number) => {
  var config: any = {
    method: "get",
    url: `${baseUrl}/${CityId}`,
    headers: {},
  };

  return axios(config);
};

export { GetReviewsByCityId };
