import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {config} from './config'
import {Observable, tap, map} from 'rxjs';
// @ts-ignore
import {Certificate, JSONCertificateToCertificate, GetCertsResponse} from './certs-types';
import {LoginService} from './login-service';


@Injectable({
  providedIn: 'root'
})
export class CertsTableService {
  clmServer: string;
  allCertsMap: Map<string, Certificate> = new Map();


  constructor(private http: HttpClient, private loginService:LoginService) {
    this.clmServer = config.clmServer;
  }
  getAllCerts(): Observable<GetCertsResponse> {

    let url = `${this.clmServer}/get_certs`;
    let headers:HttpHeaders = new HttpHeaders({ 'Authorization': `Bearer ${this.loginService.GetToken()}` });
    // @ts-ignore
    // @ts-ignore
    return this.http.get<GetCertsResponse>(url, headers)
      .pipe(
      tap(
        data => this.tap_processCertsList(data)
      ),
      map(
        certs => map_processCertsList(certs)
      )
    );
  }
  private tap_processCertsList(theList: any): Certificate[] {
    let result: Certificate[] = [];
    for (let i=0; i<theList.certs.length; i++){
      let cert: Certificate = JSONCertificateToCertificate(theList.certs[i]);
      result.push(cert)
      this.allCertsMap.set(cert.subject.commonName, cert);
    }
    //console.log("In certs-table.processCertsList()", result.length, " certs.");
    //console.log("In certs-table.processCertsList()", this.allCertsMap);
    return result;
  }
}

function map_processCertsList(theList:any): GetCertsResponse{
  return theList;
}

