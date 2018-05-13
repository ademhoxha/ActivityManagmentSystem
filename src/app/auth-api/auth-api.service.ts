import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthApiService {

  constructor(private http: Http) { }

  otpRequest(data): Promise<void | any> {
    let url = "/api/otp/request";
    const body = {
      email: data.email,
      password: data.password
    }
    return this.http.post(url, body).toPromise().then(response => {
      var ret = response.json();
      ret.status = response.status;
      return ret;
    });
  }

  otpValidation(data): Promise<void | any> {
    let url = "/api/otp/validation";
    const body = {
      email: data.email,
      password: data.password,
      otpCode : data.otpCode
    }
    return this.http.post(url, body).toPromise().then(response => {
      var ret = response.json();
      ret.status = response.status;
      return ret;
    });
  }

  login(data): Promise<void | any> {
    let url = "/login";
    const body = {
      email: data.email,
      password: data.password,
      otpCode : data.otpCode
    }
    return this.http.post(url, body).toPromise().then(response => {
      var ret = response.json();
      ret.status = response.status;
      return ret;
    });
  }

  registrationRequest(body): Promise<void | any> {
    let url = "/api/registration";
    return this.http.post(url, body).toPromise().then(response => response.json() as any);
  }

}
