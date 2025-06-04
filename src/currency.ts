/**
 * Converts a number to Indonesian Rupiah currency format.
 *
 * @param amount - The amount to convert.
 * @returns The formatted string in Indonesian Rupiah or an error message if invalid.
 */
export function toIdr(amount: number | null | undefined): string {
    if (amount == null || isNaN(amount)) return "Invalid Amount.";
    return `Rp ${amount.toLocaleString("id-ID")}`;
}
