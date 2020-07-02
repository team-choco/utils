export const Strings = {
  /**
   * Removes falsy values and concatenates the string.
   *
   * @param values - the values to concat.
   * @returns the concatenated string.
   */
  concat(...values: any[]): string {
    return values.filter(Boolean).join(' ');
  },
}
