const validNumber = (num: number) => {
    if (num < 0 || num > 10) {
      return false;
    }
    return true;
  };

  export default validNumber;