import {CanActivateChildFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth.service';

export const authGuard: CanActivateChildFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.loggedIn) {
    return true;
  }

  authService.redirectUrl = state.url;
  router.navigate(['/login']);
  return false;
};
