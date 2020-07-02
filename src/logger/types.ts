import { Chalk } from 'chalk';

export interface LogMetadataDetails {
    color: Chalk;
    label: string;
    level: number;
}

export interface LogMetadataType {
    'trace': LogMetadataDetails;
    'info': LogMetadataDetails;
    'warn': LogMetadataDetails;
    'error': LogMetadataDetails;
}

export type LogType = keyof LogMetadataType;