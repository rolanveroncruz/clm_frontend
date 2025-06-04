import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, map,tap} from 'rxjs';
import {JwtService} from './jwt-service';

//const CLMServer = "http://localhost:6000";
const CLMServer = "/api";

export interface LoginData{
  email:string;
  name:string;
  token:string;
}
export interface LoginResult{
  email:string;
  name:string;
  expiration:Date|null;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string | null = null;
  user: LoginResult|null = null;


  constructor(private http: HttpClient, private jwtHelper:JwtService) {

  }

  isLoggedIn(): boolean {
    return this.token == null;
  }

  LogIn(email: string, password: string): Observable<LoginResult>{
    let data = {
      email: email,
      password: password
    };
    let url = `${CLMServer}/login`;

    // TODO: Figure out if login is unsuccessful from wrong email/password or server problems, etc.
    // TODO: And what to do
    return this.http.post<LoginData>(url, data)
      .pipe(
      tap(
        value=> this.processLoginUser(value)
      ),
      map(
        (userData) =>
        {
          return { email: userData.email,
            name: userData.name,
            expiration: this.computeExpirationFromToken(userData.token)
          }
        }
        ) // map(
      ); //pipe(
  }

  private processLoginUser(user: LoginData):void {
    let expiration = this.computeExpirationFromToken(user.token);
    this.user = {email : user.email, name:user.name, expiration:expiration} as LoginResult;
  }

  private computeExpirationFromToken(token:string):Date|null {
    let expiration = this.jwtHelper.getTokenExpirationDate(token);
    console.log(expiration);
    return  expiration;
  }
  }
