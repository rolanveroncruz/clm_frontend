import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DashboardTopNav} from '../topnav/topnav';
import {CertsTable} from '../certs-table/certs-table';
import {CertMap} from '../../certs-types';

@Component({
  selector: 'dashboard-body',
  imports: [
    DashboardTopNav,
    CertsTable
  ],
  templateUrl: './dashboard-body.html',
  styleUrl: './dashboard-body.scss'
})

export class DashboardBody implements OnInit, OnChanges {
  @Input() dbBodyCertsMap: CertMap | undefined;
  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("In DB:ngOnChanges", changes);
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const change = changes[propName];
        const current = JSON.stringify(change.currentValue);
        const previous = JSON.stringify(change.previousValue);
        console.log(`DB: propName: ${propName}`);
        console.log(`DB: previous value: ${previous}`);
        console.log(`DB: currennt value: ${current}`);
      }
    }
  }

  ngOnInit(): void {
    console.log("In dashboard-body.ngOnInit, map is:", this.dbBodyCertsMap);
  }
}
