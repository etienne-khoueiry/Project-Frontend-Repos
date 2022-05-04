import axios from "axios";
import CreateReviewDTO from "../Models/CreateReviewDTO";

const baseUrl = "https://localhost:7181/reviews";

const GetReviewsByCityId = async (CityId: number, pageIndex: number): Promise<any> => {
  var config: any = {
    method: "get",
    url: `${baseUrl}/${CityId}?pageIndex=${pageIndex}`,
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
