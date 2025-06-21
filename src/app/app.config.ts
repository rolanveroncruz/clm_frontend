import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import {JWT_OPTIONS, JwtHelperService} from '@auth0/angular-jwt';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {jwtInterceptor} from './auth-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch(),
      withInterceptors([jwtInterceptor])
    ),
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},JwtHelperService
  ]
};
