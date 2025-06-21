import {Component, Input, OnChanges, SimpleChanges,} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {Certificate} from '../../certs-types';

@Component({
  selector: 'dashboard-certs-table',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent
  ],
  templateUrl: './certs-table.html',
  styleUrl: './certs-table.scss'
})
export class CertsTable implements OnChanges {
  @Input() ctCertsMap: Map<string, Certificate> | undefined;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    for (const propNmame in changes){
      if (changes.hasOwnProperty(propNmame)) {
        const change = changes[propNmame];
        const current = JSON.stringify(change.currentValue);
        const previous= JSON.stringify(change.previousValue);
        console.log(`CT: propName: ${propNmame}`);
        console.log(`CT: previous value: ${previous}`);
        console.log(`CT: currennt value: ${current}`);
      }
    }
  }
}

