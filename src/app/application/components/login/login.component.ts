import {Component} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private readonly authService: AuthService, private readonly router: Router) {
  }

  login() {
    this.authService.loggedIn = true;
    const redirectUrl = this.authService.redirectUrl = this.authService.redirectUrl ?? "/";
    this.authService.clearRedirectUrl()
    this.router.navigate([redirectUrl]);
  }
}
