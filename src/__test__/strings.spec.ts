import { ChocoStrings } from '../strings';
import { chance } from './chance';

describe('Utils(ChocoStrings)', () => {
  describe('func(concat)', () => {
    it('should concatenate the values', async () => {
      const expectedValue = chance.string();
      const otherExpectedValue = chance.string();

      expect(ChocoStrings.concat(' ', [
        expectedValue,
        otherExpectedValue,
      ])).toStrictEqual(`${expectedValue} ${otherExpectedValue}`);
    });

    it('should remove falsy values', async () => {
      const expectedValue = chance.string();
      const otherExpectedValue = chance.string();

      expect(ChocoStrings.concat(' ', [
        expectedValue,
        null,
        otherExpectedValue,
      ])).toStrictEqual(`${expectedValue} ${otherExpectedValue}`);
    });
  });
});
