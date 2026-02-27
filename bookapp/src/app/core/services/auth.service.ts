import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { isPlatformBrowser } from '@angular/common'

import { DebugService } from './debug';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = 'https://library-app-5m14.onrender.com/api/auth';
  private tokenKey = 'auth_token';
  private platformId = inject(PLATFORM_ID);

  constructor(
    private http: HttpClient,
    private router: Router,
    private debug: DebugService
  ) {}

  private isBrowser(): boolean {
    this.debug.log("AuthService.isBrowser returned ", isPlatformBrowser(this.platformId));
    return isPlatformBrowser(this.platformId);
  }

  register(username: string, password: string): Observable<any> {
    this.debug.log("AuthService.register called");
    return this.http.post(`${this.api}/register`, {
      username,
      password
    });
  }

  login(username: string, password: string): Observable<any> {
    this.debug.log("AuthService.login called");
    return this.http.post<{token: string}>(`${this.api}/login`, {
      username,
      password
    }).pipe(
      tap(res => {
        if (this.isBrowser()) {
          this.debug.log("[DEBUG] Saving token:", res.token);
          localStorage.setItem(this.tokenKey, res.token);
        }
      })
    );
  }

  logout() {
    this.debug.log("AuthService.logout called");
    if (this.isBrowser()) {
      localStorage.removeItem(this.tokenKey);
    }
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    if (!this.isBrowser())
      return null;
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();

    if (!token) {
      this.debug.log("AuthService.isLoggedIn found no token");
      return false;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));

    this.debug.log("AuthService.isLoggedIn found a token");
    return payload.exp * 1000 > Date.now();
  }

}

