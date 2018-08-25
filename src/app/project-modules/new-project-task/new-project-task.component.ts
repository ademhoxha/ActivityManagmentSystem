import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/toPromise';


import { ProjectApiService } from '@app/project-modules/project-core/project-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project-task',
  templateUrl: './new-project-task.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./new-project-task.component.css']
})
export class NewProjectTaskComponent implements OnInit {

  componentForm: FormGroup;
  resultFlag: boolean = false;
  resultData = {};
  constructor(private formBuilder: FormBuilder, private projectAPI: ProjectApiService, private router: Router) { }


  ngOnInit() {
    this.initForm();
    this.initTabview();
  }

  labelOn = "Yes Extra Days";
  labelOff = "No Extra Days";
  initForm() {
    this.componentForm = this.formBuilder.group({
      taskName: new FormControl('',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),

      /*date1: new FormControl('',
        Validators.compose([Validators.required])
      ),

      date2: new FormControl('',
        Validators.compose([Validators.required])
      ),*/

      selledDays: new FormControl('',
        Validators.compose([Validators.required])
      ),
      estimatedDays: new FormControl('',
        Validators.compose([Validators.required])
      ),

      costSelledDays: new FormControl('',
        Validators.compose([Validators.required])
      ),

      estcostSelledDays: new FormControl('',
        Validators.compose([Validators.required])
      )
    });
  }
  tabDisabled;
  tabSelected;
  searchReset;
  resetTaskView;
  initTabview() {
    this.searchReset = true;
    this.tabDisabled = {};
    this.tabSelected = {};

    this.tabDisabled["search"] = false;
    this.tabDisabled["insertTask"] = true;
    //this.tabDisabled["insertTask"] = false; // only debug

    this.tabSelected["search"] = true;
    this.tabSelected["insertTask"] = false;

    this.resetTaskView = false;
  }

  /*onTabChange(event) {
    console.log("INDEX: " + event.index);
    if (event.index == 0) {
      this.tabSelected["search"] = true;
      this.tabSelected["insertTask"] = false;
    }
    else {
      this.tabSelected["search"] = false;
      this.tabSelected["insertTask"] = true;
    }
  }*/
  onTabChange(ret) {
    if (ret.title == "Project Selection") {
      this.tabSelected["search"] = true;
      this.tabSelected["insertTask"] = false;
    }
    else {
      this.tabSelected["search"] = false;
      this.tabSelected["insertTask"] = true;
    }
  }
  

  projectName;
  projectSelection(retData) {
    console.log("SelectedProject: " + retData.selected);
    this.projectName = retData.selected;

    if (retData.state && retData.state == "error") {
      this.lanchReturnMessage(retData.state, retData.message);
      return this.initTabview();
    }
    
    this.reset();
    return this.loadProjectInfo();
  }

  loadProjectInfo() {
    this.openTab();
    var data = { projectName: this.projectName };
    console.log("LAUNCH LOAD PROJECT: " + data.projectName)
    this.projectAPI.getProjectRequest(data).then((res: any) => {
      console.log("status LOAD PROJECT: " + res.status)

      if (res.status == 200) {
        return this.mapData(res);
      }
      else if (res.status == 401) {
        this.router.navigateByUrl('/login');
      }
      else {
        this.lanchReturnMessage("error", res.message);
        return this.initTabview();
      }

      this.searchReset = false;
      setTimeout(() => { this.resetForm(); }, 150)
    });
  }

  prjRemaningSelledDays: number;
  prjRemaningEstimatedDays: number;
  prjExtraSelledDays: number;
  prjExtraEstimatedDays: number;
  prjSelledDays: number;
  prjEstimatedDays: number;
  mapData(data) {
    console.log("dataaaa");
    console.log(data);
    this.prjRemaningSelledDays = data.remainingSelledDays;
    this.prjRemaningEstimatedDays = data.remainingEstimatedDays;
    this.prjSelledDays = data.selledDays;
    this.prjEstimatedDays = data.estimatedDays;
    this.prjExtraSelledDays = data.extraSelledDays;
    this.prjExtraEstimatedDays = data.extraEstimatedDays;
    this.componentForm.get("costSelledDays").setValue(data.selledCostForDay ? data.selledCostForDay : 0);
    this.componentForm.get("estcostSelledDays").setValue(data.estimatedCostForDay ? data.estimatedCostForDay : 0);
    this.openView();
  }

  viewLoader: boolean = true;
  openTab() {
    this.tabDisabled["insertTask"] = false;
    this.tabSelected["search"] = false;
    this.tabSelected["insertTask"] = true;
    this.viewLoader = true;
  }

  openView() {
    //  setTimeout(() => { 
    this.resetTaskView = true;
    this.viewLoader = false;
    //  }, 150)
  }

  lanchReturnMessage(severity, message) {
    this.resultData["severity"] = severity;
    this.resultData["message"] = message;
    this.resultFlag = true;
    setTimeout(() => {
      this.resultFlag = false;
    }, 4000)
  }

  loader = false;
  onSubmit(startDate, endDate) {

    var data = {
      projectName: this.projectName,
      taskName: this.componentForm.get("taskName").value,
      startDate: startDate,
      deliveryDate: endDate,
      selledDays: this.componentForm.get("selledDays").value,
      estimatedDays: this.componentForm.get("estimatedDays").value,
      selledCostForDay: this.componentForm.get("costSelledDays").value,
      estimatedCostForDay: this.componentForm.get("estcostSelledDays").value,
    };
    // extra days
    if (this.bExtraSelledDays) {
      if (this.extraSelledDays && this.extraSelledDays > 0)
        data["extraSelledDays"] = this.extraSelledDays;
    }
    if (this.bExtraEstrimatedDays) {
      if (this.extraEstimatedDays && this.extraEstimatedDays > 0)
        data["extraEstimatedDays"] = this.extraEstimatedDays;
    }

    this.reset(); // reset all data

    this.loader = true;
    // call service
    console.log(data)
    this.projectAPI.newProjectTaskRequest(data).then((res: any) => {
      console.log("status: " + res.status)
      this.loader = false;

      if (res.status == 200) {
        this.lanchReturnMessage("success", "Project Task Initialized");
      }
      else if (res.status == 401) {
        this.router.navigateByUrl('/login');
      }
      else {
        this.lanchReturnMessage("error", res.message);
      }

      this.searchReset = false;
      setTimeout(() => { this.resetForm(); }, 150)
    });
  }

  resetForm() {
    this.initTabview();
    setTimeout(() => {
      this.bExtraEstrimatedDays = false;
      this.bExtraSelledDays = false;
    }, 150)
  }


  // other variable
  extraSelledDays: number = 0;
  bExtraSelledDays: boolean = false;
  extraEstimatedDays: number = 0;
  bExtraEstrimatedDays: boolean = false;
  changeExtra() {
    if (!this.extraEstimatedDays)
      this.extraEstimatedDays = 0;
    if (this.extraEstimatedDays == 0) {
      //this.bExtraEstrimatedDays = false; // not works for one way binding
      // setTimeout(() => { this.bExtraEstrimatedDays = false; }, 100)
    }

    if (!this.extraSelledDays)
      this.extraSelledDays = 0;
    if (this.extraSelledDays == 0) {
      //this.bExtraSelledDays = false; // not works for one way binding
      //  setTimeout(() => { this.bExtraSelledDays = false; }, 100)
    }
  }

  changeSwitch() {
    if (!this.bExtraSelledDays) {
      if (this.extraSelledDays! = 0)
        this.extraSelledDays = 0;
    }
    if (!this.bExtraEstrimatedDays) {
      if (this.extraEstimatedDays! = 0)
        this.extraEstimatedDays = 0;
    }
  }

  reset() {
    this.componentForm.reset();
    this.extraEstimatedDays = 0;
    this.extraSelledDays = 0;
  }

}
