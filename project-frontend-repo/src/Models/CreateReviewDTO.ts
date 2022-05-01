export default interface CreateReviewDTO {
	reviewDescription: string;
	reviewDate: Date | string;
	reviewLikes: number;
	reviewDislikes: number;
	ratingSID: number;
	userSID: number;
	citySID: number;
}