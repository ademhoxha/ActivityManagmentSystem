import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-job-list-popup',
  templateUrl: './job-list-popup.component.html',
  styleUrls: ['./job-list-popup.component.css']
})
export class JobListPopupComponent implements OnInit {

  @Input() display;
  @Output() addJobFunc = new EventEmitter<any>();
  @Output() removeJobFunc = new EventEmitter<any>();

  jobList = [];
  selecteJob;
  constructor() { }

  ngOnInit() {
  }

  jobSelected(ret) {
    this.selecteJob = ret.selectedItem;
  }

  addJobToEvent() {
    var ret = { selecteJob: this.selecteJob }
    this.addJobFunc.emit(ret);
    this.display = false;
  }

  removeSelectedEvent() {
    this.removeJobFunc.emit();
    this.display = false;
  }

}
