import City from "./City";
import Country from "./Country";
import { ReviewDTO } from "./ReviewDTO";

export default interface CityDTO {
  city: City;
  country: Country;
  reviews: ReviewDTO[];
  isFavorites: boolean;
}
