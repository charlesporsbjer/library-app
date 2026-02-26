import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private key = 'theme';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  init() {
    if (isPlatformBrowser(this.platformId)) {
      const theme = this.get();
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  toggle() {
    const current = this.get();
    this.set(current === 'dark' ? 'light' : 'dark');
  }

  set(theme: string) {
    if (isPlatformBrowser(this.platformId)) {
      console.log('ThemeService: setting theme to', theme);
      document.documentElement.setAttribute('data-bs-theme', theme);
      localStorage.setItem(this.key, theme);
    }
  }

  get(): string {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.key) || 'light';
    }
    return 'light'; // Default for Server-Side Rendering
  }

  isDark(): boolean {
    return this.get() === 'dark';
  }
}

