import { ApplicationConfig, provideZoneChangeDetection, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth/interceptors/auth.interceptor';
import { CvService } from './cv/services/cv.service';
import { APP_CONST } from './config/const.config';
import { FakeCvService } from './cv/services/fake-cv.service';
import { v4 as uuidv4 } from 'uuid';
import { UUID_TOKEN } from './injection tokens/uuid.injectiont-token';
import { LoggerToken } from './injection tokens/logger.injectionToken';
import { LoggerService } from './services/logger.service';
import { Logger2Service } from './services/logger2.service';
import { Logger3Service } from './services/logger3.service';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR',
    },
    {
      provide: UUID_TOKEN,
      useValue: uuidv4,
    },
    {
      provide: CvService,
      useClass: APP_CONST.env == 'prod' ? CvService : FakeCvService,
    },
    {
      provide: LoggerToken,
      useClass: Logger2Service,
      multi:true
    },
    {
      provide: LoggerToken,
      useClass: LoggerService,
      multi: true
    },{
      provide: LoggerToken,
      useClass: Logger3Service,
      multi: true
    },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
};

// export const authInterceptorProvider = {
//   provide: HTTP_INTERCEPTORS,
//   useClass: NomDeNotreClass,
//   multi: true
// }
