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
    return this.http.post(url, body).toPromise().then((response) => {
      var ret = {}

      if (response.status == 200) // body parser
        ret = response.json();

      ret['status'] = response.status;
      return ret;
    }).catch(() => {
      var ret = {};
      ret["status"] = 500;
      return ret;
    });
  }

  otpValidation(data): Promise<void | any> {
    let url = "/api/otp/validation";
    const body = {
      email: data.email,
      password: data.password,
      otpCode: data.otpCode
    }
    return this.http.post(url, body).toPromise().then(response => {
      var ret = {}
      
      if (response.status == 200) // body parser
        ret = response.json();

      ret['status'] = response.status;
      return ret;
    }).catch(() => {
      var ret = {};
      ret["status"] = 500;
      return ret;
    });
  }

  login(data): Promise<void | any> {
    let url = "/login";
    const body = {
      email: data.email,
      password: data.password,
    }

    if (data.otpCode)
      body['otpCode'] = data.otpCode;

    return this.http.post(url, body).toPromise().then(response => {
      var ret = {}
      
      if (response.status == 200) // body parser
        ret = response.json();

      ret['status'] = response.status;
      return ret;
    }).catch(() => {
      var ret = {};
      ret["status"] = 500;
      return ret;
    });
  }

  registrationRequest(body): Promise<void | any> {
    let url = "/api/registration";
    return this.http.post(url, body).toPromise().then(response => {
      var ret = {}
      
      if (response.status == 200) // body parser
        ret = response.json();

      ret['status'] = response.status;
      return ret;
    }).catch(() => {
      var ret = {};
      ret["status"] = 500;
      return ret;
    });
  }


}
