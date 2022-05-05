export const RatingBetween0And2 = "#d50000";
export const RatingBetween2And4 = "#ef5350";
export const RatingBetween4And6 = "#c0ca33";
export const RatingBetween6And9 = "#66bb6a";
export const RatingBetween9And10 = "#1b5e20";

export const RatingAvatarColor = (rating: number): string => {
    switch (rating != null) {
      case rating < 2:
        return RatingBetween0And2;
      case rating >= 2 && rating < 4:
        return RatingBetween2And4;
      case rating >= 4 && rating < 6:
        return RatingBetween4And6;
      case rating >= 6 && rating < 9:
        return RatingBetween6And9;
      case rating >= 9 && rating <= 10:
        return RatingBetween9And10;
      default:
        return "white";
    }
  };