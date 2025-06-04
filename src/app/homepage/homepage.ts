import { Component } from '@angular/core';
import {Header} from './header/header';
import {HomeBody} from './home-body/home-body';
import {Footer} from './footer/footer';

@Component({
  selector: 'app-homepage',
  imports: [
    Header,
    HomeBody,
    Footer
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {

}
