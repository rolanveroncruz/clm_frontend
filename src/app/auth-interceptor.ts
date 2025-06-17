import {HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {inject} from '@angular/core';
import {LoginService} from './login-service';

export const jwtInterceptor: HttpInterceptorFn = (req:HttpRequest<unknown>, next:HttpHandlerFn) => {
  const authToken = inject(LoginService).GetToken();
  req = req.clone({
    setHeaders:{
      'Authorization': `Bearer ${authToken}`,
    }
  });
  return next(req);
};
