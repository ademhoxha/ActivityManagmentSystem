import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProjectUtils } from '../project-utils';
import 'rxjs/add/operator/toPromise';


import { ProjectApiService } from '@app/project-modules/project-core/project-api.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';



@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {


  newProjectForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private confirmationService: ConfirmationService,
    private projectAPI: ProjectApiService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }


  loader: boolean = false;
  projectName;
  date1: Date = new Date();
  date2: Date = new Date();
  selledDays;
  estimatedDays;
  costSelledDays;
  estSelledDays: string;

  newProject(startDate: Date, endDate: Date) {

    this.date1 = new Date(startDate);
    this.date2 = new Date(endDate);


    var data = {};
    data["projectName"] = this.newProjectForm.get("projectName").value;
    data["startDate"] = this.date1;
    data["deliveryDate"] = this.date2;
    data["selledDays"] = this.newProjectForm.get("selledDays").value;
    data["estimatedDays"] = this.newProjectForm.get("estimatedDays").value;
    data["selledCostForDay"] = this.newProjectForm.get("costSelledDays").value;
    data["estimatedCostForDay"] = this.newProjectForm.get("estcostSelledDays").value;

    var validationClass = new ProjectUtils();
    var validationRet = validationClass.validateNewProjectData(data)

    console.log(validationRet)

    if (validationRet.status == validationClass.statusError) {
      var msg = "";
      validationRet.message.forEach(element => {
        msg = msg + "\n" + element
      });
      this.confirmationService.confirm({
        message: msg + "\n" + ' - Are you sure to continue?',
        accept: () => {
          this.callService(data);
        }
      });
    }
    else {
      this.callService(data);
    }
  }

  initForm() {
    this.newProjectForm = this.formBuilder.group({
      projectName: new FormControl('',
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

  callService(data) {

    this.newProjectForm.reset();

    this.loader = true;

    this.projectAPI.newProjectRequest(data).then((res: any) => {
      console.log("status: " + res.status)
      this.loader = false;
      if (res.status == 200) {
        this.lanchReturnMessage("success", "Project Successfully Created");
      }
      else if (res.status == 401) {
        //this.lanchReturnMessage("error", "User Unauthorized");
        // this.location.replaceState('/'); // clears browser history so they can't navigate with back button
        this.router.navigateByUrl('/login');
      }
      else {
        this.lanchReturnMessage("error", "Project Creation Failed");
      }

    });

  }

  resultData = {};
  resultFlag: boolean = false;
  lanchReturnMessage(severity, message) {
    this.resultData["severity"] = severity;
    this.resultData["message"] = message;
    this.resultFlag = true;
    setTimeout(() => {
      this.resultFlag = false;
    }, 4000)
  }





  projectCost: number = 0;
  numberOfDays: number = 0;
  workers: number = 0;
  projectReducedView(startDate: Date, endDate: Date) {
    var validationClass = new ProjectUtils();

    var selDays =  this.newProjectForm.get("selledDays").value != 0 ? this.newProjectForm.get("selledDays").value : 0;
    var costSelDays =  this.newProjectForm.get("costSelledDays").value != 0 ? this.newProjectForm.get("costSelledDays").value : 0;
    var estDays =  this.newProjectForm.get("estimatedDays").value != 0 ? this.newProjectForm.get("estimatedDays").value : 0;
    var costEstDays =  this.newProjectForm.get("estcostSelledDays").value != 0 ? this.newProjectForm.get("estcostSelledDays").value : 0;
    this.projectCost = validationClass.getProjectCost( selDays, costSelDays, estDays, costEstDays);

    if (startDate && endDate) {
      var start = new Date(startDate);
      var end = new Date(endDate);
      this.numberOfDays = validationClass.getProjectNumberOfDays(end, start);
    }

    if(estDays > 0 && this.numberOfDays && this.numberOfDays > 0){
      this.workers = validationClass.getProjectWorkers(estDays, this.numberOfDays)
    }

  }

  onDateChange(data) {
    this.date1 = data["startDate"];
    this.date2 = data["endDate"];
    this.projectReducedView(data["startDate"],data["endDate"]);
  }

}
