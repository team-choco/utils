import { Strings } from '../strings';
import { chance } from './chance';

describe('Utils(Strings)', () => {
  describe('func(concat)', () => {
    it('should concatenate the values', async () => {
      const expectedValue = chance.string();
      const otherExpectedValue = chance.string();

      expect(Strings.concat(
        expectedValue,
        otherExpectedValue,
      )).toStrictEqual(`${expectedValue} ${otherExpectedValue}`);
    });

    it('should remove falsy values', async () => {
      const expectedValue = chance.string();
      const otherExpectedValue = chance.string();

      expect(Strings.concat(
        expectedValue,
        null,
        otherExpectedValue,
      )).toStrictEqual(`${expectedValue} ${otherExpectedValue}`);
    });
  });
});
