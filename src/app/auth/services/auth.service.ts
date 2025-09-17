import { inject, Injectable } from '@angular/core';
import { APP_CONST } from '../../config/const.config';
import { CredentialsDto } from '../dto/credentials.dto';
import { Observable, tap } from 'rxjs';
import { LoginResponseDto } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { APP_API } from '../../config/app-api.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  http = inject(HttpClient);

  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(APP_API.login, credentials).pipe(
      tap((response) => {
        this.saveToken(response.id);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getToken(): string {
    return localStorage.getItem(APP_CONST.tokenKey) ?? '';
  }

  clearToken(): void {
    localStorage.removeItem(APP_CONST.tokenKey);
  }

  saveToken(tokenValue: string): void {
    localStorage.setItem(APP_CONST.tokenKey, tokenValue);
  }

  logout() {
    this.clearToken();
  }
}
