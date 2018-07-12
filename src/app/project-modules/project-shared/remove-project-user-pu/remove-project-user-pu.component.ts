import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { ProjectApiService } from '@app/project-modules/project-core/project-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-project-user-pu',
  templateUrl: './remove-project-user-pu.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../pick-project-available-users/pick-project-available-users.component.css']
})
export class RemoveProjectUserPuComponent implements OnInit {

  @Input() inputData: any;
  @Output() errorFunction = new EventEmitter<any>();
  @Output() returnFunction = new EventEmitter<any>();
  constructor(private projectAPI: ProjectApiService, private router: Router) { }

  loaded: boolean;
  userList;
  userListLabel;
  ngOnInit() {
    this.loaded = false;
    this.userListLabel = {};
    this.userListLabel['sourceLabel'] = "Project Team";
    this.userListLabel['targetLabel'] = "Users To Remove";
    this.projectUserListRequest();
  }

  projectUserListRequest() {
    var data = {};
    data['projectName'] = this.inputData.projectName;
    this.projectAPI.projectUserListRequest(data).then((res: any) => {

      console.log("status: " + res.status)
      if (res.status == 200) {
        this.userList = res.userList;
        this.loaded = true;
      }
      else if (res.status == 401) {
        this.router.navigateByUrl('/login');
      }
      else {
        this.errorFunction.emit({severity : "error", message : "Available User List Can't be retrived, please search again"});
      }

    });
  }

  // interaction with pick up component
  public sourceList = [];
  public targetList = [];
  onExchange(data){
    this.sourceList = data['sourceList'];
    this.targetList = data['targetList'];
    
    this.returnFunction.emit(data);
  }

}

