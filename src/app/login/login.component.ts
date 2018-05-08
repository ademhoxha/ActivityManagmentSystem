import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { AuthApiService } from '../auth-api/auth-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: Http, private authApiService: AuthApiService) {
    this.initForm();
  }

  ngOnInit() {
  }

  // response from api
  response: any;
  // response from api

  password: FormControl;
  email: FormControl;
  initForm() {
    this.loginForm = this.formBuilder.group({
      password: new FormControl('',
        Validators.compose([Validators.required])),
      email: new FormControl('',
        Validators.compose([Validators.required]))
    });

    this.password = <FormControl>this.loginForm.get('password');
    this.email = <FormControl>this.loginForm.get('email');
  }

  public auth: Boolean = false;
  public printValidUser(): void {
    var data: Map<String, String> = new Map<String, String>();
    this.auth = true;
  }

  onSubmit() {
    this.authApiService.login(this.email.value, this.password.value).then((res: any) => { this.response = res.msg });
  }


  /*login(username: string, password: string): Promise<void | any> {
    let url = "/login";
    const body = { email: username, password: password }
    return this.http.post(url, body).toPromise().then(response => response.json() as any);
  }*/

  /*otpRequest(email: string, password: string): Promise<void | any> {
    let url = "/api/otp";
    const body = { email: email, password: password }
    return this.http.post(url, body).toPromise().then(response => response.json() as any);
  }*/

  onOtpSubmit() {
    this.authApiService.otpRequest(this.email.value, this.password.value).then((res: any) => { this.response = res.msg });
  }

}
