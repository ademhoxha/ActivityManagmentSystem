import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectApiService {

  constructor(private http: Http) { }

  newProjectRequest(data): Promise<void | any> {
    let url = "/api/project/new";
    const body = {
      projectName: data.projectName,
      startDate: data.startDate,
      deliveryDate: data.deliveryDate,
      selledDays: data.selledDays,
      estimatedDays: data.estimatedDays,
      selledCostForDay: data.selledCostForDay,
      estimatedCostForDay: data.estimatedCostForDay
    }
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



  projectListRequest(data): Promise<void | any> {
    let url = "/api/project/list";
    const body = {}
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

  projectUserListRequest(data): Promise<void | any> {
    let url = "/api/project/userList";
    const body = { projectName: data.projectName };
    console.log("ProjectName: " + data.projectName)
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

  projectEditTeamRequest(data): Promise<void | any> {
    let url = "/api/project/editTeam";
    const body = {
      projectName: data.projectName,
      newProjectMembers: data.newProjectMembers
    };
    console.log("ProjectName: " + data.projectName)
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


  projectRemoveTeamMemberRequest(data): Promise<void | any> {
    let url = "/api/project/removeTeamMembers";
    const body = {
      projectName: data.projectName,
      removedlist: data.removedlist
    };
    console.log("ProjectName: " + data.projectName)
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


  newProjectTaskRequest(data): Promise<void | any> {
    let url = "/api/project/newProjectTask";
    const body = {
      projectName: data.projectName,
      taskName: data.taskName,
      startDate: data.startDate,
      deliveryDate: data.deliveryDate,
      selledDays: data.selledDays,
      estimatedDays: data.estimatedDays,
      selledCostForDay: data.selledCostForDay,
      estimatedCostForDay: data.estimatedCostForDay,
    };
    // extra days
    if (data.extraSelledDays)
      body["extraSelledDays"] = data.extraSelledDays;

    if (data.extraEstimatedDays)
      body["extraEstimatedDays"] = data.extraEstimatedDays;

    console.log("ProjectName: " + data.projectName)
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


  getProjectRequest(data): Promise<void | any> {
    let url = "/api/project/getProject";
    const body = {
      projectName: data.projectName,
    };
    console.log("ProjectName: " + data.projectName)
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


  getProjectTaskListRequest(data): Promise<void | any> {
    let url = "/api/project/getprojecttasklist";
    const body = { projectName : data.projectName}
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


  newJobAssignationRequest(data): Promise<void | any> {
    let url = "/api/job/jobassignation";
    const body = {
      projectName: data.projectName,
      taskName: data.taskName,
      jobName: data.jobName,

      startDate: data.startDate,
      deliveryDate: data.deliveryDate,

      estimatedDays: data.estimatedDays,
      estimatedCostForDay: data.estimatedCostForDay,
    };
    // extra days
    if (data.extraEstimatedDays)
      body["extraEstimatedDays"] = data.extraEstimatedDays;

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


  getTaskRequest(data): Promise<void | any> {
    let url = "/api/project/gettask";
    const body = {
      projectName: data.projectName,
      taskName: data.taskName,
    };
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
