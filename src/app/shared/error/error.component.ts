import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input() inputData: any; // must bee used to onInit not to constructor
  constructor() {
  }

  text: string = "No error description available";
  msgs: Message[] = [];
  ngOnInit() {
    if (this.inputData && this.inputData.message) {
      this.text = this.inputData.message;
    }

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
