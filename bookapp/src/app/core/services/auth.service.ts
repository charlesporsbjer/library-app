import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { isPlatformBrowser } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = 'https://library-app-5m14.onrender.com/api/auth';
  private tokenKey = 'auth_token';

  private platformId = inject(PLATFORM_ID);

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.api}/register`, {
      username,
      password
    });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<{token: string}>(`${this.api}/login`, {
      username,
      password
    }).pipe(
      tap(res => {
        if (this.isBrowser()) {
          localStorage.setItem(this.tokenKey, res.token);
        }
      })
    );
  }

  logout() {
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
    return this.getToken() !== null;
  }

}

