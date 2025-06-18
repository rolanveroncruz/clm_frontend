import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, map,tap} from 'rxjs';
import {JwtService} from './jwt-service';
import {config} from './config';
import {PLATFORM_ID, inject} from '@angular/core';
import {isPlatformBrowser, isPlatformServer} from '@angular/common';
import {LocalStorageService} from './local-storage-service';
//const CLMServer = "/api";

// LoginData is the structure returned by the server when making a post to CLMServer/login.
export interface LoginData{
  email:string;
  name:string;
  token:string;
}
// LoginResult is the structure we actually save as User's information.
export interface LoginResult{
  email:string;
  name:string;
  token:string;
  expiration:string;
}
const lsLoginResult: string = "lsLoginResult";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  clmServer:string;
  token: string | null = null;
  user: LoginResult|null = null;


  constructor(private http: HttpClient, private jwtHelper:JwtService, private localStorageService:LocalStorageService) {
    const platformId = inject(PLATFORM_ID);
    console.log('Identity CSR: ', isPlatformBrowser(platformId));
    console.log('Identity SSR: ', isPlatformServer(platformId));
    this.clmServer = config.clmServer
  }

  LoadFromLocalStorage(){
    let userLoginResult = localStorage.getItem("userLoginResult");
    if (userLoginResult) {
      let user = JSON.parse(userLoginResult);
      if (user.expiration < Date.now()) {
        this.user = user;
      }else{
        localStorage.removeItem("userLoginResult");
        this.user = null;
      }
    }else{
      this.user = null;
    }

  }

  isLoggedIn(): boolean {
    return this.user !== null;
  }

  LogIn(email: string, password: string): Observable<LoginResult>{
    let data = {
      email: email,
      password: password
    };
    let url = `${this.clmServer}/login`;

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
          let exp = this.computeExpirationFromToken(userData.token)
          if (exp === undefined){
            exp = "";
          }
          return { email: userData.email,
            name: userData.name,
            expiration:exp,
            token: userData.token
          }
        }
        ) // map(
      ); //pipe(
  }

  public GetToken(): string|undefined {
    return this.user?.token;
  }

  private processLoginUser(user: LoginData):void {
    let expiration = this.computeExpirationFromToken(user.token);
    this.token = user.token;
    this.user = {email : user.email, name:user.name, expiration:expiration, token:user.token} as LoginResult;
    this.localStorageService.setItem(lsLoginResult, JSON.stringify(this.user));

  }

  private computeExpirationFromToken(token:string):string|undefined {
    let expiration = this.jwtHelper.getTokenExpirationDate(token);
    console.log(expiration);
    if (expiration ==null){
      return "";
    }
    else {
      return  expiration.toString();
    }
  }
  }
