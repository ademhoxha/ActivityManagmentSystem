import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/toPromise';


import { ProjectApiService } from '@app/project-modules/project-core/project-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-assignation',
  templateUrl: './job-assignation.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./job-assignation.component.css']
})
export class JobAssignationComponent implements OnInit {

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
      jobName: new FormControl('',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
      estimatedDays: new FormControl('',
        Validators.compose([Validators.required])
      ),
      estcostSelledDays: new FormControl('',
        Validators.compose([Validators.required])
      )
    });
  }
  tabDisabled;
  tabSelected;
  projectSearchReset;
  initTabview() {
    this.projectSearchReset = true;
    this.taskSearchReset = false;
    this.tabDisabled = {};
    this.tabSelected = {};

    this.tabDisabled["PrjSearch"] = false;
    this.tabDisabled["TskSearch"] = true;
    this.tabDisabled["insertJob"] = true;

    this.tabSelected["PrjSearch"] = true;
    this.tabSelected["TskSearch"] = false;
    this.tabSelected["insertJob"] = false;

  }

  onTabChange(event) {
    if (event.title == "Project Selection") {
      this.tabSelected["PrjSearch"] = true;
      this.tabSelected["TskSearch"] = false;
      this.tabSelected["insertJob"] = false;
    }
    else if (event.title == "Task Selection") {
      this.tabSelected["PrjSearch"] = false;
      this.tabSelected["TskSearch"] = true;
      this.tabSelected["insertJob"] = false;
    }
    else if (event.title == "Job Information") {
      this.tabSelected["PrjSearch"] = false;
      this.tabSelected["TskSearch"] = false;
      this.tabSelected["insertJob"] = true;
    }
  }

  taskTabEnabled() {
    this.tabDisabled["PrjSearch"] = false;
    this.tabDisabled["TskSearch"] = false;
    this.tabDisabled["insertJob"] = true;

    this.tabSelected["PrjSearch"] = false;
    this.tabSelected["TskSearch"] = true;
    this.tabSelected["insertJob"] = false;
  }

  projectName;
  projectSelection(retData) {
    this.projectName = retData.selected;
    this.taskSearchReset = false;

    if (retData.state && retData.state == "error") {
      this.lanchReturnMessage(retData.state, retData.message);
      return this.initTabview();
    }
    return this.taskSelectionView();
  }

  taskSearchReset;
  taskSelectionView() {
    setTimeout(() => { this.taskTabEnabled(); this.taskSearchReset = true; }, 150)
  }

  taskName;
  taskSelection(retData) {
    this.taskName = retData.selected;

    if (retData.state && retData.state == "error") {
      this.lanchReturnMessage(retData.state, retData.message);
      return this.initTabview();
    }

    return this.loadTaskInfo();
  }



  loadTaskInfo() {
    this.openTab();

    var data = { 
      projectName: this.projectName,
      taskName: this.taskName
     };

    this.projectAPI.getTaskRequest(data).then( (res: any) => {
      console.log("status LOAD TASK: " + res.status)
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

      this.projectSearchReset = false;
      setTimeout(() => { this.resetForm(); }, 150)
    });
  }

  RemaningEstimatedDays: number;
  prjExtraEstimatedDays: number;
  prjEstimatedDays: number;

  mapData(data) {
    this.RemaningEstimatedDays = data.remainingEstimatedDays;
    this.prjEstimatedDays = data.estimatedDays;
    this.prjExtraEstimatedDays = data.extraEstimatedDays;
    this.componentForm.get("estcostSelledDays").setValue(data.estimatedCostForDay ? data.estimatedCostForDay : 0);
    this.openView();
  }

  viewLoader: boolean = true;
  openTab() {
    this.tabDisabled["insertJob"] = false;
    this.tabSelected["PrjSearch"] = false;
    this.tabSelected["TskSearch"] = false;
    this.tabSelected["insertJob"] = true;
    this.viewLoader = true;
  }

  openView() {
    //  setTimeout(() => { 
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
      taskName: this.taskName,
      jobName: this.componentForm.get("jobName").value,
      startDate: startDate,
      deliveryDate: endDate,
      estimatedDays: this.componentForm.get("estimatedDays").value,
      estimatedCostForDay: this.componentForm.get("estcostSelledDays").value,
    };
    // extra days
    if (this.bExtraEstrimatedDays) {
      if (this.extraEstimatedDays && this.extraEstimatedDays > 0)
        data["extraEstimatedDays"] = this.extraEstimatedDays;
    }

    this.reset(); // reset all data

    this.loader = true;
    // call service
    console.log(data)
    this.projectAPI.newJobAssignationRequest(data).then((res: any) => {
      console.log("status: " + res.status)
      this.loader = false;

      if (res.status == 200) {
        this.lanchReturnMessage("success", "Job Initialized");
      }
      else if (res.status == 401) {
        this.router.navigateByUrl('/login');
      }
      else {
        this.lanchReturnMessage("error", res.message);
      }

      this.projectSearchReset = false;
      setTimeout(() => { this.resetForm(); }, 150)
    });
  }

  resetForm() {
    this.initTabview();
    setTimeout(() => {
      this.bExtraEstrimatedDays = false;
    }, 150)
  }


  // other variable
  extraEstimatedDays: number = 0;
  bExtraEstrimatedDays: boolean = false;
  changeExtra() {
    if (!this.extraEstimatedDays)
      this.extraEstimatedDays = 0;
  }

  changeSwitch() {
    if (!this.bExtraEstrimatedDays) {
      if (this.extraEstimatedDays! = 0)
        this.extraEstimatedDays = 0;
    }
  }

  reset() {
    this.componentForm.reset();
    this.bExtraEstrimatedDays = false;
    this.extraEstimatedDays = 0;
    this.projectName = undefined;
    this.taskName = undefined;
    this.projectSearchReset = false; 
    setTimeout(() => {  this. initTabview();}, 150)
  }

}
