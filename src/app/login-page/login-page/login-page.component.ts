import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginFlag: boolean;
  otpFlag: boolean;
  constructor(private router: Router) {
    this.loginFlag = true;
    this.otpFlag = false;
  }

  ngOnInit() {
    this.test = "LOGIN START =>";
  }

  test : string = "INIT";
  loginEnded(data) {
    this.test = "LOGIN ENDED =>"+data.status;
    if (data && data.status == 200) {
      this.loginFlag = false;
      setTimeout(() => { this.otpFlag = true; }, 200)
    }
  }

  otpEnded(data) {
    this.test = "LOGIN ENDED =>"+data.status;
    if (data && data.status == 200) {
      this.router.navigate(['/success'])
    }
    else {
      this.otpFlag = false;
      setTimeout(() => { this.loginFlag = true; }, 200)
    }
  }


}
