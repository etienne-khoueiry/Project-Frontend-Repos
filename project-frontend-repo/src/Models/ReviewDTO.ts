import Rating from './Rating';
import Review from './Review';
import User from './User';

export interface ReviewDTO{
    review: Review;
    rating: Rating;
    user: User;
}