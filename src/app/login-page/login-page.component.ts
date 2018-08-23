import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from '@app/login-page/auth-api/auth-api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  errorData : any = {}
  data: any = {}
  loginFlag: boolean;
  otpFlag: boolean;
  errorFlag : boolean;
  otpData : any = { duration : 3*60*1000}
  constructor(private router: Router, private authApiService: AuthApiService) {
    this.loginFlag = true;
    this.otpFlag = false;
    this.errorFlag = false;
  }

  ngOnInit() {
  }

  loginEnded(retData) {
    if (retData && retData.status == 200) { // otp enabled ad otp sended
      this.data = {
        email: retData.email,
        password: retData.password
      }
      this.loginFlag = false;
      setTimeout(() => { this.otpFlag = true; }, 200)
    }
    else if(retData && retData.status == 204){  // otp is not enbaled
      this.data = {
        email: retData.email,
        password: retData.password
      }
      return this.loginWithoutOTP();
    }
    else{ // otp enabled but not sended or some server errors
      this.errorData.message = retData.message;
      setTimeout(() => { 
        this.errorFlag = true; 
      }, 200)
      setTimeout(() => { 
        this.errorFlag = false; 
      }, 4000)

    }
  }

  otpEnded(retData) {
    if (retData && retData.status == 200) {
      this.data.otpCode = retData.code;
      this.authApiService.login(this.data).then((res: any) => {
        if (res.status == 200) {
          this.otpFlag = false;
          this.router.navigate(['/dashboard'])
        }
        else{
          this.errorData.message = res.message;
          this.otpFlag = false;
          setTimeout(() => { 
            this.errorFlag = true; 
            this.loginFlag = true;
          }, 200)
          setTimeout(() => { 
            this.errorFlag = false; 
          }, 4000)
        }
      });
    }
    else {
      this.otpFlag = false;
      this.errorData.message = retData.message;
      setTimeout(() => { 
        this.errorFlag = true; 
        this.loginFlag = true;
      }, 200)
      setTimeout(() => { 
        this.errorFlag = false; 
      }, 4000)
    }
  }

  loginWithoutOTP() {
    this.authApiService.login(this.data).then((res: any) => {
      if (res.status == 200) {
        this.router.navigate(['/dashboard/resume'])
      }
      else{
        this.errorData.message = res.message;
        this.loginFlag = false;
        setTimeout(() => { 
          this.loginFlag = true;
        }, 10)
        setTimeout(() => { 
          this.errorFlag = true; 
        }, 200)
        setTimeout(() => { 
          this.errorFlag = false; 
        }, 4000)
      }
    });
  }

}
