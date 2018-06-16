import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import 'rxjs/add/operator/toPromise';


import { ProjectApiService } from '@app/project-modules/project-core/project-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project-task',
  templateUrl: './new-project-task.component.html',
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

    this.tabSelected["search"] = true;
    this.tabSelected["insertTask"] = false;

    this.resetTaskView = false;
  }

  onTabChange(event) {
    console.log("INDEX: " + event.index);
    if (event.index == 0) {
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

    this.resetTaskView = false;

    this.tabDisabled["insertTask"] = false;

    this.tabSelected["search"] = false;
    this.tabSelected["insertTask"] = true;

    setTimeout(() => { this.resetTaskView = true; }, 150)
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

  onReset() {
    this.searchReset = false;
    setTimeout(() => { this.initTabview(); }, 150)
  }

  loader = false;
  onSubmit(startDate, endDate) { 

    var data = {
      projectName : this.projectName,
      taskName : this.componentForm.get("taskName").value,
      startDate : startDate,
      deliveryDate : endDate,
      selledDays :this.componentForm.get("selledDays").value,
      estimatedDays :this.componentForm.get("estimatedDays").value,
      selledCostForDay : this.componentForm.get("costSelledDays").value,
      estimatedCostForDay :this.componentForm.get("estcostSelledDays").value
    };

    this.componentForm.reset(); // reset form

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
      setTimeout(() => { this.initTabview(); }, 150)
    });
  }

}
