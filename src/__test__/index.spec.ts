import * as Exports from '../';

describe('Exports', () => {
  it('should export the utilities', () => {
    expect(Object.keys(Exports)).toEqual([
      'Fetch',
      'Arrays',
      'Logger',
      'isLogType',
      'ChocoRandom',
      'ChocoStrings',
    ]);
  });
});
