import chalk from 'chalk';
import { LogMetadataType, LogType } from './types';

const LogMetadata: LogMetadataType = {
  'trace': {
    color: chalk.magenta,
    label: 'trace',
    level: 3,
  },
  'info': {
    color: chalk.cyan,
    label: 'info',
    level: 2,
  },
  'warn': {
    color: chalk.yellow,
    label: 'warn',
    level: 1,
  },
  'error': {
    color: chalk.red,
    label: 'error',
    level: 0,
  },
};

export class Logger {
  private level: number;

  constructor(level: LogType = 'info') {
    this.level = LogMetadata[level].level;
  }

  format(type: LogType, ...message: any[]): string {
    const { color, label } = LogMetadata[type];

    return color(`${chalk.bold(`[${new Date().toISOString()}] (${label}):`)} ${message.join(' ')}`);
  }

  log(type: LogType, ...message: any[]): void {
    const { level } = LogMetadata[type];

    if (level > this.level) return;

    console.log(this.format(type, ...message));
  }

  trace(...message: any[]): void {
    this.log('trace', ...message);
  }

  info(...message: any[]): void {
    this.log('info', ...message);
  }

  warn(...message: any[]): void {
    this.log('warn', ...message);
  }

  error(...message: any[]): void {
    this.log('error', ...message);
  }
}
