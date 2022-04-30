export default interface CreateReviewDTO {
	reviewDescription: string;
	reviewDate: Date;
	reviewLikes: number;
	reviewDislikes: number;
	ratingSID: number;
	userSID: number;
	citySID: number;
}