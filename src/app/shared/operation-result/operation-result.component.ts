import { Component, OnInit, Input, ViewEncapsulation  } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-operation-result',
  templateUrl: './operation-result.component.html',
  encapsulation: ViewEncapsulation.None, // to edit primeNg style form css file
  styleUrls: ['./operation-result.component.css']
})
export class OperationResultComponent implements OnInit {

  @Input() inputData: any; // must bee used to onInit not to constructor
  constructor() {
  }

  text: string = "No error description available";
  msgs: Message[] = [];
  ngOnInit() {
    if (this.inputData && this.inputData.message) {
      this.text = this.inputData.message;
    }

    console.log("severity: "+this.inputData.severity);
    
    this.msgs = [];
    if (this.inputData && this.inputData.severity == "success") {
      this.msgs.push({ severity: 'success', summary: 'Success Message', detail: this.text });
    }
    else if (this.inputData && this.inputData.severity == "info") {
      this.msgs.push({ severity: 'info', summary: 'Info Message', detail: this.text });
    }
    else if(this.inputData && this.inputData.severity == "warning"){
      this.msgs.push({severity:'warn', summary:'Warn Message', detail: this.text });
    }
    else
      this.msgs.push({ severity: 'error', summary: 'Error Message', detail: this.text });
  }


}
