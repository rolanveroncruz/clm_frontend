import {Component, OnInit} from '@angular/core';
import {CertsTableService} from '../certs-table';
// @ts-ignore
import {Certificate, GetCertsResponse, JSONCertificateToCertificate} from '../certs-types';
import {LocalStorageService} from '../local-storage-service';
import {LoginService} from '../login-service';


@Component({
  selector: 'app-dashboard',
  imports: [
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  certsMap: Map<string, Certificate> = new Map();
  //TODO: Work on Dashboard
 constructor( private certsService: CertsTableService, private loginService: LoginService) {
    this.certsService.getAllCerts().subscribe(
      certs => this.processCerts(certs),
    )

 }

  private processCerts(certs:GetCertsResponse){
   for(let i=0; i<certs.certs.length; i++){
     let cert: Certificate = JSONCertificateToCertificate(certs.certs[i]);
     this.certsMap.set(cert.subject.commonName, cert);
   }
    console.log("In dashboard.processCerts()", this.certsMap, " certs.");
   }

  ngOnInit(): void {
  }
}
