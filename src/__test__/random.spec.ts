import { ChocoRandom } from '../random';
import { chance } from './chance';

describe('Utils(ChocoRandom)', () => {
  describe('func(integer)', () => {
    it('should generate a random number in the range', async () => {
      for (let i = 0; i < 100; i++) {
        const result = ChocoRandom.integer(0, 5);

        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(5);
      }
    });
  });

  describe('func(char)', () => {
    it('should generate a random character', async () => {
      expect(typeof ChocoRandom.char()).toStrictEqual('string');
    });

    it('should generate a random character', async () => {
      expect(typeof ChocoRandom.char(chance.character())).toStrictEqual('string');
    });
  });

  describe('func(anon)', () => {
    it('should anonymize a string', async () => {
      for (let i = 0; i < 100; i++) {
        const unexpectedResult = chance.string();

        expect(ChocoRandom.anon(unexpectedResult)).not.toStrictEqual(unexpectedResult);
      }
    });
  });
});
