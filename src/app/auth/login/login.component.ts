import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CredentialsDto } from '../dto/credentials.dto';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { APP_ROUTES } from '../../config/app-routes.config';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  authService = inject(AuthService);
  router = inject(Router);
  toaster = inject(ToastrService);
  login(credentials: CredentialsDto) {
    this.authService.login(credentials).subscribe({
      next: (response) => {
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e) => {
        this.toaster.error('Veuillez vérifier vos credentials')
      }
    })
  }

}
