import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DebugService } from '../services/debug';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const platformId = inject(PLATFORM_ID);
  const debug = inject(DebugService);

  debug.log("[DEBUG] Interceptor triggered:", req.url);

  if (!isPlatformBrowser(platformId)){
    debug.log("[DEBUG] SSR request — skipping token");
    return next(req);
  }

  const token = localStorage.getItem('auth_token');
  debug.log("[DEBUG] Token from localStorage:", token);

  if (token) {

    debug.log("Token added to request", req.url);

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

  debug.log("[DEBUG] Authorization header added");

  } else {
    debug.warn("[DEBUG] No token found", req.url);
  }

  return next(req);
};

