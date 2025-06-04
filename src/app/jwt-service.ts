import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private jwtHelper:JwtHelperService) { }

  decodeToken(token:string){
    try{
      return this.jwtHelper.decodeToken(token)
    } catch(error){
      return null;
    }
  }

  getTokenExpirationDate(token:string):Date|null{
    return this.jwtHelper.getTokenExpirationDate(token);
  }

  isTokenExpired(token:string):boolean{
    return this.jwtHelper.isTokenExpired(token);
  }

}
