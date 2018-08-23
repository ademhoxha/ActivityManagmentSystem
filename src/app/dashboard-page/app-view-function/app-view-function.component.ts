import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-app-view-function',
  templateUrl: './app-view-function.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app-view-function.component.css']
})
export class AppViewFunctionComponent implements OnInit {

  @Output() returnFunction = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onClick(id){
    this.returnFunction.emit({ id : id});
  }

}
