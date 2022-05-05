import axios from "axios";
import CreateRatingDTO from "../Models/CreateRating";




const baseUrl = "https://localhost:7181/ratings";



const CreateRating = async (rating: CreateRatingDTO): Promise<number> => {
    var data = JSON.stringify(rating);
    
    var config: any = {
      method: 'post',
      url: `${baseUrl}`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    var result = 0;
    await axios(config)
    .then(function (response) {
      result = response.data;
    })
    .catch(function (error) {
      return error;
    });
    return await result;
}




export {CreateRating};