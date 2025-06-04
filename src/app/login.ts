import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const CLMServer = "http://localhost:6000";

@Injectable({
  providedIn: 'root'
})
export class Login {
  token: string | null = null;


  constructor(private http: HttpClient) {

  }

  isLoggedIn(): boolean {
    return this.token == null;
  }

  LogIn(email: string, password: string): void {
    let data = {
      email: email,
      password: password
    };
    this.http.post(CLMServer, data).subscribe({
      next: (data:any)=>{
        this.token = data.token;
      },
      error: (error:any)=>{
        console.log(error);
      },
        complete: ()=>{console.log("Completed")}
    });
  }
}
