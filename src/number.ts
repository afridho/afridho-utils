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
