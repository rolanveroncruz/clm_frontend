import { Component } from '@angular/core';
import {CertsTableService} from '../certs-table';
// @ts-ignore
import {GetCertsResponse} from '../certs-types'
@Component({
  selector: 'app-dashboard',
  imports: [
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  certsList: Certificate[] = [];
  //TODO: Work on Dashboard
 constructor( private certsService: CertsTableService){
    this.certsService.getAllCerts().subscribe(
      certs => this.processCerts(certs),
    )
 }

  private processCerts(certs:GetCertsResponse){
   let result: Certificate[] = [];
   for(let i=0; i<certs.certs.length; i++){
     let cert: Certificate = certs.certs[i];
     result.push(cert)
   }
   this.certsList = result;
    console.log("In dashboard.processCerts()", this.certsList.length, " certs.");
   }
}
