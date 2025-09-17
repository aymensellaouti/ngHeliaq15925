import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { APP_CONST } from '../../config/const.config';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  if (authService.isAuthenticated()) {
    // const params = new HttpParams().set(APP_CONST.accessToken, this.authService.getToken());
    //, this.authService.getToken());
    const newReq = req.clone({
      setHeaders: {
        [APP_CONST.authentificationHeader]: authService.getToken(),
      },
    });
    return next(newReq);
  }
  return next(req);
};
