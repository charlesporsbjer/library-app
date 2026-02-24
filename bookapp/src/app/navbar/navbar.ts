import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { ThemeService } from '../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  constructor(public auth: AuthService, private theme: ThemeService) {}

  get isDark() {
    return this.theme.isDark();
  }

  toggleTheme() {
    this.theme.toggle();
  }

  logout() {
    this.auth.logout();
  }
}
