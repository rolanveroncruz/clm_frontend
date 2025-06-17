import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {config} from './config'
import {Observable, tap, map} from 'rxjs';
// @ts-ignore
import {Certificate, GetCertsResponse} from './certs-types';
import {LoginService} from './login-service';

@Injectable({
  providedIn: 'root'
})
export class CertsTableService {
  clmServer: string;
  allCertsList: Certificate[] = [];


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
      let cert: Certificate = theList.certs[i];
      result.push(cert)
    }
    this.allCertsList = result;
    console.log("In certs-table.processCertsList()", this.allCertsList.length, " certs.");
    return result;
  }
}

function map_processCertsList(theList:any): GetCertsResponse{
  console.log(theList);
  return theList;

}

