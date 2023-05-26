import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupEmail!: string;
  signupPassword!: string;
  firstName!: string;
  lastName!: string;

  SignupDetails() {
    console.log(this.signupEmail);
    console.log(this.signupPassword);
    console.log(this.firstName + ' ' + this.lastName);
  }
}
