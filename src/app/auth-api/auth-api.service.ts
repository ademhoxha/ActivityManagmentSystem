import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthApiService {

  constructor(private http: Http) { }

  otpRequest(email: string, password: string): Promise<void | any> {
    let url = "/api/otp";
    const body = { email: email, password: password }
    return this.http.post(url, body).toPromise().then(response => response.json() as any);
  }

  login(username: string, password: string): Promise<void | any> {
    let url = "/login";
    const body = { email: username, password: password }
    return this.http.post(url, body).toPromise().then(response => response.json() as any);
  }

  registrationRequest(body): Promise<void | any> {
    let url = "/api/registration";
    return this.http.post(url, body).toPromise().then(response => response.json() as any);
  }

}
