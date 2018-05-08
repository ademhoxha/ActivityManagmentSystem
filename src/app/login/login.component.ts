import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private httpClient: HttpClient,private formBuilder: FormBuilder) {
    this.initForm();
   }

  ngOnInit() {
  }

  password: FormControl;
  email: FormControl;
  initForm() {
    this.loginForm = this.formBuilder.group({
      password: new FormControl('', 
            Validators.compose([Validators.required]) ),
      email: new FormControl('', 
            Validators.compose([Validators.required]) )
    });

    this.password = <FormControl>this.loginForm.get('password');
    this.email = <FormControl>this.loginForm.get('email');
  }

  public auth: Boolean = false;
  public printValidUser(): void {
    var data: Map<String, String> = new Map<String, String>();
    this.auth = true;
  }

  test = "";
  onSubmit() {
    this.test = "premuto";
    this.login(this.email.value, this.password.value);
  }


  login(username : string, password : string)/*: Observable<any> */{
    this.test = "LOGIN";
    let url = "/login";
    const body = new HttpParams().set('email', username).set('psw', password);
    this.httpClient.post(url,body).subscribe(res => {this.test = "RITORNO POST";}); 
  }

  otpRequest(email : string, password : string)/*: Observable<any> */{
    this.test = "TRY TO SEND OTP";
    let url = "/api/otp";
    const body = new HttpParams().set('email', email);
    this.httpClient.post(url,body).subscribe((res) => {this.test = "BACK FROM OTP";}); 
  }

  onOtpSubmit(){
    this.test = "OTP";
    this.otpRequest(this.email.value, this.password.value);
  }

}
