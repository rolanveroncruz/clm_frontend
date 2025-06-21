import { Component,OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginService} from './login-service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected title = 'clm-frontend';
  isLoggedIn: boolean = false;
  constructor(private loginService:LoginService, private theRouter:Router  ) {
  }

  ngOnInit(): void {
    this.loginService.LoadFromLocalStorage();
    let isLoggedIn = this.loginService.isLoggedIn();
    if (isLoggedIn) {
      this.theRouter.navigate(['/dashboard']);

    }else {

    }
  }
}
