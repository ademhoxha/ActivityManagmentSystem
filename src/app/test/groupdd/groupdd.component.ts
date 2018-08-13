import { Component, OnInit } from '@angular/core';
import { SelectItemGroup } from '../../../../node_modules/primeng/api';

@Component({
  selector: 'app-groupdd',
  templateUrl: './groupdd.component.html',
  styleUrls: ['./groupdd.component.css']
})
export class GroupddComponent implements OnInit {

  groupedCars: SelectItemGroup[];
  selectedCar3;

  multipleGroup;
  selectedCar4;

  constructor() {
    this.groupedCars = [
      {
        label: 'ProjectA - TaskA', value: 'germany.png',
        items: [
          { label: 'Audi', value: 'Audi' },
          { label: 'BMW', value: 'BMW' },
          { label: 'Mercedes', value: 'Mercedes' }
        ]
      },
      {
        label: 'USA', value: 'usa.png',
        items: [
          { label: 'Cadillac', value: 'Cadillac' },
          { label: 'Ford', value: 'Ford' },
          { label: 'GMC', value: 'GMC' }
        ]
      },
      {
        label: 'Japan', value: 'japan.png',
        items: [
          { label: 'Honda', value: 'Honda' },
          { label: 'Toyota', value: 'Toyota' }
        ]
      }
    ];

    this.multipleGroup = [
      {

        label: 'ProjectA - TaskA', value: 'germany.png',
        items: [
          {
            label: 'Audi', items: [
              { label: 'Cadillac', value: 'Cadillac' },
              { label: 'Ford', value: 'Ford' },
              { label: 'GMC', value: 'GMC' }
            ]
          }

        ]
      }
    ];
  }

  ngOnInit() {
  }



}
