import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivityApiService } from '@app/activity-modules/activity-core/activity-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list-popup',
  templateUrl: './job-list-popup.component.html',
  styleUrls: ['./job-list-popup.component.css']
})
export class JobListPopupComponent implements OnInit {

  @Input() display;
  @Output() addJobFunc = new EventEmitter<any>();
  @Output() removeJobFunc = new EventEmitter<any>();
  @Output() hidePopUp = new EventEmitter<any>();

  loader = true;
  jobList = [];
  selecteJob;
  constructor(private jobService: ActivityApiService, private router: Router) { }

  ngOnInit() {
    this.jobService.getUserJobListRequest(undefined).then((res: any) => {
      console.log("status: " + res.status)
      if (res.status == 200) {
        this.prepareJobList(res.executedJobList);
      }
      else if (res.status == 401) {
        this.router.navigateByUrl('/login');
      }
      /*else {
        this.returnFunction.emit({ state: "error", message: "Project List Can't be retrived, please reload the page" });
      }*/
    });
  }

  prepareJobList(executedJobList: Array<any>) {
    this.jobList = executedJobList.map(function (element) {
      return { label: element, value: element };
    });
    this.loader = false;
  }

  jobSelected(ret) {
    this.selecteJob = ret.selectedItem;
  }

  addJobToEvent() {
    var ret = { selecteJob: this.selecteJob }
    this.addJobFunc.emit(ret);
  }

  removeSelectedEvent() {
    this.removeJobFunc.emit();
  }

  onHide() {
    this.hidePopUp.emit(undefined);
  }

}
