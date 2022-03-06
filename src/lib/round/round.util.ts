/**
 * Round a number to given decimal places
 * @param value Number to round
 * @param decimals Decimal places round to
 * @returns Rounded number
 * @throws Throws when decimals is not an integer
 */
export const round = (value: number, decimals = 0): number => {
  if (!Number.isInteger(decimals)) throw new Error(`decimals must an integer`);

  return Math.round((value + Number.EPSILON) * 10 ** decimals) / 10 ** decimals;
};
