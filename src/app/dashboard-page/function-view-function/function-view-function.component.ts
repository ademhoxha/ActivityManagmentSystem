import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-function-view-function',
  templateUrl: './function-view-function.component.html',
  styleUrls: ['./function-view-function.component.css']
})
export class FunctionViewFunctionComponent implements OnInit {

  
  @Input() functions;
  @Output() returnFunction = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    /*this.functions = [
      {url: 'newproject' ,name: 'New Project',icon: 'fa fa-save'},
      {url: 'editproject' ,name: 'Edit Project',icon: 'fa fa-edit'},
      {url: 'closeproject' ,name: 'Close Project',icon: 'fa fa-check-circle'}
    ]*/
  }

  onClick(url) {
    this.returnFunction.emit({id : url});
  }

}
