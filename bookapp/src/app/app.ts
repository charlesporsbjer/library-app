import { Component, signal, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { NavbarComponent } from './navbar/navbar';
import { ThemeService } from './core/services/theme.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('bookapp');

  constructor(public auth: AuthService, private themeService: ThemeService, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize theme when running in browser
      this.themeService.init();
    }
  }

  toggleTheme() {
    this.themeService.toggle();
  }

  logout() {
    this.auth.logout();
  }
}
