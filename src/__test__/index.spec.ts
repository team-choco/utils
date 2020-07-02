import { Fetch } from '../fetch';
import { Arrays } from '../arrays';

import * as Exports from '../';
import { Logger, isLogType } from '../logger';

describe('Exports', () => {
  it('should export the utilities', () => {
    expect(Exports).toEqual({
      Fetch: Fetch,
      Arrays: Arrays,
      Logger: Logger,
      isLogType: isLogType,
    });
  });
});
