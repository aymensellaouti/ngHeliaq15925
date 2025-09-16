import { inject, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

// V6 Angular
@Injectable({
  // Lazy Loading, Tree shaking
  providedIn: 'root',
})
export class FirstService {
  loggerService = inject(LoggerService);
  sayHello() {
    this.loggerService.log('Hello');
  }
}
