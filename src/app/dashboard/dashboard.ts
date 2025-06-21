import {ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import {CertsTableService} from '../certs-table';
// @ts-ignore
import {Certificate, CertMap, GetCertsResponse, JSONCertificateToCertificate} from '../certs-types';
import {DashboardSideNav} from './sidenav/sidenav';
import {DashboardBody} from './dashboard-body/dashboard-body';

@Component({
  selector: 'app-dashboard',
  imports: [
    DashboardSideNav,
    DashboardBody
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
 dashboardCertsMap: CertMap|undefined;
 constructor( private certsService: CertsTableService, private ngZone: NgZone, private cdr: ChangeDetectorRef ) {
 }

  ngOnInit(): void {
    this.certsService.getAllCerts().subscribe(
      certs => this.processCerts(certs),
    )
  }

  private processCerts(certs:GetCertsResponse){
    let tempCertMap =new Map<string, Certificate>();
    for(let i=0; i<certs.certs.length; i++){
      let cert: Certificate = JSONCertificateToCertificate(certs.certs[i]);
      tempCertMap.set(cert.subject.commonName, cert);
    }
    console.log("in dashboard.processCerts, this.dashboardCertsMap is:", this.dashboardCertsMap);
    let previousRef = this.dashboardCertsMap;
    console.log("In dashboard.processCerts(), tempCertMap is:", tempCertMap, " certs.");
      this.dashboardCertsMap = tempCertMap;
      console.log("running in ngZone.run()")
      console.log("In dashboard.processCerts() this.dashboardCertsMap is:", this.dashboardCertsMap, " certs.");
      console.log("Is this.dashboardCertsMap reference new?", this.dashboardCertsMap !== previousRef);
      this.cdr.detectChanges();
  }

}
