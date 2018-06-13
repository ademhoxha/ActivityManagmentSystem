import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProjectApiService } from '../../services/project-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-user-list-table',
  templateUrl: './project-user-list-table.component.html',
  styleUrls: ['./project-user-list-table.component.css']
})
export class ProjectUserListTableComponent implements OnInit {

  @Input() inputData: any;
  @Output() errorFunction = new EventEmitter<any>();
  constructor(private projectAPI: ProjectApiService, private router: Router) { }

  loader: boolean;
  data;
  ngOnInit() {
    this.loader = false;
    this.projectUserListRequest();
  }

  projectUserListRequest() {
    var data = {};
    data['projectName'] = this.inputData.projectName;
    this.projectAPI.projectUserListRequest(data).then((res: any) => {

      console.log("status: " + res.status)
      if (res.status == 200) {
        this.data = {};
        this.data['cols'] = [{ field : "label" , header : "Project Members"}];
        this.data['rows'] = res.userList;
        this.loader = true;
      }
      else if (res.status == 401) {
        this.router.navigateByUrl('/login');
      }
      else {
        this.errorFunction.emit({severity : "error", message : "Project User List Can't be retrived, please search again"});
      }

    });
  }

}
