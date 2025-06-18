import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {LoginService} from './login-service';

export const loginGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.isLoggedIn()){
    return true;
  } else {
   return router.navigateByUrl('/');
  }
};
