/**
 * Formats a number into a compact string representation.
 * For example:
 * - 1500 -> "1.5k"
 * - 1200000 -> "1.2m"
 * - 999 -> "999"
 * @param number The number to format.
 * @returns A string representing the formatted number.
 */
export const Number = (number: number): string => {
  if (number >= 1000000) {
    return `${(number / 1000000).toFixed(1)}m`;
  }

  if (number >= 1000) {
    const roundedNumber = Math.floor(number / 100) / 10;
    return `${roundedNumber.toFixed(1)}k`;
  }

  return `${number}`;
};
