import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //$('#myDatepicker').datetimepicker();
    $("input[name=projectName]").blur( () => {
      this.projectName =  $("input[name=projectName]").val();
    })
    $("input[name=selledDays]").blur( () => {
      this.selledDays =  $("input[name=selledDays]").val();
    })
    $("input[name=estimatedDays]").blur( () => {
      this.estimatedDays =  $("input[name=estimatedDays]").val();
    })
    $("input[name=costSelledDays]").blur( () => {
      $("input[name=costSelledDays]").val($("input[name=costSelledDays]").val().replace("_", "0"));
      this.costSelledDays =  $("input[name=costSelledDays]").val();
    })
    $("input[name=estSelledDays]").blur( () => {
      $("input[name=estSelledDays]").val($("input[name=estSelledDays]").val().replace("_", "0"));
      this.estSelledDays=  $("input[name=estSelledDays]").val();
    })
  }

  projectName;
  date1 : Date = new Date();
  date2: Date = new Date();
  selledDays ;
  estimatedDays;
  costSelledDays;
  estSelledDays : string;
  newProject() {

  }

}
