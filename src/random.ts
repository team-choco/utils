export const ChocoRandom = {
  integer(min: number, max: number): number {
    return (Math.random() * (max - min)) + min;
  },

  char(seed?: string): string {
    const charCode = seed ? seed.charCodeAt(0) : 97;

    return String.fromCharCode(charCode + ChocoRandom.integer(97 - charCode, 122 - charCode));
  },

  anon(seed: string): string {
    let output = '';

    for (const c of seed) {
      output += ChocoRandom.char(c);
    }

    return output;
  },
}
