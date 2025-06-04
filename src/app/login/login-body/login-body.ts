import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LoginService} from '../../login-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-body',
  imports: [
    FormsModule
  ],
  templateUrl: './login-body.html',
  styleUrl: './login-body.scss'
})
export class LoginBody {
  email: string = "";
  password: string = "";
  constructor(private loginService: LoginService, private router: Router) { }

  onLoginClicked(): void{
    this.loginService.LogIn(this.email, this.password).subscribe({
      next: result => {
        if (result.email==this.email) {
          this.router.navigate(['dashboard'])
        }else{
          this.router.navigate(['login']);
        }
      }
    })
  }

}
