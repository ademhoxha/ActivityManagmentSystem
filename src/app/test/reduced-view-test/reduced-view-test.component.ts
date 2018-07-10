import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-reduced-view-test',
  templateUrl: './reduced-view-test.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./reduced-view-test.component.css']
})
export class ReducedViewTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
