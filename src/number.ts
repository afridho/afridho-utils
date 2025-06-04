/**
 * Generates a random integer between `min` and `max` (inclusive).
 *
 * @param min - The minimum integer value.
 * @param max - The maximum integer value.
 * @returns A random integer between min and max.
 */
export function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Rounds a number to a specified number of decimal places.
 *
 * @param value - The number to round.
 * @param decimals - The number of decimal places (default is 2).
 * @returns The rounded number.
 */
export function roundToDecimals(value: number, decimals = 2): number {
    const factor = 10 ** decimals;
    return Math.round(value * factor) / factor;
}
