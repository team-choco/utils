import { Fetch } from '../fetch';
import { Arrays } from '../arrays';

import * as Exports from '../';
import { Logger, isLogType } from '../logger';
import { ChocoRandom } from '../random';

describe('Exports', () => {
  it('should export the utilities', () => {
    expect(Exports).toEqual({
      Fetch: Fetch,
      Arrays: Arrays,
      Logger: Logger,
      isLogType: isLogType,
      ChocoRandom: ChocoRandom,
    });
  });
});
