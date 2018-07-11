import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-table-style',
  templateUrl: './table-style.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./table-style.component.css']
})
export class TableStyleComponent implements OnInit {

  constructor() { }

  cars = [];
  ngOnInit() {
    this.cars.push({
      "vin" : "vin111",
      "year" : "year111",
      "brand" : "brand111",
      "color" : "color111",
    });
    this.cars.push({
      "vin" : "vin222",
      "year" : "year222",
      "brand" : "brand222",
      "color" : "color222",
    });
  }

}
