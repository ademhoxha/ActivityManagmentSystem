import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';


import { ProjectApiService } from '@app/project-modules/project-core/project-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-project-member',
  templateUrl: './remove-project-member.component.html',
  styleUrls: ['./remove-project-member.component.css']
})
export class RemoveProjectMemberComponent implements OnInit {

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
    this.tabDisabled["editTeam"] = true;

    this.tabSelected["search"] = true;
    this.tabSelected["editTeam"] = false;

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

    this.tabDisabled["editTeam"] = false;

    this.tabSelected["search"] = false;
    this.tabSelected["editTeam"] = true;

    setTimeout(() => { this.resetUserList = true; }, 150)
  }

  onTabChange(event) {
    console.log("INDEX: " + event.index);
    if (event.index == 0) {
      this.tabSelected["search"] = true;
      this.tabSelected["editTeam"] = false;
    }
    else {
      this.tabSelected["search"] = false;
      this.tabSelected["editTeam"] = true;
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
    data["removedlist"] = userList;

    this.resetList()
    this.loader = true;

    // call service
    console.log(data)
    this.projectAPI.projectRemoveTeamMemberRequest(data).then((res: any) => {
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
