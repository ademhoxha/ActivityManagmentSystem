import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegistrationService {

  constructor(private http: Http) { }

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
