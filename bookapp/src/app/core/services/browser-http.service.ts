import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BrowserHttpService {

  private platformId = inject(PLATFORM_ID);

  constructor(private http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    if (!isPlatformBrowser(this.platformId))
      return EMPTY;

    return this.http.get<T>(url);
  }

  post<T>(url: string, body: any): Observable<T> {
    if (!isPlatformBrowser(this.platformId))
      return EMPTY;

    return this.http.post<T>(url, body);
  }

  put<T>(url: string, body: any): Observable<T> {
    if (!isPlatformBrowser(this.platformId)) {
      return EMPTY;
    }
    return this.http.put<T>(url, body);
  }

  delete<T>(url: string): Observable<T> {
    if (!isPlatformBrowser(this.platformId)) {
      return EMPTY;
    }
    return this.http.delete<T>(url);
  }
}
