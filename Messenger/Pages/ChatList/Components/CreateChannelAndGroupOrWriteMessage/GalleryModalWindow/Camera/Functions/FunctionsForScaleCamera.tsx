export const myFixedNumber = (num: number) => {
  const result = Math.floor(num * 10) / 10;
  return result;
};
export const isCurrentDigit = (digit: number, zoom: number): boolean => {
  const mathFloordigit = Math.floor(zoom / 0.01 + 1);
  if (mathFloordigit == digit) {
    return true;
  }
  if (digit == 3 && mathFloordigit > 3) {
    return true;
  }
  return false;
};

export const viewOfDigit = (digit: number, zoom: number): string => {
  if (isCurrentDigit(digit, zoom)) {
    return (
      myFixedNumber(zoom / 0.01 + 1)
        .toString()
        .replace(/\.0$/, "") + "x"
    );
  }
  return digit.toString();
};
