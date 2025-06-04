import { Component } from '@angular/core';
import {Bigpic} from './bigpic/bigpic';
import {Keyfeatures} from './keyfeatures/keyfeatures';
import {Benefits} from './benefits/benefits';
import {Packages} from './packages/packages';
import {Getstarted} from './getstarted/getstarted';

@Component({
  selector: 'app-home-body',
  imports: [
    Bigpic,
    Keyfeatures,
    Benefits,
    Packages,
    Getstarted
  ],
  templateUrl: './home-body.html',
  styleUrl: './home-body.scss'
})
export class HomeBody {

}
