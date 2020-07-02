import { Logger } from '../logger';
import { chance } from './chance';

jest.useFakeTimers();

describe('Class(Logger)', () => {
  describe('func(log)', () => {
    it('should log the message', () => {
      jest.spyOn(Date.prototype, 'toISOString').mockReturnValue(chance.date().toISOString());
      jest.spyOn(console, 'log');

      const expectedLog = chance.string();

      const logger = new Logger();

      logger.log('info', expectedLog);

      expect(console.log).toBeCalledTimes(1);
      expect(console.log).toBeCalledWith(logger.format('info', expectedLog));
    });

    it('should ignore messages below the specified level', () => {
      const logger = new Logger();

      logger.log('trace', chance.string());

      expect(console.log).toBeCalledTimes(0);
    });
  });

  describe('func(trace)', () => {
    it('should be a shorthand for log(trace)', () => {
      const expectedLog = chance.string();

      const logger = new Logger();

      jest.spyOn(logger, 'log').mockReturnValue(undefined);

      logger.trace(expectedLog);

      expect(logger.log).toBeCalledTimes(1);
      expect(logger.log).toBeCalledWith('trace', expectedLog);
    });
  });

  describe('func(info)', () => {
    it('should be a shorthand for log(info)', () => {
      const expectedLog = chance.string();

      const logger = new Logger();

      jest.spyOn(logger, 'log').mockReturnValue(undefined);

      logger.info(expectedLog);

      expect(logger.log).toBeCalledTimes(1);
      expect(logger.log).toBeCalledWith('info', expectedLog);
    });
  });

  describe('func(warn)', () => {
    it('should be a shorthand for log(warn)', () => {
      const expectedLog = chance.string();

      const logger = new Logger();

      jest.spyOn(logger, 'log').mockReturnValue(undefined);

      logger.warn(expectedLog);

      expect(logger.log).toBeCalledTimes(1);
      expect(logger.log).toBeCalledWith('warn', expectedLog);
    });
  });

  describe('func(error)', () => {
    it('should be a shorthand for log(error)', () => {
      const expectedLog = chance.string();

      const logger = new Logger();

      jest.spyOn(logger, 'log').mockReturnValue(undefined);

      logger.error(expectedLog);

      expect(logger.log).toBeCalledTimes(1);
      expect(logger.log).toBeCalledWith('error', expectedLog);
    });
  });
});
