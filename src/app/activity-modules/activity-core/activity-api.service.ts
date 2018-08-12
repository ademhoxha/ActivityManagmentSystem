import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ActivityApiService {

  constructor(private http: Http) { }


  getUserJobListRequest(data): Promise<void | any> {
    let url = "/api/job/getuserjoblist";
    const body = {};
    return this.http.post(url, body).toPromise().then((response) => {
      var ret = {}
      if (response.status == 200) // body parser
        ret = response.json();
      ret['status'] = response.status;
      return ret;
    }).catch((response) => {
      var ret = {}
      if (response.status == 200) // body parser
        ret = response.json();
      ret['status'] = response.status;
      return ret;
    });
  }

}
