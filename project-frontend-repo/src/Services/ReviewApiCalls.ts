import axios from "axios";
import CreateReviewDTO from "../Models/CreateReviewDTO";

const baseUrl = "https://localhost:7181/reviews";

const GetReviewsByCityId = (CityId: number) => {
  var config: any = {
    method: "get",
    url: `${baseUrl}/${CityId}`,
    headers: {},
  };

  return axios(config);
};

const CreateReview = async (review: CreateReviewDTO): Promise<boolean> => {
  var data = JSON.stringify(review);

  var config: any = {
    method: "post",
    url: "https://localhost:7181/reviews",
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

export { GetReviewsByCityId, CreateReview };
