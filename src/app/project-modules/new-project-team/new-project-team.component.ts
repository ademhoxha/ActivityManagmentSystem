import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';


import { ProjectApiService } from '@app/project-modules/project-core/project-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project-team',
  templateUrl: './new-project-team.component.html',
  styleUrls: ['./new-project-team.component.css']
})
export class NewProjectTeamComponent implements OnInit {

  resultFlag: boolean = false;
  resultData = {};

  constructor( private projectAPI: ProjectApiService, private router: Router) {
  }



  ngOnInit() {
    this.initTabview();
  }

  tabSelected;
  tabDisabled;
  resetUserList;
  searchReset;
  initTabview() {
    this.searchReset = true;
    this.tabDisabled = {};
    this.tabSelected = {};

    this.tabDisabled["search"] = false;
    this.tabDisabled["insertTeam"] = true;

    this.tabSelected["search"] = true;
    this.tabSelected["insertTeam"] = false;

    this.resetUserList = false;
  }


  projectName;
  availableUsersInputData;
  projectSelection(retData) {
    console.log("SelectedProject: " + retData.selected);
    this.projectName = retData.selected;

    if (retData.state && retData.state == "error") {
      this.lanchReturnMessage(retData.state, retData.message);
      return this.initTabview();
    }

    this.availableUsersInputData = {};
    this.availableUsersInputData['projectName'] = retData.selected;

    this.resetUserList = false;

    this.tabDisabled["insertTeam"] = false;

    this.tabSelected["search"] = false;
    this.tabSelected["insertTeam"] = true;

    setTimeout(() => { this.resetUserList = true; }, 150)
  }

  onTabChange(event) {
    console.log("INDEX: " + event.index);
    if (event.index == 0) {
      this.tabSelected["search"] = true;
      this.tabSelected["insertTeam"] = false;
    }
    else {
      this.tabSelected["search"] = false;
      this.tabSelected["insertTeam"] = true;
    }
  }



  lanchReturnMessage(severity, message) {
    this.resultData["severity"] = severity;
    this.resultData["message"] = message;
    this.resultFlag = true;
    setTimeout(() => {
      this.resultFlag = false;
    }, 4000)
  }

  userListError(data) {
    this.lanchReturnMessage(data.severity, data.message);
    this.searchReset = false;
    setTimeout(() => { this.initTabview(); }, 150)
  }


  loader = false;
  onSubmit() {
    console.log("SUBMIT")
    var data = {
      projectName: this.projectName
    }
    var userList = [];
    this.targetList.forEach(element => {
      userList.push(element.value);
    })
    data["newProjectMembers"] = userList;

    this.resetList()
    this.loader = true;

    // call service
    console.log(data)
    this.projectAPI.projectEditTeamRequest(data).then((res: any) => {
      console.log("status: " + res.status)
      this.loader = false;

      if (res.status == 200) {
        this.lanchReturnMessage("success", "Project Team Successfully Edited");
      }
      else if (res.status == 401) {
        this.router.navigateByUrl('/login');
      }
      else {
        this.lanchReturnMessage("error", "Project Team Editing Failed");
      }

      this.searchReset = false;
      setTimeout(() => { this.initTabview(); }, 150)
    });
  }

  sourceList = [];
  targetList = [];
  onPickUp(data) {
    console.log(data)
    this.sourceList = data['sourceList'];
    this.targetList = data['targetList'];
  }

  onReset() {
    this.resetList()
    //setTimeout(() => { this.resetUserList = true; }, 150)
    this.searchReset = false;
    setTimeout(() => { this.initTabview(); }, 150)
  }

  resetList() {
    this.resetUserList = false;
    this.sourceList = [];
    this.targetList = [];
  }



}
