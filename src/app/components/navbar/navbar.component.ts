import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { APP_ROUTES } from '../../config/app-routes.config';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  authService = inject(AuthService);
  router = inject(Router);
  logout() {
    this.authService.logout();
    this.router.navigate([APP_ROUTES.login]);
  }
}
