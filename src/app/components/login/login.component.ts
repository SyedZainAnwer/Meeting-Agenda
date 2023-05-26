import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginEmail!: string;
  loginPassword!: string;

  loginDetails() {
    console.log(this.loginEmail, this.loginPassword);
  }

}
