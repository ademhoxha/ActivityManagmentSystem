import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-start-end-date',
  templateUrl: './start-end-date.component.html',
  encapsulation: ViewEncapsulation.None, // to edit primeNg style form css file
  styleUrls: ['./start-end-date.component.css']
})
export class StartEndDateComponent implements OnInit {

  @Input() inputData: any;
  public startDate: Date;
  public endDate: Date;
  constructor() { }

  _yearRange: string = "2018:2075";
  _disabledDays: string = "[0,6]";
  startDateLabel: string = "Start Date";
  endDateLabel: string = "End Date";
  ngOnInit() {
    this.initDates();
    if (this.inputData) {
      this.initOptions();
    }
  }


  minDeliveryDate: Date = new Date();
  dateIntegrity() {
   if (this.startDate && this.startDate != null) {
      this.minDeliveryDate = new Date(this.startDate);
      this.minDeliveryDate.setDate(this.startDate.getDate() + 1);
      if (this.endDate && this.endDate != null && this.endDate <= this.startDate) {
        this.endDate = new Date(this.startDate);
        this.endDate.setDate(this.startDate.getDate() + 1);
      }
    }
  }


  initDates() {
    this.startDate = new Date();
    this.endDate = new Date();
    this.dateIntegrity();
  }

  initOptions() {
    if (this.inputData["yearRange"]) {
      this._yearRange = this.inputData["yearRange"]
    }
    if (this.inputData["disabledDays"]) {
      this._disabledDays = this.inputData["disabledDays"];
    }
    if (this.inputData["startDateLabel"]) {
      this.startDateLabel = this.inputData["startDateLabel"];
    }
    if (this.inputData["endDateLabel"]) {
      this.endDateLabel = this.inputData["endDateLabel"];
    }
  }

}
