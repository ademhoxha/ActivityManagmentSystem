import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  menu: any;
  constructor() { }

  ngOnInit() {
    this.menu = {};
    this.menu["user"] = true;
    this.menu["projects"] = false;
    this.menu["tasks"] = false;
    this.menu["analysis"] = false;
  }

  
  userClicked() {
    this.menu["user"] = true;
    this.menu["projects"] = false;
    this.menu["tasks"] = false;
    this.menu["analysis"] = false;
  }
  projectsClicked() {
    this.menu["user"] = false;
    this.menu["projects"] = true;
    this.menu["tasks"] = false;
    this.menu["analysis"] = false;
  }
  tasksClicked() {
    this.menu["user"] = false;
    this.menu["projects"] = false;
    this.menu["tasks"] = true;
    this.menu["analysis"] = false;
  }
  analysisClicked() {
    this.menu["user"] = false;
    this.menu["projects"] = false;
    this.menu["tasks"] = false;
    this.menu["analysis"] = true;
  }

}
