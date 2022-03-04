/**
 * round a number to given decimal places
 *
 * @param value number to round
 * @param decimals decimal places round to
 * @returns rounded number
 */
export const round = (value: number, decimals = 0) => {
  if (!Number.isInteger(decimals)) throw new Error(`decimals must integer >=0`);

  return Math.round((value + Number.EPSILON) * 10 ** decimals) / 10 ** decimals;
};
