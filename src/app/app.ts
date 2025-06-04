import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginService} from './login-service';
import {Homepage} from './homepage/homepage';
import {Login} from './login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'clm-frontend';
  isLoggedIn: boolean = false;
  constructor(private loginService:LoginService ) {
    let isLoggedIn = this.loginService.isLoggedIn();
    if (isLoggedIn) {
    }else {
      console.log('Not Logged out');
    }
  }
}
