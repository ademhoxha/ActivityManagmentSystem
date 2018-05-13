import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input() inputData : any; // must bee used to onInit not to constructor
  constructor() {
  }

  text : String = "No error description available";
  ngOnInit() {
    if(this.inputData && this.inputData.message){
      this.text = this.inputData.message;
    }
  }

}
