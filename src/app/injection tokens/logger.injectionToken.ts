import { InjectionToken } from '@angular/core';
import { LoggerService } from '../services/logger.service';

export const LoggerToken = new InjectionToken<LoggerService[]>('LoggerService');
