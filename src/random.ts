export const ChocoRandom = {
  integer(min: number, max: number): number {
    return (Math.random() * (max - min)) + min;
  },

  char(seed?: string): string {
    const charCode = seed ? seed.charCodeAt(0) : 32;

    return String.fromCharCode(charCode + ChocoRandom.integer(32 - charCode, 126 - charCode));
  },

  anon(seed: string): string {
    let output = '';

    for (const c of seed) {
      output += ChocoRandom.char(c);
    }

    return output;
  },
}
