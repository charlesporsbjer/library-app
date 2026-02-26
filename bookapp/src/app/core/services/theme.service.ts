import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { firstValueFrom, catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private key = 'theme';
  private apiUrl = 'https://library-app-5m14.onrender.com/api/users/theme';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  /** Initialize the theme: first tries server, then localStorage, then defaults to light */
  async init() {
    let theme: string | null = null;

    if (isPlatformBrowser(this.platformId)) {
      // Try local storage first as a cache
      theme = localStorage.getItem(this.key);
    }

    if (!theme && isPlatformBrowser(this.platformId)) {
      // Try server
      try {
        const res: any = await firstValueFrom(
          this.http.get(this.apiUrl).pipe(
            catchError(() => of({ theme: 'light' }))
          )
        );
        theme = res.theme ?? 'light';
      } catch {
        theme = 'light';
      }
    }

    if (!theme) theme = 'light';

    this.apply(theme);
  }

  /** Toggle theme and persist to server */
  async toggle() {
    const current = this.get();
    const newTheme = current === 'dark' ? 'light' : 'dark';
    this.apply(newTheme);

    if (isPlatformBrowser(this.platformId)) {
      try {
        await firstValueFrom(this.http.post(this.apiUrl, { theme: newTheme }).pipe(
          catchError(() => of(null)) // fail silently
        ));
      } catch {}
    }
  }

  /** Apply theme to document and local storage */
  private apply(theme: string) {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.setAttribute('data-bs-theme', theme);
      localStorage.setItem(this.key, theme);
    }
  }

  /** Get current theme (from localStorage) */
  get(): string {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.key) ?? 'light';
    }
    return 'light'; // SSR default
  }

  /** Returns true if dark mode */
  isDark(): boolean {
    return this.get() === 'dark';
  }
}
