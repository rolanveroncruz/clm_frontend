import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Login} from './login';
import {Homepage} from './homepage/homepage';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Homepage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'clm-frontend';
  constructor(private loginService:Login ) {
  }
}
