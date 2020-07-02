export const ChocoStrings = {
  /**
   * Removes falsy values and concatenates the string.
   *
   * @param separator - the values to concat.
   * @param values - the values to concat.
   * @returns the concatenated string.
   */
  concat(separator: string, ...values: any[]): string {
    return values.filter(Boolean).join(separator);
  },
}
