import {Component, inject} from '@angular/core';
import {LoginHeader} from './login-header/login-header';
import {LoginBody} from './login-body/login-body';

@Component({
  selector: 'app-login',
  imports: [
    LoginHeader,
    LoginBody
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
}
