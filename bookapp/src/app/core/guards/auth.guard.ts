import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DebugService } from '../services/debug';

export const authGuard: CanActivateFn = () => {

  const debug = inject(DebugService);
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isLoggedIn())
    debug.log("authGuard.AuthService.isLoggedIn returned true");
    return true;


  debug.log("authGuard.AuthService.isLoggedIn returned false");
  router.navigate(['/login']);
  return false;
};

