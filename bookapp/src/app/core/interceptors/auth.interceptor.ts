import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DebugService } from '../services/debug';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const platformId = inject(PLATFORM_ID);
  const debug = inject(DebugService);

  if (!isPlatformBrowser(platformId))
    debug.log("SSR request, no token added", req.url);
    return next(req);

  const auth = inject(AuthService);
  const token = localStorage.getItem('auth_token');

  if (token) {

    debug.log("Token added to request", req.url);

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

  } else {
    debug.warn("No token found", req.url);
  }

  return next(req);
};

