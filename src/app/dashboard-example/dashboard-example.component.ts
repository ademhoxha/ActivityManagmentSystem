import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-example',
  templateUrl: './dashboard-example.component.html',
  styleUrls: ['./dashboard-example.component.css']
})
export class DashboardExampleComponent implements OnInit {

  functionList = {};
  selectedFunction : string;
  constructor() { }

  ngOnInit() {
    this.initFunction();
  }

  initFunction(){
    this.functionList['viewproject']=false;
    this.functionList['newproject']=true; // start with new project
    this.functionList['newprojectteam']=false;
    this.functionList['editprojectteam']=false;
    this.functionList['newprojecttask']=false;
    this.functionList['editprojecttask']=false;
    this.functionList['viewactivity']=false;
    this.functionList['newdayactivity']=false;

    this.selectedFunction='newproject';
  }

  activateFunction(data){
    this.functionList[this.selectedFunction] = false;
    this.selectedFunction = data['function'];
    this.functionList[data['function']] = true;
    //setTimeout(() => { this.functionList[data['function']] = true; }, 25);
  }

}
