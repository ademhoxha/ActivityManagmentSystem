import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { ProjectApiService } from '@app/project-modules/project-core/project-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-task',
  templateUrl: './select-task.component.html',
  styleUrls: ['./select-task.component.css']
})
export class SelectTaskComponent implements OnInit {


  @Input() project: any;
  @Output() returnFunction = new EventEmitter<any>();

  taskList;
  selectedItem;
  constructor(private projectAPI: ProjectApiService, private router: Router) { }

  ngOnInit() {
    this.getTaskList();
  }


  getTaskList() {
    var data = { projectName: this.project }
    this.projectAPI.getProjectTaskListRequest(data).then((res: any) => {
      console.log("status: " + res.status)
      if (res.status == 200) {
        //this.taskList = res.taskList;

        /*this.taskList = [];
        res.taskList.forEach(element => {
          this.taskList.push({ label: element, value: element })
        });*/
        this.taskList = res.taskList.map(element => {
          return { label: element, value: element };
        });
      }
      else if (res.status == 401) {
        this.router.navigateByUrl('/login');
      }
      else {
        this.returnFunction.emit({ state: "error", message: "Task List Can't be retrived, please reload the page" });
      }
    });
  }

  taskSearch() {
    this.returnFunction.emit({ selected: this.selectedItem });
  }

  taskSelected(ret) {
    this.selectedItem = ret.selectedItem;
  }

}
