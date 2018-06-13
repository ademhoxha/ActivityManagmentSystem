import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() inputData: any;
  constructor() { }

  cols;
  rows;
  ngOnInit() {
    this.cols = this.inputData.cols;
    this.rows = this.inputData.rows;
   /* this.cols = [
      {field : "prop1", header : "COLONNA 1"},
      {field : "prop2", header : "COLONNA 2"}
    ]

    this.rows = [
      {prop1 : "A1", prop2: "A2"},
      {prop1 : "B1", prop2: "B2"},
      {prop1 : "C1", prop2: "C2"},
      {prop1 : "D1", prop2: "D2"},
      {prop1 : "E1", prop2: "E2"}
    ]*/
  }

}
