import { ApplicationConfig, provideZoneChangeDetection, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import { FirstService } from './services/first.service';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR',
    },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
