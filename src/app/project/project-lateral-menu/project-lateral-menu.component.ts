import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-lateral-menu',
  templateUrl: './project-lateral-menu.component.html',
  styleUrls: ['./project-lateral-menu.component.css']
})
export class ProjectLateralMenuComponent implements OnInit {

  @Output() returnFunction = new EventEmitter<any>(); // output event function
  constructor() { }

  ngOnInit() {
  }

  submitFunc(func){
    console.log("Function called: "+func)
    var data = {}
    data["function"] = func;
    this.returnFunction.emit(data);
  }

}
