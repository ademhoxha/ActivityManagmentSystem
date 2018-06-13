import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import * as $ from 'jquery';
import { ConfirmationService } from 'primeng/api';

import {ProjectApiService  } from '../../services/project-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  encapsulation: ViewEncapsulation.None, // to edit primeNg style form css file
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {


  newProjectForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private confirmationService: ConfirmationService, 
    private http: Http, private projectAPI: ProjectApiService, private router:Router) { }

  ngOnInit() {
    //$('#myDatepicker').datetimepicker();
    /* $("input[name=projectName]").blur(() => {
       this.projectName = $("input[name=projectName]").val();
     })
     $("input[name=selledDays]").blur(() => {
       this.selledDays = $("input[name=selledDays]").val();
     })
     $("input[name=estimatedDays]").blur(() => {
       this.estimatedDays = $("input[name=estimatedDays]").val();
     })
     $("input[name=costSelledDays]").blur(() => {
       $("input[name=costSelledDays]").val($("input[name=costSelledDays]").val().replace("_", "0"));
       this.costSelledDays = $("input[name=costSelledDays]").val();
     })
     $("input[name=estSelledDays]").blur(() => {
       $("input[name=estSelledDays]").val($("input[name=estSelledDays]").val().replace("_", "0"));
       this.estSelledDays = $("input[name=estSelledDays]").val();
     })
 
     $("#estSelledDays").blur(
       () => { console.log("BLURRRR") }
     )*/
    this.initForm();
   // this.dateIntegrity();
  }

  /*test() {
    var x : string = this.newProjectForm.get("estSelledDays").value;
    console.log(x.split(",")[1].length)
    if (x.split(",")[1].length == 0){
      if(x.split(",")[0].length == 3)
        this.newProjectForm.get("estSelledDays").setValue(x.concat(",00"));
      else if(x.split(",")[0].length == 3)

    }
    else if (x.split(",")[1].length != 2)
    this.newProjectForm.get("estSelledDays").setValue(x.concat("0"));
  }*/

  loader : boolean = false;
  projectName;
  date1: Date = new Date();
  date2: Date = new Date();
  selledDays;
  estimatedDays;
  costSelledDays;
  estSelledDays: string;

  newProject(startDate : Date, endDate : Date) {

    this.date1 = new Date(startDate);
    this.date2 = new Date(endDate);

    if (this.date1 >= this.date2) {
      this.confirmationService.confirm({
        message: 'Are you sure to use these date?',
        accept: () => {
          this.callService();
        }
      });
    }
    else{
      this.callService();
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
 /* minDeliveryDate : Date = new Date();
  dateIntegrity() {
    if(this.date1 && this.date1 != null){
      this.minDeliveryDate = new Date();
      this.minDeliveryDate.setDate(this.date1.getDate() + 1);
      if(this.date2 && this.date2 != null && this.date2.getDate() <= this.date1.getDate()){
        this.date2 = new Date();
        this.date2.setDate(this.date1.getDate() + 1);
      }
    }
  }*/

  callService(){
    var data = {};
    data["projectName"]=this.newProjectForm.get("projectName").value;
    data["startDate"]= this.date1;
    data["deliveryDate"]=this.date2;
    data["selledDays"]=this.newProjectForm.get("selledDays").value;
    data["estimatedDays"]=this.newProjectForm.get("estimatedDays").value;
    data["selledCostForDay"]=this.newProjectForm.get("costSelledDays").value;
    data["estimatedCostForDay"]=this.newProjectForm.get("estcostSelledDays").value;
    this.newProjectForm.reset();

    this.loader = true;

    this.projectAPI.newProjectRequest(data).then((res: any) => {
      console.log("status: "+res.status)
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
  resultFlag : boolean = false;
  lanchReturnMessage(severity, message){
    this.resultData["severity"] = severity;
    this.resultData["message"] = message;
    this.resultFlag = true;
    setTimeout(() => { 
      this.resultFlag = false; 
    }, 4000)
  }

}
