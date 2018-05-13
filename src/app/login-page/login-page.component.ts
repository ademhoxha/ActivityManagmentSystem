import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from '../auth-api/auth-api.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  errorData : any = {}
  data: any = {}
  loginFlag: boolean;
  otpFlag: boolean;
  errorFlag : boolean;
  otpData : any = { duration : 3*60*1000}
  constructor(private router: Router, private http: Http, private authApiService: AuthApiService) {
    this.loginFlag = true;
    this.otpFlag = false;
    this.errorFlag = false;
  }

  ngOnInit() {
  }

  test: any;
  loginEnded(retData) {
    if (retData && retData.status == 200) {
      this.data = {
        email: retData.email,
        password: retData.password
      }
      this.loginFlag = false;
      setTimeout(() => { this.otpFlag = true; }, 200)
    }
    else{
      this.errorData.message = "OTP Request Error";
      setTimeout(() => { 
        this.errorFlag = true; 
      }, 200)
      setTimeout(() => { 
        this.errorFlag = false; 
      }, 10000)

    }
  }

  otpEnded(retData) {
    if (retData && retData.status == 200) {
      this.data.otpCode = retData.code;
      this.authApiService.login(this.data).then((res: any) => {
        if (res.status = 200) {
          this.otpFlag = false;
          this.router.navigate(['/success'])
        }
        else{
          this.errorData.message = "OTP Login Error";
          this.otpFlag = false;
          setTimeout(() => { 
            this.errorFlag = true; 
            this.loginFlag = true;
          }, 200)
          setTimeout(() => { 
            this.errorFlag = false; 
          }, 10000)
        }
      });
    }
    else {
      this.otpFlag = false;
      this.errorData.message = "Invalid OTP Code";
      setTimeout(() => { 
        this.errorFlag = true; 
        this.loginFlag = true;
      }, 200)
      setTimeout(() => { 
        this.errorFlag = false; 
      }, 10000)
    }
  }


}
