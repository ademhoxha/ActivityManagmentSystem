import { Component, Input, ViewEncapsulation, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-step-item',
  templateUrl: './step-item.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./step-item.component.css']
})
export class StepItemComponent implements AfterContentInit {

  @Input() active;
  @Input() disabled;
  @Input() icon;
  @Input() title;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit()  {
  }

}
