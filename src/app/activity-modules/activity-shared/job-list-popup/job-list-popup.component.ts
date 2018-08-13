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
  selectedJob;
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
        this.returnFunction.emit({ state: "error", message: "Job List Can't be retrived, please reload the page" });
      }*/
    });
  }

  prepareJobList(executedJobList) {
    console.log("executedJobList")
    console.log(executedJobList)
    for (var prj in executedJobList) {

      this.jobList = [];
      for (var tsk in executedJobList[prj]) {

        var jobsArray: Array<any> = executedJobList[prj][tsk];

        this.jobList.push({
          label: prj + " " + tsk,
          items: jobsArray.map((element) => {
            return {
              label: element, value: {
                projectName: prj,
                taskName: tsk,
                jobName : element
              }
            };
          })
        });

      }

    }
    this.loader = false;
  }

  jobSelected(ret) {
    this.selectedJob = ret.selectedItem;
  }

  addJobToEvent() {
    var ret = { selectedJob: this.selectedJob }
    this.addJobFunc.emit(ret);
  }

  removeSelectedEvent() {
    this.removeJobFunc.emit();
  }

  onHide() {
    this.hidePopUp.emit(undefined);
  }

  /*prepareJobList(executedJobList: Array<any>) {
    this.jobList = executedJobList.map(function (element) {
      return { label: element, value: element };
    });
    this.loader = false;
  }*/

}
